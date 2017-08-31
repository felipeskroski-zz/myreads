import React from 'react'

const Book = ({title, authors, coverImage, coverSize, status, updateStatus}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: coverSize.width, height: coverSize.height, backgroundImage: `url(${coverImage})` }}></div>
      <div className="book-shelf-changer">
        <select value={status} onChange={updateStatus}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors}</div>
  </div>
);

export default Book
