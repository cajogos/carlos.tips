import GistFetcher from '@/lib/GistFetcher';
import Gist from '@/lib/Gist';
import Link from 'next/link';

type PageProps = {
    gists: Gist[];
};

const GistsIndex = ({ gists }: PageProps) =>
{
    return (
        <div className='flex justify-center py-6'>
            {gists.map(gist =>
            {
                gist = Gist.fromJSONString(gist);
                return (
                    <div key={gist.getSlug()} className='mx-4'>
                        <Link href={`/gists/${gist.getSlug()}`}>
                            <a className='text-blue-700 underline'>{gist.getTitle()}</a>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default GistsIndex;

export async function getStaticProps()
{
    const gists = await GistFetcher.getAll();
    return {
        props: {
            gists: gists.map(gist => JSON.stringify(gist))
        }
    };
}