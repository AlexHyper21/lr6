import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { selectCartCount } from '../../store/cartSlice';
import cartIcon from '../../assets/cart.svg';

export default function CartIcon() {
  const count = useSelector(selectCartCount);

  return (
    <Nav.Link className="d-flex flex-column align-items-center small text-body position-relative">
      <img src={cartIcon} alt="" width="24" height="24" />
      <span className="d-none d-sm-inline">Корзина</span>
      {count > 0 && (
        <Badge pill bg="" className="text-bg-accent position-absolute top-0 start-100 translate-middle">
          {count}
        </Badge>
      )}
    </Nav.Link>
  );
}
