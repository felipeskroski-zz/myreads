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
      console.log(books)
      this.setState(state => ({books}))
    })
  }
  updateBook = (book, shelf) => {
    BooksAPI.search(book, shelf)
  }
  searchBooks = (keyword) => {
    BooksAPI.search(keyword, 200).then(results => {
      this.setState(state => ({results}))
    })
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={()=>(
          <BookSearch onSearch={this.searchBooks} results={this.state.results}/>
        )} />

        <Route exact path='/' render={()=>(
          <Books books={this.state.books}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
