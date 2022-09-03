import Sidenav from "./sidenav/sidenav";
import Title from "./title/title";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Sidenav />
      </header>
    </div>
  );
}
export default App;
