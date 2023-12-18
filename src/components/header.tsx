import { Link } from 'react-router-dom';
import '../css.components/header.css'

function Header() {
    return (
        <header>
            <h1 className="title-header">My Heartbroken</h1>
            <Link className='divButton' to="/">
                <button className='outButton'>Sair</button>
            </Link>
        </header>
    )
}

export default Header;