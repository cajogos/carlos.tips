import { useRouter } from 'next/router';

import Post from '@/lib/Post';
import MarkdownParser from '@/lib/MarkdownParser';
import PostFetcher from '@/lib/PostFetcher';
import PostMarkdown from '@/components/post-markdown';

type PageProps = {
    post: Post;
    content: string;
    morePosts: Post[];
}

const PostPage = ({ post, content, morePosts }: PageProps) =>
{
    const router = useRouter();

    // TODO: if (!router.isFallback && !post?.slug) { return <ErrorPage statusCode={404} /> }

    post = Post.fromJSONString(post);
    console.log(post, 'here?');

    return (
        <div className='py-4 px-6'>
            <h1 className='text-3xl font-bold'>{post.getTitle()} <span className='text-gray-400 text-sm'>/{post.getSlug()}</span></h1>
            <PostMarkdown html={content} />
        </div>
    );
};

export default PostPage;

type RouterParams = {
    params: {
        slug: string;
    }
};

export async function getStaticProps({ params }: RouterParams)
{
    const [post, content] = await PostFetcher.getBySlugWithContent(params.slug);
    const postContent = await MarkdownParser.toHTML(content);

    const morePosts: Post[] = [];

    return {
        props: {
            post: JSON.stringify(post),
            content: postContent,
            morePosts: JSON.stringify(morePosts),
        }
    };
}

export async function getStaticPaths()
{
    const posts = await PostFetcher.getAll();
    const paths = posts.map(post => ({
        params: {
            slug: post.getSlug(),
        }
    }));
    console.log(paths);
    return {
        paths,
        fallback: false
    };
}