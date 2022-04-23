import { remark } from 'remark';
import html from 'remark-html';

export default class MarkdownParser
{
    static async toHTML(markdown: string)
    {
        const result = await remark().use(html).process(markdown);
        return result.toString();
    }
}
