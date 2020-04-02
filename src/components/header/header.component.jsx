import React from 'react';

// routing
import { Link } from 'react-router-dom';

// styles
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/milleneige-logo.svg';

// components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// auth
import { auth } from '../../firebase/firebase.utils';

// redux
import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
        :
        <Link className='option' to='/signin'>Sign In</Link>
      }
    <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown /> 
    }
  </div>
)

const mapStateToProps = ({ user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);