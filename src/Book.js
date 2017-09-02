import React from 'react'

const handleChange = (onUpdate, book, event) => {
  onUpdate(book, event.target.value)
};
const Book = ({book, onUpdate}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 196, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
      <div className="book-shelf-changer">
        <select value={book.shelf || 'none'} onChange={(e)=> handleChange(onUpdate,book,e)}>
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
