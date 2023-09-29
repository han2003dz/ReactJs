import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/mainContent";
import Navigation form "./components/navigation";
function App() {
  return (
    // <></> cú pháp viết tắt của <React.Fragment></React.Fragment>
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
