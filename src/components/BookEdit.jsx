import { useState, useContext } from "react";
import BookContext from "../context/books";
function BookEdit( {book, onEdit, onSubmit}) {

    const {editBookById}  = useContext(BookContext);

    const [title, setTitle] = useState(book.title);
    const handleChange = (event) => {
        setTitle(event.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editBookById(book.id, title);
        onSubmit();

    }

    return(
        <div className="book-edit">
            <form onSubmit={handleSubmit}>
                <label>Edit Book</label>
                <input type="text" name="title" className="input"  value={title} onChange={handleChange}></input>
                <button className="update">Update</button>
                
            </form>
        </div>
    )
}

export default BookEdit;