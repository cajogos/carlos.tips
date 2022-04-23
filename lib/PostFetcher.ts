import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import Post from '@/lib/Post';

const postsDirectory = join(process.cwd(), '_posts');

export default class PostFetcher
{
    static async getBySlugWithContent(slug: string): Promise<[Post, string]>
    {
        const fullPath = join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const post = Post.fromObject(Object.assign({}, data, { slug }));
        return [post, content];
    }

    static async getAll(): Promise<Post[]>
    {
        const files = fs.readdirSync(postsDirectory);
        const posts = files.map((file) =>
        {
            const [slug,] = file.split('.');
            const fileContents = fs.readFileSync(join(postsDirectory, file), 'utf8');
            const { data } = matter(fileContents);
            return Post.fromObject(Object.assign({}, data, { slug }));
        });
        return posts;
    }
}