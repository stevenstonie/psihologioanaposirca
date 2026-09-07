import './loader_breathing.scss';

interface LoaderBreathing {
    text?: string;
}

export const LoaderBreathing = ({ text = 'Se încarcă..' }: LoaderBreathing) => {
    return (
        <div className='loader-breathing-container'>
            <div className="loader-breathing">
                <div className="double-bounce1" />
                <div className="double-bounce2" />
            </div>
            {text && <p>{text}</p>}
        </div>
    );
};