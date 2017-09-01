import React from 'react'

const Book = ({book}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 196, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={()=>{}}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors}</div>
  </div>
);

export default Book
