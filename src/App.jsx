import './styles/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

const Login = lazy(() => import('./components/Login/Login'));
const Mainpage = lazy(() => import('./components/main/MainPage'));

function App() {


  return (
    <BrowserRouter>
    <Suspense fallback="loading...">
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Mainpage/>}/>
    </Routes>
    </Suspense>
   
    </BrowserRouter>
  )
}

export default App
