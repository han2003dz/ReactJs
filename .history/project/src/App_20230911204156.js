import "./App.css";
import Header from 
function App() {
  let name = "Han Nguyen";
  const css = {
    color: "red",
    backgroundColor: "black",
  };
  return (
    // <></> cú pháp viết tắt của <React.Fragment></React.Fragment>
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
