import './page_header.scss';

interface PageHeaderProps {
    title: string;
    description: string;
    imagePath?: string;
}

export default function PageHeader({ title, description, imagePath }: Readonly<PageHeaderProps>) {
    return (
        <header
            className="page-hero"
            style={imagePath ? { backgroundImage: `url(${imagePath})` } : undefined}
        >
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    );
}