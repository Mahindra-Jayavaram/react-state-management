import { GroceryInput } from "./GroceryInput";

import { useState } from "react";

import { GroceryList } from "./GroceryList";

import { v4 as uuid } from "uuid"


export const Grocery = () =>{
    const [groceries, setGroceries] = useState([]);

    const addGrocery = (data) =>{
        const product = {
            data,
            status : false,
            id: uuid()
        }

        setGroceries([...groceries, product])
    }

    const deleteItem = (itemId) =>{
        const newItem = groceries.filter((e) => e.id !== itemId);
        setGroceries(newItem);
    }

    return <div>
        <GroceryInput addGrocery={addGrocery}/>

        { groceries.map((e) =>(
            
            <GroceryList deleteItem = {deleteItem} {...e}/>
       
        ))}
    </div>

}