import ListContainer from "./ListContainer/ListContainer";
import "./Meallist.css"

const Meallist = () => {

    const data = [
        {mealName:"Sushi", mealDesc:"Finest Fish and Veggies", mealPrice:22.99},
        {mealName:"Schnitzel", mealDesc:"A german specialty!", mealPrice:16.59},
        {mealName:"Barbecue Burger", mealDesc:"American, raw,meaty", mealPrice:12.99},
        {mealName:"Green Bowl", mealDesc:"Healthy...and green...", mealPrice:15.99}
    
        
    ]

    return( 
        <>
        <div className="meallistContainer">
           <div className="mealList">
            {data.map( (val) =>{
                return( <ListContainer value={val} />);
            })}
           
           </div>
        </div>
        </>
    )
}

export default Meallist;