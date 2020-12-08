import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BooksPage from './pages/BookPage'
import SearchBook from './pages/SearchBook'
import * as BooksAPI from './api/BooksAPI'
import BookDetail from './components/BookDetail'

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

  changeBookStatus = (book, e) => {

    let newShelfValue = e.target.value;

    this.setState((previousState) => {
      BooksAPI.update(book, newShelfValue).then(response => {

        // update shelf state of new updated book
        book.shelf = newShelfValue;

        // list other books without new updated book
        const updateBooks = previousState.books.filter((b) => b.id !== book.id)

        // add new updated book to list
        updateBooks.push(book)

        // update state
        this.setState({
          books: updateBooks
        })

      })
    })
    
  }


  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" 
                   render={() => (
                                    <BooksPage
                                      shelves={this.shelves}
                                      books={this.state.books}
                                      changeBookStatus={this.changeBookStatus}
                                    />
                          )}           
            />
            <Route path="/search" 
                   render={() => (
                                    <SearchBook
                                      shelves={this.shelves}
                                      books={this.state.books}
                                      changeBookStatus={this.changeBookStatus}
                                    />
                          )}
            />
            <Route
                path="/book/:bookId"
                render={props => {
                  const { bookId } = props.match.params;
                  return <BookDetail bookId={bookId} />;
                }}>
            </Route>  
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
