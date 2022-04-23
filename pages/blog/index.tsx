import Post from '@/lib/Post';
import PostFetcher from '@/lib/PostFetcher';
import Link from 'next/link';

type PageProps = {
    posts: Post[];
};

const BlogIndex = ({ posts }: PageProps) =>
{
    return (
        <div className='flex justify-center py-6'>
            {posts.map(post =>
            {
                post = Post.fromJSONString(post);
                return (
                    <div key={post.getSlug()} className='mx-4'>
                        <Link href={`/blog/${post.getSlug()}`}>
                            <a className='text-blue-700 underline'>{post.getTitle()}</a>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default BlogIndex;

export async function getStaticProps()
{
    const posts = await PostFetcher.getAll();
    return {
        props: {
            posts: posts.map(post => JSON.stringify(post))
        }
    };
}