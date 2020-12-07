import React from 'react'
import * as BooksAPI from '../api/BooksAPI'
import Nav from '../components/Nav'
import BookShelf from '../components/BookShelf'
import OpenSearch from '../components/OpenSearch'

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

    changeBookStatus = (book, e) => {

      let newShelfValue = e.target.value;

      this.setState((previousState) => {
        BooksAPI.update(book, newShelfValue).then(response => {

          // update shelf state of new updated book
          book.shelf = newShelfValue;

          // other books without new updated book
          const updateBooks = previousState.books.filter((b) => b.id !== book.id)

          // add new updated book to list
          updateBooks.push(book)
  
          // update state
          this.setState({
            books: updateBooks
          })
  
        })
      })

      console.log("changeBookStatus : ", this.state.books);
      
    }
 
    render() {
      return (
        <div className="list-books">
          <Nav />
          <BookShelf shelves={this.shelves} books={this.state.books} onChange={this.changeBookStatus} />
          <OpenSearch/>
        </div>
      )
    }
  }
  
export default BooksPage;