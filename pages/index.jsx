import Main from '../src/components/main/Main';
import Highlights from '../src/components/highlights/Highlights';

export default function Home({ shoppingCart, setShoppingCart }){
    return(
        <>
            <Main />
            <Highlights 
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart} 
            />
        </>
    )
}