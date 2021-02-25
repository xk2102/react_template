import { React, useContext, useState, useEffect } from "react";
import { Settings } from "../contexts/Settings";
import { Link } from "react-router-dom";
import Book from "./Book";

const Extra1 = ({ increaseCounter }) => {

    const { isLightTheme,
        // light,
        // dark,
        lang
        // toggleTheme,
        // toggleLang
    } = useContext(Settings);
    // const theme = isLightTheme ? light : dark;

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const res = await fetch('http://localhost:6000/books');
            const data = await res.json();
            setBooks(data);
        }
        getBooks();
        console.log("Runs on mount")
    }, []);

    const addBook = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:6000/books', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ title, author }),
        });
        setTitle('');
        setAuthor('');
        const data = await res.json();
        setBooks(() => [...books, data]);
        console.log("book added..");
    }

    const deleteBook = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:6000/books/${id}`, { method: 'DELETE' });
        setBooks(() => books.filter(book => book.id !== parseInt(id)));
        setId('');
        console.log("book deleted..");
    }

    return (
        <div className="Extra1">
            <span>Extra1</span><br />
            <button className="button" onClick={increaseCounter}>increase counterInApp</button>
            <br /><span>{`Settings: isLightTheme: ${isLightTheme} | lang: ${lang}`}</span>
            <br /><Link to="/Extra2">Link to Extra2</Link>
            <br /><Link to="/">Link to Main</Link>
            <form onSubmit={addBook}>
                <input
                    type='text'
                    placeholder='Add title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Add author...'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button className="button">Add book</button>
            </form>
            <form onSubmit={deleteBook}>
                <input
                    type='text'
                    placeholder='Add id...'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button className="button">Delete book</button>
            </form>

            <p>list of books on the server:</p>
            <ul>
                {books.length > 0 && books.map((book, index) =>
                    <Book key={index} {...book} />
                )}
            </ul>
        </div>
    )
}

export default Extra1;