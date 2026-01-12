import Usercard from "./components/UserCard";
import Counter from "./components/Counter";
import Button  from "./components/Button";
import { useState } from "react";


const App = ()=>{
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
     const handleClick = () => {
        alert("Button clicked!");
    };

    
    return(
        <>
            <div>
                <Usercard name="Manikumar" age={23} city="Chennai" isAdmin={true} />
                <Counter count={count} increment={increment} decrement={decrement}/>        
                <Button label="Default Variant Button" onClick={handleClick} />
                <Button label="Secondary Button" variant="primary" onClick={handleClick} />
        
            </div>
        </>
    )
}
export default App;