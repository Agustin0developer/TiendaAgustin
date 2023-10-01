import React from 'react'
import './ItemListContainer.scss';
import '../../style/themes/main-fonts.scss';


const ItemListContainer = ({greeting}) => {
  return (
    <div>
         <h2 className='ClassMedium'> {greeting} </h2>
         <footer className="footer">
        <img src="" alt="Tienda Mulk" />
        <div>
          En Tienda Mulk transformamos lo que nesesitan nuestros clientes enviando productos electronicos de calidad
        </div>
        <div>
          COPYRIGHT @ 2023 Agustin Sandiyu
        </div>
        <div>
        </div>
      </footer>
    </div>
  )
}

export default ItemListContainer