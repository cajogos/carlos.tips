import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import Gist from '@/lib/Gist';

const gistsDirectory = join(process.cwd(), '_gists');

export default class GistFetcher
{
    static async getBySlugWithContent(slug: string): Promise<[Gist, string]>
    {
        const fullPath = join(gistsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const gist = Gist.fromObject(Object.assign({}, data, { slug }));
        return [gist, content];
    }

    static async getAll(): Promise<Gist[]>
    {
        const files = fs.readdirSync(gistsDirectory);
        const gists = files.map((file) =>
        {
            const [slug,] = file.split('.');
            const fileContents = fs.readFileSync(join(gistsDirectory, file), 'utf8');
            const { data } = matter(fileContents);
            return Gist.fromObject(Object.assign({}, data, { slug }));
        });
        return gists;
    }
}