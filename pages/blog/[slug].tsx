import Post from '@/lib/Post';
import Author from '@/lib/Author';
import MarkdownParser from '@/lib/MarkdownParser';
import PostFetcher from '@/lib/PostFetcher';
import PostMarkdown from '@/components/post-markdown';
import Link from 'next/link';
import AuthorFetcher from '@/lib/AuthorFetcher';

type PageProps = {
    post: Post;
    content: string;
    author: Author;
    morePosts: Post[];
}

const PostPage = ({ post, content, author, morePosts }: PageProps) =>
{
    post = Post.fromJSONString(post);
    author = Author.fromJSONString(author);

    return (
        <div className='py-4 px-6'>
            <Link href={'/blog'}>
                <a className='bg-black text-white text-sm py-2 px-3 inline-block'>Back to All Posts</a>
            </Link>
            <hr />
            <h1 className='text-3xl font-bold'>{post.getTitle()} <span className='text-gray-400 text-sm'>/{post.getSlug()}</span></h1>
            <div className='text-blue-800 text-xs'>
                Post created on {new Date(post.getDateCreated() || '').toLocaleString()} by {author.getName()}.
            </div>
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

    const author = await AuthorFetcher.getByID(post.getAuthor());

    const morePosts: Post[] = [];

    return {
        props: {
            post: JSON.stringify(post),
            content: postContent,
            author: JSON.stringify(author),
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
    return {
        paths,
        fallback: false
    };
}