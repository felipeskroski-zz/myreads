import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path='/search' render={()=>(
          <BookSearch />
        )} />

        <Route exact path='/' render={()=>(
          <BookShelf />
        )} />
      </div>
    )
  }
}

export default BooksApp
