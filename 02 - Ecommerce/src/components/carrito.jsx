export default function Carrito({ plato, setCarrito }) {

    function handleClick(operacion) {
        setCarrito((carrito) => {
            let platoEncontrado = carrito.find(e => e.id === plato.id);
            if (platoEncontrado) {
                if (operacion === 'mas') {
                    platoEncontrado.cantidad++;
                } else {
                    if (platoEncontrado.cantidad > 0) {
                        platoEncontrado.cantidad--;
                    }
                }
                return carrito.map(e => e.id === plato.id ? platoEncontrado : e);
            }
            return carrito
        });
    }

    function handleDelete() {
        setCarrito((carrito) => {
            return carrito.filter(e => e.id !== plato.id);
        });
    }

    return (
        <article className='carrito'>
            <img src={plato.imagen} alt="Plato de bacon" className="carrito__imagen" />
            <div className="carrito__div">
                <p className="carrito__titulo">{plato.titulo}</p>
                <p className="carrito__precio">${plato.precio}</p>
                <div className="carrito__div2">
                    <button onClick={handleClick} className="carrito__btn">{'<'}</button>
                    <p className="carrito__cantidad">{plato.cantidad}</p>
                    <button onClick={() => handleClick('mas')} className="carrito__btn">{'>'}</button>
                    <p className="carrito__total">${plato.precio * plato.cantidad}</p>
                </div>
                <button onClick={handleDelete} className='eliminar'>X</button>
            </div>
        </article>
    )
}