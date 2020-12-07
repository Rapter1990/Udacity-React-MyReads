import React from 'react'
import Nav from '../components/Nav'
import BookShelf from '../components/BookShelf'
import OpenSearch from '../components/OpenSearch'

class BooksPage extends React.Component {
    
    
    render() {

      const { shelves, books, changeBookStatus } = this.props;

      return (
        <div className="list-books">
          <Nav />
          <BookShelf shelves={shelves} books={books} onChange={changeBookStatus} />
          <OpenSearch/>
        </div>
      )
    }
  }
  
export default BooksPage;