import React from 'react'
import * as BooksAPI from '../api/BooksAPI'
import Nav from '../components/Nav'
import BookShelf from '../components/BookShelf'
import add from '../icons/add.svg'

class BooksPage extends React.Component {
    
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
      console.log("book : " + book +  + ", shelf: " +shelf)
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
  
export default BooksPage;