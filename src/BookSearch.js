import React, {Component} from 'react'
import Book from './Book'
import {Link} from 'react-router-dom'

class BookSearch extends Component {
  handleChange = (event) => {
    this.props.onSearch(event.target.value);
  }
  render(){
    const {onUpdate, books, results} =this.props
    const bookIds = books.map(b => b.id)
    const mergeResults = results.map(b => {
      if(bookIds.includes(b.id)){
        return(books.find(s => s.id == b.id))
      }else{
        return(b)
      }
    })
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {mergeResults.map((book,index) =>(
              <li key={book.id}>
                <Book book={book} onUpdate={onUpdate}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookSearch
