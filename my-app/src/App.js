import { Sidenav, Title, Car, Table, TimeCheckGMK } from "./components/export";
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
      <TimeCheckGMK />
    </div>
  );
}
export default App;
