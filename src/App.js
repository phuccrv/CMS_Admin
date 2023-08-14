import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeCMS from "./pages/HomeCMS/HomeCMS";
function App() {
  return (
    <div >
      <Routes>
          <Route path="/" element={<HomeCMS/>}/>
      </Routes>
    </div>
  );
}

export default App;
