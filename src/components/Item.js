import React from 'react'

const Item= ({id, nasme, img, price, stock}) => {

  return(
    <article className="CardItem">
      <header className="CardItem">
        <h2 className="ItemHeader">{name}</h2>

      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg"/>
      </picture>  
      <section>
        <p className="Info">
          Precio: ${price}
        </p>
        <p className="Info">
          Stock disponible: {stock}
        </p>
      </section>

      <footer className="ItemFooter">
        <button className='Option'>Ver detalles</button>

      </footer>

    </article>
  )
}