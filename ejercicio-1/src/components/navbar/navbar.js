import { Link, Outlet } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='header'>
                <Link to=''>Inicio</Link>
                <Link to='products'>Productos</Link>
            </div>
            <div className='content'>
                <Outlet/>
            </div>
        </>
    )
}

export default Navbar;