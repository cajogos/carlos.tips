import MarkdownStyles from '@/styles/Markdown.module.scss';

type ComponentProps = {
    html: string;
    language: StringOrNull;
};

const GistMarkdown = ({ html, language }: ComponentProps) =>
{
    return (
        <div className={[MarkdownStyles.markdown, language].join(' ')}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
};

export default GistMarkdown;