import Search from "../Search/Search";
import Header from "../Header/Header";
import List from "../List/List";

function Container() {
  return (
    <div className="d-flex flex-column justify-content-center gap-3">
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default Container;
