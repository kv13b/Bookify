import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";
const ViewOrder = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (firebase.isLoggedIn)
      firebase
        .fetchMyOrders(firebase.user.uid)
        ?.then((books) => setBooks(books.docs));
  }, [firebase]);

  console.log(books);
  if (!firebase.isLoggedIn) return <h1>Please Log in</h1>;
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} id={book.id} {...book.data()} />
      ))}
    </div>
  );
};
export default ViewOrder;
