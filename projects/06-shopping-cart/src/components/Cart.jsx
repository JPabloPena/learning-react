import './Cart.css'
import { useCart } from '../hooks/useCart'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Quantity: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>
        {
          cart.length > 0
            ? (
              <button onClick={clearCart}>
                <ClearCartIcon />
              </button>
              )
            : (
              <span>There are no items in your cart!</span>
              )
        }

      </aside>
    </>
  )
}
