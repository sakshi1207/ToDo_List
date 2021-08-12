import React,{useState} from 'react'

function MyToDoList() {
    const [itemName,setItemName] = useState("");
    const [lists,setLists] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();//use to prevent default behaviour of our browser
        if (itemName) {
            // console.log('submit');
            const items =  {id:new Date().getTime().toString(),itemName};
            console.log(items);
           
            setLists((items) =>{
                return[...lists,items]
            });
            setLists('');
        }else{
            console.log('empty');
        }
         console.log(itemName);
    }
    return (
        <>
        <article>
            <form className='form' onSubmit={handleSubmit}>

            <div className='form-control'>
                <label htmlFor="itemName"> Name :</label>
                <input type="text" id="itemName" name="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)}></input>
            </div>

          

            <button type="submit">Add</button>
            </form>
            {
                lists.map((items,index) =>{
                    const {id,itemName} = items;
                    return(
                        <div className="item" key={id}>
                            <h4>{itemName}</h4>
                           
                        </div>
                    )
                })
            }
        </article>

        </>
    )
}

export default MyToDoList
