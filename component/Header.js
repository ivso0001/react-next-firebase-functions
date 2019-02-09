import Link from 'next/link';

const Header = () => (
    <div>
        <Link href='/'>
            <a style={{marginRight: '10px'}}>Home</a>
        </Link>
        <Link href='/about'>
            <a>About</a>
        </Link>
    </div>
)

export default Header;