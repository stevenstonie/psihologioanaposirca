import { Link } from "react-router-dom";
import logo from '@/assets/images/logo.png';
import './nav_brand.scss';

interface NavBrandProps {
  onClick: () => void;
}

export default function NavBrand({ onClick }: Readonly<NavBrandProps>) {
  return (
    <Link
      className="nav-brand"
      to="/"
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      draggable={false}
    >
      <div className="nav-logo" aria-hidden="true">
        <img src={logo} alt="" />
      </div>
      <span className='nav-brand-text'>Psiholog Ioana Poșircă</span>
    </Link>
  );
}
