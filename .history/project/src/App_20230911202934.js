import "./App.css";

function App() {
  let name = "Han Nguyen";
  const css = {
    color: "red",
    backgroundColor: "black",
  };
  return (
    // cu
    <>
      <div className="App" style={css}>
        Xin chao {name}
      </div>
      <div className="App" style={css}>
        Xin chao {name}
      </div>
    </>
  );
}

export default App;
