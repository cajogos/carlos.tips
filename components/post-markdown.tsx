import MarkdownStyles from '@/styles/Markdown.module.scss';

type ComponentProps = {
    html: string;
};

const PostMarkdown = ({ html }: ComponentProps) =>
{
    return (
        <div className={MarkdownStyles.markdown}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
};

export default PostMarkdown;