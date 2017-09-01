import React, {Component} from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class Books extends Component {
  render(){
    const {books} = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={books.filter(b => b.shelf == 'currentlyReading')}
              title='Currently reading'
            />
            <BookShelf
              books={books.filter(b => b.shelf == 'wantToRead')}
              title='Want to read'
            />
            <BookShelf
              books={books.filter(b => b.shelf == 'read')}
              title='Read'
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}
export default Books
