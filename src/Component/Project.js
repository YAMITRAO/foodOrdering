import Navbar from "./Header/NavBar/Navbar";
import Meallist from "./Middle/Meallist/Meallist";
import Summary from "./Middle/Summary/Summary";



const Project = (props) => {

    return(
       <>
        <Navbar onShowProject = {props.onShow}/>
        <Summary />
        <Meallist />
        </>
    );
}

export default Project;