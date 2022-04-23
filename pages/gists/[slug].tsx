import Post from '@/lib/Post';
import MarkdownParser from '@/lib/MarkdownParser';
import PostFetcher from '@/lib/PostFetcher';
import GistMarkdown from '@/components/gist-markdown';
import Link from 'next/link';
import Gist from '@/lib/Gist';
import GistFetcher from '@/lib/GistFetcher';

type PageProps = {
    gist: Gist;
    content: string;
}

const GistPage = ({ gist, content }: PageProps) =>
{
    gist = Gist.fromJSONString(gist);

    return (
        <div className='py-4 px-6'>
            <Link href={'/gists'}>
                <a className='bg-black text-white text-sm py-2 px-3 inline-block'>Back to All Gists</a>
            </Link>
            <hr />
            <h1 className='text-3xl font-bold flex justify-between'>
                <span>{gist.getTitle()}</span>
                <span className='text-white bg-purple-900 text-sm py-2 px-2'>{gist.getLanguage()}</span>
            </h1>
            <GistMarkdown html={content} language={gist.getLanguage()} />
        </div>
    );
};

export default GistPage;

type RouterParams = {
    params: {
        slug: string;
    }
};

export async function getStaticProps({ params }: RouterParams)
{
    const [gist, content] = await GistFetcher.getBySlugWithContent(params.slug);
    const gistContent = await MarkdownParser.toHTML(content);

    return {
        props: {
            gist: JSON.stringify(gist),
            content: gistContent
        }
    };
}

export async function getStaticPaths()
{
    const gists = await GistFetcher.getAll();
    return {
        paths: gists.map(gist => ({
            params: {
                slug: gist.getSlug(),
            }
        })),
        fallback: false
    };
}