import { useState, useContext } from "react";
import BookContext from "../context/books";
function BookCreate() {
    const { createBook } = useContext(BookContext);



    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');

    }
    return(
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <h1>Add a book</h1>
                <input type="text" className="input" onChange={handleChange} value={title} ></input>
                <button className="button">Save</button>
            </form>
        </div>
    )
}

export default BookCreate;