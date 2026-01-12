const Usercard = ({name, age, city, isAdmin}) =>{
    return(
        <>
            <div>
                <p>Hi {name}, {age} years old, from {city}</p>
                {isAdmin && <span>Admin</span>}
            </div>
        </>
    )
}
export default Usercard;