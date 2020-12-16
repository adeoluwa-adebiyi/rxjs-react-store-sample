import React, { useEffect, useState } from "react";
import { map } from "rxjs/operators";
import Book from "../domain/entities/book.interface";
import BookStoreSpec from "../domain/stores/book-store-interface";
import BooksListWidget from "../widgets/books-list-widget";

export interface BookScreenProps{
    bookStore: BookStoreSpec
}

const BooksScreen = (props: BookScreenProps) =>{
    const { bookStore } = props;

    const [val, setVal] = useState<Book[]>([]);


    useEffect(()=>{

        bookStore.books$.subscribe((books:Book[])=>{
            console.log(`Books: ${books}`);
            setVal(books);
        });
    
        setInterval(()=>{
            bookStore.fetchNewBooks();
        }, 5000);

    }, []);
    
    return (
        <div>
            <p>Books Page</p>
            <BooksListWidget books={val}/>
        </div>

    )
}

export default React.memo(BooksScreen);