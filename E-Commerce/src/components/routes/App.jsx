import { Outlet } from "react-router-dom";
import "../../App.css";
import Header from "../Header";
import Footer from "../Footer";

function App() {
  return (
    <>
      <div className="min-vh-100">
        <Header />
        <main className="pt-5">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
