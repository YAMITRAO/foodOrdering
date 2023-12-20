import Navbar from "./Header/NavBar/Navbar";
import Meallist from "./Middle/Meallist/Meallist";
import Summary from "./Middle/Summary/Summary";



const Project = () => {

    return(
       <>
        <Navbar />
        <Summary />
        <Meallist />
        </>
    );
}

export default Project;