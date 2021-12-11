import Card from './components/card';
import { platos } from './platos';
import Carrito from './components/carrito';
import { useState } from 'react';

const colors = () => {
  let randomIndex = Math.floor(Math.random() * 3);
  let colors = ['pincky', 'blue', 'grey', 'green'];
  return colors[randomIndex];
}

function App() {

  const [carrito, setCarrito] = useState([]);

  let subtotal = carrito.reduce((acc, cur) => acc + (cur.precio * cur.cantidad), 0);
  let tax = 1.96;

  return (
    <main className="App">
      <section className="section">
        <h2>To Go Menu</h2>
        {
          platos.map(plato => {
            return (
              <Card
                plato={plato}
                color={colors()}
                carrito={carrito}
                setCarrito={setCarrito}
                key={plato.id}
              />
            )
          })
        }
      </section>
      <section className="section section__carrito">
        <h2>Your Cart</h2>
        {
          carrito.map(plato => {
            return (
              <Carrito
                plato={plato}
                key={plato.id}
                setCarrito={setCarrito}
              />
            )
          })
        }
        {carrito.length > 0 ?
          <>
            <p className='price'>Subtotal: <span>{subtotal}</span></p>
            <p className='price'>Tax: <span>{tax}</span></p>
            <p className='price'>Total: <span>{subtotal + tax}</span></p>
          </> :
          <p>Your cart is empty</p>
        }
      </section>
    </main>
  )
}

/* function handleClick(operacion) {
        setCarrito((carrito) => {
            let nuevoCarrito = [...carrito];
            return nuevoCarrito.map(p => {
                if (p.id === plato.id) {
                    if (operacion === 'mas') {
                        p.cantidad++;
                    } else {
                        if (p.cantidad > 0) {
                            p.cantidad--;
                        }
                    }
                }
                return p;
            })
        });
    } */

export default App
