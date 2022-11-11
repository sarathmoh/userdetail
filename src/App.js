import './App.css';
import Home from './components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Details from './components/Details';
import Adduser from './components/Adduser'
import Update from './components/Update';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="details" element={<Details/>}/>
        <Route path="adduser" element={<Adduser/>}/>
        <Route path="updateuser/:id" element={<Update/>}/>
        </Routes>
        </BrowserRouter> 
        <ToastContainer />
  </div>
  );
}

export default App;
