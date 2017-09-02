# MyReads
A bookshelf app that allows you to categorize books you have read, are currently reading, or want to read. The project uses React for the UI and provides an API server to save your library.


## Backend Server
[`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## Prerequisites
* [`npm`](https://www.npmjs.com/)

## Dependencies
* react-router-dom
* prop-types

## Run the app
* Clone or download the repo.
* Open a terminal in project directory
* Run `npm install`
* Once all the dependencies are installed use command `npm start` to run the local server.
* App can be accessed at `localhost:3000`
