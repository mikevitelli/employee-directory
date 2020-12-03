import "./App.css";
import Wrapper from "./components/Wrapper/index";
import Header from "./components/Header/index";
import Main from "./components/Main/index";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header>
          <Main />
        </Header>
      </Wrapper>
    </div>
  );
}

export default App;
