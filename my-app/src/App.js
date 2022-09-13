import { Sidenav, Title, Car, Table } from "./components/export";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Sidenav />
      </header>
      <Car />
      <Table />
    </div>
  );
}
export default App;
