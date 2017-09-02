import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './Books'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    results: [],
    books: [],
  }
  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }
  updateBook = (book, shelf) => {
    let updatedShelf = this.state.books.filter((b) => (b !== book))
    let newBook = book
    newBook.shelf = shelf
    updatedShelf.push(newBook)
    this.setState(state => ({books: updatedShelf}))

    BooksAPI.update(book, shelf)
  }
  searchBooks = (keyword) => {
    BooksAPI.search(keyword, 200).then(results => {
      if(Array.isArray(results)){
        return(this.setState({results}))
      }else{
        return(this.setState({results:[]}))
      }
    })
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={()=>(
          <BookSearch
            onSearch={this.searchBooks}
            results={this.state.results}
            books={this.state.books}
            onUpdate={this.updateBook}/>
        )} />

        <Route exact path='/' render={()=>(
          <Books
            books={this.state.books}
            onUpdate={this.updateBook}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
