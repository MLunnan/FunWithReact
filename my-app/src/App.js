import { Sidenav, Title, Car } from "./components/export";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Sidenav />
      </header>
      <Car carColor="red" />
    </div>
  );
}
export default App;
