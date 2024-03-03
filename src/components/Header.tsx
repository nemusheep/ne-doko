import sheepicon from '@/images/sheepicon.png';
import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css';

function Header() {
    return (
        <header className='App-header'>
            <Link href='/' className='home'>
                    <Image src={sheepicon} className='home-logo' alt='logo' />
                    <div className='home-name'>ne-doko-eep</div>
            </Link>
            <nav className='menu'>
                <div className='menu-item'>
                    <Link href='/about'>About</Link>
                </div>
                <div className='menu-item'>
                    <Link href='/blog'>Blog</Link>
                </div>
                <div className='menu-item'>
                    <Link href='/illust'>Illust</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;