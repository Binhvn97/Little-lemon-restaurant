import { Link } from 'react-router-dom'

import Nav from './Nav'


function Header() {
    return (
        <header>
            <Link to="/"><img src={require('../assets/logo.png')} alt="little lemon" /></Link>
            <Nav />
        </header>
    )
}

export default Header