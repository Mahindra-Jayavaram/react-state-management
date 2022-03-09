import "../App.css";

export const GroceryList= ({data, status, id, deleteItem}) =>
{
    return <div className="groceryItems"> {data}

        <button onClick={()=> deleteItem(id)}>Delete</button>

    </div>
}
