import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import SingleBook from "./components/SingleBook";
import Welcome from "./components/Welcome";
import fantasyBooks from "./data/fantasy.json";
// console.log(fantasyBooks);

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      {/* <AllTheBooks /> */}

      <BookList books={fantasyBooks} />

      {/* <SingleBook asin={fantasyBooks[1].asin} img={fantasyBooks[1].img} title={fantasyBooks[1].title} price={fantasyBooks[1].price} /> */}

      <MyFooter />
    </div>
  );
}

export default App;
