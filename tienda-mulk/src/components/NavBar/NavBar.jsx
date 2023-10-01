import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';
import '../../style/themes/main-fonts.scss';

const NavBar = () => {
  return (
    <header>
        <h1 className='font_proxima_500'>Tienda Mulk</h1>
        <nav>
            <ul>
                <li className='font_proxima_500'>Celulares</li>
                <li className='font_proxima_500'>Computadora</li>
                <li className='font_proxima_500'>Tablet</li>
                <li className='font_proxima_500'>Impresoras</li>
                <input type="text" placeholder='Buscar' className='input-busqueda'></input>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar