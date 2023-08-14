import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeCMS from "./pages/HomeCMS/HomeCMS";
import FormsElements from './Components/FormsElements/FormsElements';
function App() {
  return (
    <div >
      <Routes>
          <Route path="/" element={<HomeCMS/>}/>
          <Route path='/formelements' element={<FormsElements/>}/>
      </Routes>
    </div>
  );
}

export default App;
