import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const MainHeader = (props) => {
  const showCart = useSelector(state => state.cart.showCart);
  const dispatch = useDispatch();

  const cartHandler = () =>{
    dispatch(cartActions.toggle);
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={cartHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
