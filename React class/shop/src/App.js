import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import MainNavbar from "./navbar/MainNavbar";
import Jumbotron from "./pages/Jumbotron";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <MainNavbar />

      <Routes>
        <Route path="/" element={<Jumbotron />} />
        <Route path="detail" element={<Detail />} />

        {/* (별표)는위에 경로 외에 모든 주소를 뜻함 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
