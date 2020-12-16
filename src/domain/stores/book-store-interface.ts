import { Observable } from "rxjs";
import Book from "../entities/book.interface";
import { SerializableStore } from "./store-interface";

interface BookStoreSpec extends SerializableStore<Book>{
    fetchNewBooks(): Promise<void>;
    books$: Observable<Book[]>;
}

export default BookStoreSpec;