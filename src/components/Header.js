import { Link } from 'react-router-dom'

import Nav from './Nav'


function Header() {
    return (
        <header>
            <Link className="header-logo" to="/"><img src={require('../assets/logo.png')} alt="little lemon" /></Link>
            <Nav className="header-nav" />
        </header>
    )
}

export default Header