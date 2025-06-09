import { useState, useContext } from "react";
import BookContext from "../context/books";
import BookEdit from "./BookEdit";
function BookShow({book}) {

    const { deleteBookById } = useContext(BookContext);

    
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        deleteBookById(book.id);
    }

    const handleEdit = () => {
        setShowEdit(!showEdit);

    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h2>{book.title}</h2>
    if(showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}  />
    }
    return(
        <div className="book-show">
            <img src="https://picsum.photos/300/200" alt="books"></img>
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEdit}>Edit</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
            </div>
    )
}

export default BookShow;