import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/cart.module.css";

export default function Cart({ carrito, actualizarCantidad, eliminarProducto  }) {
    const [total, setTotal] = useState(0)

     useEffect(() => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.price ), 0)
        setTotal(calculoTotal)
     }, [carrito])
  return (
    <Layout title="cart">
      <main className="contenedor">
        <h1 className="heading">Cart</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Items: </h2>
            {carrito.length === 0
              ? "Your cart is empty..."
              : carrito.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={producto.image}
                        alt={producto.name}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.name}</p>

                      <div>
                        <p>Qty: </p>
                        <select
                          onChange={ e => actualizarCantidad({ 
                            id: producto.id,
                            cantidad: e.target.value 
                          })}
                          className={styles.select}
                          value={producto.cantidad}
                        >
                          
                          <option value="1">1 </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      <p className={styles.precio}>
                        $<span>{producto.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $
                        <span>{producto.price * producto.cantidad}</span>
                      </p>
                    </div>

                    <button
                        className={styles.eliminar}
                        type='button'
                        onClick={() => eliminarProducto(producto.id)}
                    >
                        X
                        
                    </button>
                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Your order summary:</h3>
            <p>Your total: $ {total} </p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
