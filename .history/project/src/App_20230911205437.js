import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/mainContent";
function App() {
  let name = "Han Nguyen";
  const css = {
    color: "red",
    backgroundColor: "black",
  };
  return (
    // <></> cú pháp viết tắt của <React.Fragment></React.Fragment>
    <>
      <Header />

      <Footer />
    </>
  );
}

export default App;
