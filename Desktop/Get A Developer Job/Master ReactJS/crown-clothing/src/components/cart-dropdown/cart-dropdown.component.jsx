import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import "./cart-dropdown.styles.scss"
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const goToCheckout = () => {  
    toggleCartHidden()
    history.push("/checkout")
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ?
          cartItems.map((cartItem) => <CartItem item={cartItem} />) :
          <span className="empty-message">Your cart is empty </span>
        }
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout")
          dispatch(toggleCartHidden())
        }}
      >GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden : () => dispatch(toggleCartHidden())
})


const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));