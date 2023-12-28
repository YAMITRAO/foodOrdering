import Cart from '../Cart/Cart';
import './Navbar.css'

const Navbar = (props) => {

    return(
        <>
        <div class="navBarContainer">
            <h1 className='headerHeading'>ReactMeals</h1>
            <Cart onShowNavBar={props.onShowProject} />
        </div>
        </>
    );
}

export default Navbar;