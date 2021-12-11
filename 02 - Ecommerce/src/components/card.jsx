export default function Card({color = "blue", plato, carrito, setCarrito}){

let inCart = carrito.find(e => e.id === plato.id);

const handleCarrito = () => {
    setCarrito([
        ...carrito,
        plato
    ]);
}

    return(
        <article className= {`plato ${color}`}>
            <p className="plato__titulo">{plato.titulo}</p>
            <p className="plato__precio">${plato.precio}</p>
            <img src={plato.imagen} alt="Plato de bacon" className="plato__imagen" />
            {
                inCart ?
                <button className="plato__btn plato__inCart">✔️ In Cart</button> :
                <button onClick={handleCarrito} className="plato__btn">Add To Cart</button>
            }
        </article>
    )
}