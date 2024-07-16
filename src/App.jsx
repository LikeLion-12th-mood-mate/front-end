import './styles/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense,lazy } from 'react';

const Login = lazy(() => import('./components/Login/Login'));
const Mainpage = lazy(() => import('./components/main/MainPage'));
const Chat = lazy(()=>import('./components/chat/Chat'));
const Category = lazy(()=> import('./components/category/Category'));
const Diary = lazy(()=>import("./components/diary/Diary"));
function App() {


  return (
    <BrowserRouter>
    <Suspense fallback="loading...">
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Mainpage/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/diary' element={<Diary/>}/>
      
    </Routes>
    </Suspense>
   
    </BrowserRouter>
  )
}

export default App
