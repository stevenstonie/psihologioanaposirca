import './accordion.scss';

interface AccordionListProps {
    children: React.ReactNode;
}

export const AccordionList: React.FC<AccordionListProps> = ({ children }) => {
    return <ul className="accordion-list">{children}</ul>;
};

interface AccordionProps {
    title: string;
    description: string;
    open?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
    title,
    description,
    open = false,
}) => {
    return (
        <li className="accordion-item">
            <details open={open}>
                <summary className="accordion-title">
                    {title}
                    <span className="accordion-icon" aria-hidden="true">
                        <svg viewBox="0 0 16 16" width="14" height="14">
                            <path
                                d="M3 6l5 5 5-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </summary>
                <div className="accordion-description">
                    <p>{description}</p>
                </div>
            </details>
        </li>
    );
};