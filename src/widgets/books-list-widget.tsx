import React from "react";
import Book from "../domain/entities/book.interface";

export interface BooksDiplayWidgetProps{
    books: Array<Book>
}

const BooksListWidget = (props: BooksDiplayWidgetProps)=>{
    const { books } = props;
    return (
        <ul>
            {books.map((item:Book) => <li>{item.name}</li>)}
        </ul>
    );
}

export default React.memo(BooksListWidget);