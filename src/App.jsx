import Usercard from "./components/UserCard";
import Counter from "./components/Counter";
import { useState } from "react";


const App = ()=>{
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    
    return(
        <>
            <div>
                <Usercard name="Manikumar" age={23} city="Chennai" isAdmin={true} />
                <Counter count={count} increment={increment} decrement={decrement}/>                
            </div>
        </>
    )
}
export default App;