import HeaderNavLink from './HeaderNavLink';
import SearchField from './SearchField';

const menuItems = [
    { label: `Index`, url: `/` },
    { label: `Scrape`, url: `/scrape` },
    { label: `Analytics`, url: `/analytics` },
  ];

const Header = () => {
    return (
        <header className="flex flex-col gap-5">
            <div className="py-4 flex items-center">
            <nav className="ml-8">
                <ul className="flex flex-wrap gap-x-8 text-gray-900">
                {menuItems.map(({ url, label }, index) => (
                    <li key={index}>
                    <HeaderNavLink href={url}>{label}</HeaderNavLink>
                    </li>
                ))}
                </ul>
            </nav>
            </div>

            <SearchField />
        </header>
    );
};

export default Header;