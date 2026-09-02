import './glow_orbiting_sphere.scss';

interface GlowOrbitingSphereProps {
    children?: React.ReactNode;
}

export default function GlowOrbitingSphere({ children }: Readonly<GlowOrbitingSphereProps>) {
    return (
        <div className="glowing-orbit-sphere" aria-hidden="true">
            <div className="glowing-orbit-sphere-content">
                {children}
            </div>
        </div>
    );
}