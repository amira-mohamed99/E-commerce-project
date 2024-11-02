import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Container from 'react-bootstrap/esm/Container';
import 'bootstrap-icons/font/bootstrap-icons.css';



const NewCard = ({ id, title, price, desc, imgUrl }) => {
  const { addWishlistItem } = useShoppingCart();



  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useShoppingCart();
  const quantity = getItemsQuantity(id);
  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card style={{ width: '18rem', position: 'relative' }}>
        <Card.Img variant="top" src={imgUrl} />
        {/* <div
          style={{
            position: 'absolute',
            bottom: '0.1rem',
            right: '2rem',
            zIndex: 1,
            fontSize: '1.5rem',
            transform: 'translate(-50%, -50%)'
          }}>
          <i
            className="bi bi-heart-fill"
            style={{
              color: 'red',
              cursor: 'pointer'
            }}
            onClick={() => addWishlistItem(id)}
          >
          </i>
        </div> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}  -  {price}EGP</Card.Text>
          <div className='mt-auto'>
          <div className='heart-icon'
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '3rem',
            zIndex: 1,
            fontSize: '1.5rem',
            transform: 'translate(0%, 0%)'
          }}>
          <i
            className="bi bi-heart-fill"
            style={{
              color: 'red',
              cursor: 'pointer'
            }}
            onClick={() => addWishlistItem(id)}
          >
          </i>
        </div>
            {quantity === 0 ? (
              <Button variant='primary' className='lg' onClick={() => increaseCartQuantity(id)}>Add to Cart</Button>

            ) : (
              <div className='d-flex align-items-center flex-column ' style={{ gap: "0.5rem" }}>
                <div className='d-flex align-items-center justify-content-center'>
                  <Button size='sm' onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <span className='fs-3'> {quantity} </span>
                  <Button size='sm' onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button variant='danger' size='sm' onClick={() => removeItemFromCart(id)}>Remove</Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>

  );
}
export default NewCard;