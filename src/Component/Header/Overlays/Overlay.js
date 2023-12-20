import classes from "./Overlay.module.css";
import ReactDOM from 'react-dom';

const Module = (props) =>{

    return <div className={classes.overlayContainer}>
        <div className={classes.subContainer}>{props.children}</div>
    </div>
}

let pathOfModule = document.getElementById('overlay');



const Overlay = (props) => {

    return ReactDOM.createPortal(<Module>{props.children}</Module>, pathOfModule);
}

export default Overlay;