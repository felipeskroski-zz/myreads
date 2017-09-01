import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    results: []
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
          <BookShelf />
        )} />
      </div>
    )
  }
}

export default BooksApp
