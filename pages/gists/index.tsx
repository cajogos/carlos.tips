import Link from 'next/link';

type PageProps = {
    gists: {
        id: string;
    }[];
};

const GistsIndex = ({ gists }: PageProps) =>
{
    return (
        <div className='flex justify-center py-6'>
            {gists.length > 0 ?
                gists.map(gist =>
                {
                    return (<div key={gist['id']}>Gist</div>);
                }) :
                <div>No gists found</div>}
        </div>
    );
};

export default GistsIndex;

export async function getStaticProps()
{
    return {
        props: {
            gists: [] // TODO: fetch gists
        }
    };
}