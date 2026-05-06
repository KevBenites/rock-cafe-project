import { Link } from 'react-router';

export const Logo = ({ subtitle, size = 'lg' }) => {
  return (
    <Link to="/" className="flex items-center justify-center whitespace-nowrap">
      <span
        className={`font-montserrat font-bold text-${size} m-0 whitespace-nowrap`}
      >
        Rock |
      </span>
      <p
        className={`font-montserrat text-muted-foreground text-${size} m-0 px-2 whitespace-nowrap`}
      >
        {subtitle}
      </p>
    </Link>
  );
};
