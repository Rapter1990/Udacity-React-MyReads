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

        return (
            <div>
                
            </div>
        )
    }
}

BookDetail.propTypes = {
    bookId: PropTypes.string.isRequired
};

export default BookDetail;