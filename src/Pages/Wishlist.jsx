import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';

const productlist = [
  { id: "1", title: "Portrait1", desc: "Nature View", price: 2000, imgUrl: "images/1654-0112.jpg" },

  { id: "2", title: "Portrait2", desc: "sun", price: 2500, imgUrl: "images/1654-0112.jpg" },

  { id: "3", title: "Portrait3", desc: "sun rise", price: 2000, imgUrl: "images/1654-0112.jpg" },

  { id: "4", title: "Portrait4", desc: "Nature View4", price: 3000, imgUrl: "images/1654-0112.jpg" },

  { id: "5", title: "Portrait5", desc: "Nature View5", price: 9000, imgUrl: "images/1654-0112.jpg" },

  { id: "6", title: "Portrait6", desc: "Nature View6", price: 5000, imgUrl: "images/1654-0112.jpg" },

  { id: "7", title: "Portrait7", desc: "Nature View7", price: 4000, imgUrl: "images/1654-0112.jpg" },

  { id: "8", title: "Portrait8", desc: "Nature View8", price: 3000, imgUrl: "images/1654-0112.jpg" },
];


function Wishlist() {

  const { addToWishlist, getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useShoppingCart();

  if (!addToWishlist || addToWishlist.length === 0) {
    return <Container className='pt-5'><p>Your wishlist is empty.</p></Container>;
  }
  return (
    <Container className='pt-5 d-flex justify-content-center align-items-center'>
      <Row xs={1} md={3} lg={4} className="g-4">

        {addToWishlist.map(({ id }) => {
          const item = productlist.find(product => product.id === id);
          if (!item) return null;
          const { title, price, imgUrl, desc } = item;
          const quantity = getItemsQuantity(id);

          return (
            <Col key={id} className="d-flex justify-content-center">
              <Card style={{ width: '18rem', position: 'relative' }} key={id}>
                <Card.Img variant="top" src={imgUrl} />
                <div
                  style={{
                    position: 'absolute',
                    top: '89%',
                    right: '20%',
                    zIndex: 1,
                    fontSize: '1.5rem'
                  }}>
                  <i
                    className="bi bi-heart-fill"
                    style={{
                      color: 'red',
                      cursor: 'pointer'
                    }}
                  >
                  </i>
                </div>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{desc}  -  {price}EGP</Card.Text>
                  <div className='mt-auto'>
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
            </Col>


          )
        })}
      </Row>
    </Container>
  );
}

export default Wishlist;
