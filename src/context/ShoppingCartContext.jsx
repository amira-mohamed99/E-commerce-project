import React, { createContext, useContext, useState } from "react";
// import CartPage from "../Pages/Cart";


const ShoppingCartContext = createContext({}); //out of any component//
 
const ShoppingCartProvider = ({children}) =>{

const [cartItems , setCartItems] = useState([]);

const cartQuantity = cartItems.reduce((quantity , item) => item.quantity+quantity, 0 );

const getItemsQuantity = (id) =>{
        return cartItems.find((items)=> items.id === id)?.quantity || 0
    };

const increaseCartQuantity = (id) => {
        setCartItems ((currItems) =>{
            if (currItems.find(item => item.id === id) == null) {
                return[...currItems, {id ,quantity: 1}];
            }else{
                return currItems.map((item) => {
                    if (item.id === id) {
                        return{...item , quantity:  item.quantity +1 };
                    }else{
                        return item;
                    };
                });
            }
        });
}; 

const decreaseCartQuantity = (id) => {
    setCartItems ((currItems) =>{
        if (currItems.find(item => item.id === id) == null) {
            return currItems.filter((item) => item.id !== id);
        }else{
            return currItems.map((item) => {
                if (item.id === id) {
                    return{...item , quantity:  item.quantity - 1 };
                }else{
                    return item;
                };
            });

        }
    });

};

const removeItemFromCart =(id) => {
    setCartItems((currItems) => currItems.filter((item)=>  item.id !== id));
};

     return( 
    <ShoppingCartContext.Provider value={{
        cartItems ,
         getItemsQuantity ,
         increaseCartQuantity ,
         decreaseCartQuantity ,
          removeItemFromCart,
          cartQuantity,
          }}>
        {children}
        {/* <CartPage /> */}
    </ShoppingCartContext.Provider>
    );

};
export default ShoppingCartProvider;

export const useShoppingCart = ()=>{
    return useContext(ShoppingCartContext);
}

