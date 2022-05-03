import fs from 'fs';
import { join } from 'path';

import Author from '@/lib/Author';

const authorDirectory = join(process.cwd(), '_authors');

export default class AuthorFetcher
{
    static async getByID(id: StringOrNull): Promise<Author>
    {
        const fullPath = join(authorDirectory, `${id}.json`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        return Author.fromJSONString(fileContents);
    }
}