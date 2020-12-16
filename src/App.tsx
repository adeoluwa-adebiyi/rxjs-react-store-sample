import BooksScreen from "./screens/books-screen";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import BookStoreSpec from "./domain/stores/book-store-interface";
import BookStore from "./data/store/book-store";

export interface AppProps{
  bookStore?: BookStoreSpec
}

const  App = (props: AppProps) =>{

  const {bookStore = new BookStore([{ name: "The Three Musketeers" }])} = props;

  return (
    <BrowserRouter>
      <Route path="/" >
        <BooksScreen bookStore={bookStore} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
