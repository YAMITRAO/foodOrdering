import Cart from '../Cart/Cart';
import './Navbar.css'

const Navbar = () => {

    return(
        <>
        <div class="navBarContainer">
            <h1 className='headerHeading'>ReactMeals</h1>
            <Cart />
        </div>
        </>
    );
}

export default Navbar;