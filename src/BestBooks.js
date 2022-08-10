import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './theme/BestBooks.css';
import booksBG from './theme/books-background.jpg';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    const books = await axios.get('http://localhost:3001/books');
    this.setState({ books: books.data });
    console.log(this.state)
  }
  componentDidMount() {
    this.getBooks();
  }
  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <div className='bestbooks'>
        <h2 className="bestBookHeader">My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (

<Carousel slide={false}>
  {this.state.books.map((book, idx) => {
    return (
<Carousel.Item key={idx}>
  <img
    className="d-block w-100"
    src={booksBG}
    alt={`book number (${idx+1})`}
  />
  <Carousel.Caption id="carousel-caption">
    <h3>{book.title}</h3>
    <p>{book.description}</p>
  </Carousel.Caption>
</Carousel.Item>
  )})}
</Carousel>


        ) : (
          <h3>No Books Found :(</h3>
        )}
      </div>
    )
  }
}

export default BestBooks;
