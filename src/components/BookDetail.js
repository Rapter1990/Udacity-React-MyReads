import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from '../api/BooksAPI'

class BookDetail extends Component {

    state = {
        book: null,
    };
    
    componentDidMount() {
        const { bookId } = this.props;

        BooksAPI.get(bookId).then((book) => {
            this.setState({ book: book })
        });
    }


    render() {

        const { book } = this.state;

        console.log("book : ", book);
        if (!book) 
            return null;
        else {
            return (

                <div className = "card-wrapper">
                    
                    <div className = "card">

                        
                        {/** left card */}
                        <div className = "product-imgs">
                            <div className = "img-display">
                                <div
                                    className="book-cover"
                                    style={{
                                    width: 400,
                                    height: 500,
                                    backgroundImage: book.imageLinks
                                        ? `url("${book.imageLinks.thumbnail}")`
                                        : 'none',
                                    backgroundSize: '400px 500px',
                                    }}
                                />                                                                                                                       
                            </div>
                        </div>


                        {/** right card */}
                        <div className = "product-content">
                            <h2 className = "product-title">{book.title}</h2>
                            <h5 className = "product-subtitle">{book.subtitle}</h5>
                            <div className = "product-detail">
                                <h2>Description:</h2>
                                <p>{book.description}</p>
                                <ul>
                                    <li>Authors: <span>{book.authors.join(', ')}</span></li>
                                    <li>Publisher: <span>{book.publisher}</span></li>
                                    <li>Published Date: <span>{book.publishedDate}</span></li>
                                    <li>Page Count: <span>{book.pageCount}</span></li>
                                    <li>Category: <span>{book.categories.join(',')}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>    
                </div>
            )
        }    
    }
}

BookDetail.propTypes = {
    bookId: PropTypes.string.isRequired
};

export default BookDetail;