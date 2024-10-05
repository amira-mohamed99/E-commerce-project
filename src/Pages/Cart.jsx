import React from 'react';
import { Button, Card, Container, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext'; 


const productlist = [
  {id:"1" , title: "Portrait1", desc: "Nature View", price: 2000,imgUrl:"images/1654-0112.jpg" },

  {id:"2", title: "Portrait2", desc: "sun", price: 2500 ,imgUrl:"images/1654-0112.jpg"},

  {id:"3",  title: "Portrait3", desc: "sun rise", price: 2000 ,imgUrl:"images/1654-0112.jpg"},

  {id:"4",  title: "Portrait4", desc: "Nature View4", price: 3000,imgUrl:"images/1654-0112.jpg" },

  {id:"5",  title: "Portrait5", desc: "Nature View5", price: 9000,imgUrl:"images/1654-0112.jpg" },

  {id:"6",  title: "Portrait6", desc: "Nature View6", price: 5000 ,imgUrl:"images/1654-0112.jpg" },

  {id:"7",  title: "Portrait7", desc: "Nature View7", price: 4000 ,imgUrl:"images/1654-0112.jpg"},

  {id:"8",  title: "Portrait8", desc: "Nature View8", price: 3000 ,imgUrl:"images/1654-0112.jpg"},
];



const CartPage= ()=>  {

  const {removeItemFromCart}=useShoppingCart()
  const { cartItems } = useShoppingCart();
  
  return (
    <Container className='pt-5'>
      <Stack gap={3}>
        
          {cartItems.map(({id , quantity})=> {
            const item = productlist.find(product => product.id === id);
            if (!item) return null;
            const { title, price ,imgUrl } = item

            return(
            <Card key={id}> 
              <Stack direction='horizontal' className='justify-content-between'>
                <img src={imgUrl}
                alt='card-img'
                style={{width:"125px" , height: "75px" , }}/>
                <p>
                  {title} {""}
                  {quantity> 1 && (<span >
                    X {quantity}
                  </span>)}
                </p>
                <p className='text-muted'>
                  {price}  EGP
                </p>
                <p className='text-muted'>
                  {quantity*price} EGP
                </p>
                <Button variant='outline-none-danger' style={{height:"100%"}} size='l' onClick={() => removeItemFromCart(id)}>
                  &times;
                
                </Button>
              </Stack>
            </Card>
          )})}
      </Stack>
    </Container>
  );
}

export default CartPage;
