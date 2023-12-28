import "./Cart.css"

const Cart = ( props) => {

    return (
        <button className="cartContainer" onClick={props.onShowNavBar}>
            <div className="cartSymbol">$
             </div>
            <div className="cartHeading">Your Cart</div>
            <div className="cartCount">0</div>
        </button>
    )
}


export default Cart