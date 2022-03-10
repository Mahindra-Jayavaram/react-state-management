import { useState } from "react";

// export const GroceryInput = () =>{
export const GroceryInput = ({addGrocery}) =>{
    const [text, setText] = useState("")
return <> <div>
    <input type= "text" onChange = {(e)=>{
        // console.log("value:", e.target.value)
        setText(e.target.value)
    }} />
    <button onClick ={ () =>{
        addGrocery(text)
    }}>
        Add Grocery
        </button>


</div>
{text}

</>

}