import "./ListContainer.css"

const ListContainer = (props) => {

    return(
        <div className="ListContainer">
            <div className="melaName">{props.value.mealName}</div>
            <div className="mealDisc">{props.value.mealDesc}</div>
            <div className="melaPrice">${props.value.mealPrice}</div>
            <div className="lineContainer"></div>

        </div>
    )
}

export default ListContainer;