import "./ListButton.css"

const ListButton = () => {
    
        return(
        <div className="listButtonContainer">
       <form>
        <div className="amountInput">
        <label>Amount </label>
        <input type="text" value="1"/>
        </div>
        <div className="buttonContainer">
        <button > + Add</button>
        </div>
       </form>
       </div>
        )
    
}


export default ListButton;