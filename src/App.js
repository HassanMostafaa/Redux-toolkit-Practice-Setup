import { Counter } from "./components/Counter";
import { Name } from "./components/Name";
import { UserApi } from "./components/UserApi";

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <hr />
      <br />
      <Name />
      <br />
      <hr />
      <br />
      <UserApi />
    </div>
  );
}

export default App;
