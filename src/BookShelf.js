import React, {Component} from 'react'
import Book from './Book'

const BookShelf = ({books, title}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book,index) =>(
          <li key={book.id}>
            <Book
              coverImage={book.imageLinks.smallThumbnail}
              coverSize={{width: 128, height: 196}}
              authors={book.authors}
              title={book.title}
              shelf={book.shelf}
              status='read'
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export default BookShelf
