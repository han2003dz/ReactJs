import "./App.css";

function App() {
  let name = "Han Nguyen";
  const css = {
    color: "red",
    backgroundColor: "black",
  };
  return (
    <div className="App" style={css}>
      Xin chao {name}
    </div>
  );
}

export default App;
