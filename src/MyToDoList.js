import React, { useState } from 'react'

function MyToDoList() {
    const [events, setEvents] = useState("");
    const [list, setList] = useState([]);
    const deleteEvent = (id) => {
        let data = list.filter((x) => x.id != id)
        setList(data);
    }

    const handleEvent = (e) => {
        e.preventDefault();
        if (events) {
            console.log(events);

            const items = { id:new Date().getTime().toString(),events };

            setList((list) => {
                return [...list, items]
            });
            // setList(''); //getting an error after writing this
        } else {
            console.log("entervalue");
        }
    }
    return (
        <>
            <article>
                <form className="form" onSubmit={handleEvent}>
                    <div className="form-control">
                        <label>Add Item :</label>
                        <input type="text" value={events} onChange={(e) => setEvents(e.target.value)}></input>
                    </div>
                    <button type="submit">Add Item</button>
                </form>
                {list.map((items) => {
                    return (
                        <div key={items.id} className="item">{items.events}
                            <button onClick={() => { deleteEvent(items.id) }}>delete</button>
                        </div>
                    )
                })}
            </article>
        </>
    )
}

export default MyToDoList
