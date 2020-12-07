import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from '../components/Book'
import * as BooksAPI from '../api/BooksAPI';

class SearchBook extends Component {

  state = {
    bookList: [],
    searchQueryText: '',
    invalidQuery: false
  }

  clearQuery = () => {
    this.setState({ searchQueryText: '' })
  }

  searchResultwithShelf = (searchResult, books) => {

    const bookList = (searchResult).map(book => {
      for(let bookOnShelf of books) {
        if(bookOnShelf.id === book.id) {
          book.shelf = bookOnShelf.shelf
          break;
        }
      }
      return book;
    })

    return bookList;

  }

  searchBookHandle = async (e) => {

    let searchQuery = e.target.value;

    this.setState({
      searchQueryText: searchQuery,
      invalidQuery: false
    })

    try{
      
        if (searchQuery === '') {

          this.setState({ 
            searchQueryText: '', 
            bookList: [] ,
            invalidQuery: false
          })

        } else {

          await BooksAPI.search(searchQuery).then((searchResult) => {
            if (Array.isArray(searchResult)) {
              this.setState(() => ({
                bookList: this.searchResultwithShelf(searchResult, this.props.books),
              }));
            } else {
              this.setState({ bookList: [] })
            }
          });


          if ((this.state.bookList.length === undefined || this.state.bookList.length === 0)) {
            this.setState({
              invalidQuery: true
            })
          }

        }

    } catch (err) {

      this.setState({ bookList: [] })
      
    }
  }


    render() {

      const { shelves, changeBookStatus } = this.props;

      const { bookList, searchQueryText, invalidQuery } = this.state;

        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search" onClick={this.clearQuery}>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                       placeholder="Search by title or author"
                       value={searchQueryText}
                       onChange={(event) => this.searchBookHandle(event)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

                {bookList.length > 0 && bookList.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    shelves={shelves}
                    onChange={changeBookStatus}
                  />
                ))}

                {invalidQuery && (
                    <div className='error-message'>
                        <p>Not found any book with search criteria. Please try again with words:</p>
                        <p> 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',                                       
                            'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
                            'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 
                            'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
                            'Education', 'Everything',  
                            'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
                            'Games', 'Gandhi', 
                            'Homer', 'Horror', 'Hugo',
                            'Ibsen',
                            'Journey',  
                            'Kafka', 'King',
                            'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 
                            'Make', 'Manage', 'Marquez', 'Money', 'Mystery',
                            'Negotiate', 
                            'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming',                                        
                            'React', 'Redux', 'River', 'Robotics', 'Rowling', 
                            'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
                            'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel',
                            'Ultimate', 
                            'Virtual Reality',
                            'Web Development', 
                            'iOS'
                        </p>
                    </div>
                )}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBook;