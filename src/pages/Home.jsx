import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";
import CardGroup from "react-bootstrap/CardGroup";

const HomePage = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    firebase.listallBooks().then((books) => setBooks(books.docs));
  }, []);
  return (
    <div className="container mt-5">
      <CardGroup>
        {books.map((book) => {
          return <BookCard key={book.id} id={book.id} {...book.data()} />;
        })}
      </CardGroup>
    </div>
  );
};
export default HomePage;
