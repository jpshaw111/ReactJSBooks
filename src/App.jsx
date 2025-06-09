import { useEffect, useContext } from "react"
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/books";

function App() {
  const { books, fetchBooks }= useContext(BookContext);

  useEffect(() => {
   fetchBooks();
  }, [books])

  

  return (
   <div className="app">
      <h1>Reading Books</h1>
      <BookList />

       <BookCreate />


   </div>
  )
}

export default App
