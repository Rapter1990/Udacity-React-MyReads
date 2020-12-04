import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Nav from './components/Nav'
import BookShelf from './BookShelf'
import add from './icons/add.svg'

class BooksApp extends React.Component {
    
    state = {
      books: []
    }
  
    shelves = {
        currentlyReading: "Currently Reading",
        wantToRead: "Want to read",
        read: "Read",
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
          this.setState(() => ({ books }));
        });
    }

    changeBookStatus = (book, shelf) => {

    }
 
    render() {
      return (
        <div className="list-books">
          <Nav add={add}/>
          <BookShelf shelves={this.shelves} books={this.state.books} onChange={this.changeBookStatus}/>
        </div>
      )
    }
  }
  
export default BooksApp;