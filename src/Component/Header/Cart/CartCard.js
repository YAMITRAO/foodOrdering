import Overlay from "../Overlays/Overlay"
import classes from "./CartCard.module.css"



const CartCard = (props) => {

    return <Overlay>
        <div className={classes.container}>
        <div className={classes.heading}>Masala Chay</div>
        <div className={classes.amountContainer}>
            <span>Total Amount</span>
            <span>40.82</span>
        </div>

        <div className={classes.buttonContainer}>
            <button className={classes.closeButton} onClick={props.onClose}>Close</button>
            <button className={classes.orderButton}>Order</button>
        </div>
        </div>
    </Overlay>
}

export default CartCard