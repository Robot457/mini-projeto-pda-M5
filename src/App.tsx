import { useEffect, useState } from "react";
import "./App.css";
import { fetchBooks, Book } from "./services/fetch-books";
import { BookCard } from "./components/book-card";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  try {
    useEffect(() => {
      fetchBooks().then((data) => {
        setBooks(data.books);
      });
    }, []);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="container">
      <h1 className="titleContainer">Seja bem-vindo ao nosso site de livros</h1>

      <p className="subtitleContainer">
        Aqui você encontra os melhores livros para ler
      </p>

      <div className="box">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            yearOfPub={book.yearOfPub}
            sinopsis={book.sinopsis}
          />
        ))}

        {books.length === 0 && (
          <div>
            <p className="notFound">Nenhum livro encontrado</p>
            <p className="messageError">
              Verifique se o servidor está rodando
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
