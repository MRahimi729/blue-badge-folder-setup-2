import { React, useState } from "react";

const Userinput = () => {
    const [userInput, setUserInput] = useState("")
    const [name, setName] = useState("Stephanie");

    const handleInput = (event) => {
        setUserInput(event.target.value);
        console.log(userInput);

    }

    const updateName = (e) => {
        e.preventDefault(); //stops the pages from refreshing
        setName(userInput);//binds the name that will display to the user's input in the input textbox.
        setUserInput("");//sets the input field back to an empty input field.

    }
    return(
        <div>
            <h1>Hello, {name}!</h1>
            <form>
                <label for="name">Update Name:</label>
                <input type="text" value= {userInput} name="name" onChange={handleInput}/>
                <button onClick={updateName}>Save</button>
            </form>

        </div>
    )
};

export default Userinput;