import { Sidenav, Title, Car } from "./components/export";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Sidenav />
      </header>
      <Car />
      <img src="../Images/birds.jpg" alt="birds" className="moving"></img>
    </div>
  );
}
export default App;
