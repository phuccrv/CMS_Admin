import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeCMS from "./pages/HomeCMS/HomeCMS";
import FormsElements from './Components/FormsElements/FormsElements';
import FormValidation from './Components/FormValidation/FormValidation';
function App() {
  return (
    <div >
      <Routes>
          <Route path="/" element={<HomeCMS/>}/>
          <Route path='/formelements' element={<FormsElements/>}/>
          <Route path='/formvalidation' element={<FormValidation/>}/>
      </Routes>
    </div>
  );
}

export default App;
