import CartCard from "./Component/Header/Cart/CartCard";
import Project from "./Component/Project";
import { useState } from "react";

function App() {
  const [isCartShow, setIsCartShow]  = useState(true);

  const showCart = () => setIsCartShow(true);
  const hideCart = () => setIsCartShow(false);

  return (
    <div>
     { isCartShow && <CartCard onClose={hideCart}/>}
      <Project onShow={showCart}/>
    </div>
  );
}

export default App;
