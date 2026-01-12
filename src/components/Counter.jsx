const Counter = ({ count, increment, decrement }) => {
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={decrement}>-</button>
            <span> {count} </span>
            <button onClick={increment}>+</button>
        </div>
    );
};
export default Counter;
