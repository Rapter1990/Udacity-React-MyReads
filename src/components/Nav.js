import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (add) => {

  console.log(
    "add : " + add
  );

  return (
    <div className="list-books-title">
            <Link
                to="/search"
                className="link-new-books"
            >
                <div className="new-books">
                    <img src={add} alt="add" />
                        <h1>Search new books</h1>
                </div>
            </Link>
    </div>
  )
}

export default Nav;