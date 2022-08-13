import "./App.css";
import Container from "./components/Container/Container";
import { FilterProvider } from "./context/FilterContext";

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <Container />
      </FilterProvider>
    </div>
  );
}

export default App;
