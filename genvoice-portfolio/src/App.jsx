import './App.css'
import RouterConfig from './config/RouterConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./Components/Spinner";

function App() {


  return (
    <>
      <RouterConfig />
      <ToastContainer autoClose={2500} />
      <Spinner />

    </>
  )
}

export default App;
