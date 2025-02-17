import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import titleLine from '../asset/Images/title_line.png'
import { TbSquareRoundedArrowUp, TbSquareRoundedArrowDown,TbSquareRoundedArrowRight } from "react-icons/tb";
import Nav from './Nav';
import SecondaryNav from './SecondaryNav';

const Cart = () => {
  // Retrieve the added items from localStorage
  const [addedItems, setAddedItems] = useState(() => {
    const savedItems = localStorage.getItem('addedItems');
    return savedItems ? JSON.parse(savedItems) : {};
  });

  // Get vegetable data (this can be fetched from a source, but for now, use static data)
  const vegetables = [
    { id: 1, image: require('../asset/Images/featured_veg-1.png'), title: 'Tomato', price: 30.00 },
    { id: 2, image: require('../asset/Images/featured_veg-2.png'), title: 'Onion', price: 50.00 },
    { id: 3, image: require('../asset/Images/featured_veg-3.png'), title: 'Brinjal', price: 100.00 },
    { id: 4, image: require('../asset/Images/featured_veg-4.png'), title: 'Cabbage', price: 80.00 },
    { id: 5, image: require('../asset/Images/featured_veg-5.png'), title: 'Broccoli', price: 150.00 },
    { id: 6, image: require('../asset/Images/featured_veg-6.png'), title: 'Cauliflower', price: 100.00 },
    { id: 7, image: require('../asset/Images/featured_veg-7.png'), title: 'Cucumber', price: 100.00 },
  ];

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    const updatedItems = { ...addedItems };
    delete updatedItems[itemId];
    setAddedItems(updatedItems);
    localStorage.setItem('addedItems', JSON.stringify(updatedItems)); // Update localStorage
  };

  // Calculate total price
  const calculateTotal = () => {
    return vegetables.reduce((total, item) => {
      if (addedItems[item.id]) {
        return total + item.price;
      }
      return total;
    }, 0);
  };

  return (
    <>
    <Nav />
    <SecondaryNav />
      <div className="cart">
      <h2 className='secondary-heading'>Your Cart</h2>
      <img src={titleLine} alt="Title Line" />
      <div className="cart-items">
        {Object.keys(addedItems).length === 0 ? (
          <p>Your cart is empty....😒</p>
        ) : (
          vegetables.map((item) => {
            return addedItems[item.id] ? (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-middle">
                  <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <p>Price: &#8377;{item.price}</p>
                  </div>
                  <div className="cart-qty">
                    <TbSquareRoundedArrowUp className='cart-arrow' /> <span>{1}</span> <TbSquareRoundedArrowDown className='cart-arrow' />
                  </div>
                </div>
                <button onClick={() => removeItemFromCart(item.id)} className="remove-item">
                  <FaTrashAlt /> Remove
                </button>
              </div>
            ) : null;
          })
        )}
      </div>

      {Object.keys(addedItems).length > 0 && (
        <div className="cart-total">
          <p>Total: &#8377;{calculateTotal()}</p>
          <Link to="/checkout" className="checkout-button">
            Checkout &nbsp;<TbSquareRoundedArrowRight />
          </Link>
        </div>
      )}
    </div>
    </>
  );
};

export default Cart;

