import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = (props) => {
    
    const [items, setItems] = useState([]);
    
    function getTotal(){
        return items.reduce((tot, item) => {
            return tot += (item.value*item.quant);
        }, 0);
    }

    function getQuantItems(){
        return items.reduce((quant, item) => {
            return quant += (item.quant);
        }, 0);
    }

    function changeQuant(item, quant){
        let aux = items;
        aux.find(elem => elem.name == item).quant = quant;
        setItems(aux);
    }
    
    return(
        <CartContext.Provider value={{ 
            items, 
            setItems, 
            getTotal,
            getQuantItems, 
            changeQuant 
        }}>
            {props.children}
        </CartContext.Provider>
    )
}