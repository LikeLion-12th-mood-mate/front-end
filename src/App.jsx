import './styles/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense,lazy } from 'react';
import Complete from './components/signup/Complete';

const Login = lazy(() => import('./components/Login/Login'));
const Mainpage = lazy(() => import('./components/main/MainPage'));
const Consult = lazy(()=>import('./components/chat/Chat'));
const Category = lazy(()=> import('./components/category/Category'));
const Diary = lazy(()=>import("./components/diary/Diary"));
const Signup = lazy(()=>import("./components/signup/Signup"));
function App() {


  return (
    <BrowserRouter>
    <Suspense fallback="loading...">
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/complete' element={<Complete/>}/>
      <Route path='/home' element={<Mainpage/>}/>
      <Route path='/consult' element={<Consult/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/diary' element={<Diary/>}/>
      
    </Routes>
    </Suspense>
   
    </BrowserRouter>
  )
}

export default App
