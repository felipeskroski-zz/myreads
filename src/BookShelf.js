import React from 'react'
import Book from './Book'

const BookShelf = ({books, title, onUpdate}) => (
  <div className="bookshelf">
    {console.log(onUpdate)}
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book,index) =>(
          <li key={book.id}>
            <Book book={book} onUpdate={onUpdate}/>
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export default BookShelf
