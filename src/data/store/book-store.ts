import { BehaviorSubject, Observable } from "rxjs";
import Book from "../../domain/entities/book.interface";
import BookStoreSpec from "../../domain/stores/book-store-interface";

class BookStore implements BookStoreSpec{

    constructor(initialValue: Array<Book>=[]){
        this._bookStore = initialValue;
        this.booKSubject = new BehaviorSubject(this._bookStore);
        this.books$ = this.booKSubject.asObservable();
    }

    toJSON() {
        throw new Error("Method not implemented.");
    }

    fromJSON(): Book {
        throw new Error("Method not implemented.");
    }

    private _bookStore: Book[];

    private set bookStore(books: Book[]){
        this._bookStore = books;
        this.booKSubject.next(this._bookStore);
    }

    fetchNewBooks(): Promise<void> {
        console.log("Called Fetch new books");
        return new Promise((resolve, reject)=>{
            try{
                this.bookStore = [...this._bookStore, <Book>{name: `Aladin and the ${Math.round(Math.random()*1000)} thieves`}];
                resolve();
            }catch(e){
                reject("Book fetch failed");
            }
        });
    }

    private booKSubject: BehaviorSubject<Book[]>;

    public books$: Observable<Book[]>;

    setValues(): void {
        throw new Error("Method not implemented.");
    }
    reset(): void {
        throw new Error("Method not implemented.");
    }

}

export default BookStore;