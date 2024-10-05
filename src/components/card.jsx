import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useShoppingCart } from '../context/ShoppingCartContext';

const  NewCard = ({ id, title, price, desc, imgUrl }) => {
  


  const {getItemsQuantity ,increaseCartQuantity ,decreaseCartQuantity, removeItemFromCart} = useShoppingCart(); 
  const quantity = getItemsQuantity(id);
    return (
    <>    
         {/* {  productlist.map ((item) =>  */}
 
      <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
         <Card.Title>{title}</Card.Title>
         <Card.Text>{desc}  -  {price}EGP</Card.Text>
         <div className='mt-auto'>
         {quantity === 0? (
         <Button variant='primary' className='w-100'onClick={() =>  increaseCartQuantity(id)}>Add to Cart</Button>
          ) :(

           <div className='d-flex align-items-center flex-column ' style={{gap:"0.5rem"}}>
            <div className='d-flex align-items-center justify-content-center'>
              <Button size='sm' onClick={() =>  decreaseCartQuantity(id)}>-</Button>
              <span className='fs-3'> {quantity} </span>
              <Button size='sm' onClick={() =>  increaseCartQuantity(id)}>+</Button>
            </div>
            <Button variant='danger' size='sm'onClick={() => removeItemFromCart(id) }>Remove</Button>
            </div> 
           
            )}

         </div>
        
       </Card.Body>
     </Card>
    {/* )} */}
    </>
    );
}
export default NewCard;