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
            this.setState({ book })
        });
    }


    render() {

        const { book } = this.state;

        console.log("book : ", book);

        return (
            <div>
                <p>{book.title}</p>
            </div>
        )
    }
}

BookDetail.propTypes = {
    bookId: PropTypes.string.isRequired
};

export default BookDetail;