import './styles/main.scss';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { Suspense,lazy } from 'react';
import Complete from './components/signup/Complete';
import Footer from './components/footer/Footer';
import Conversation from './components/conversation/Conversation';
import Analyst from './components/diary/analyst/Analyst';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authActions } from './store/auth';

const Login = lazy(() => import('./components/Login/Login'));
const Mainpage = lazy(() => import('./components/main/MainPage'));
const Consult = lazy(()=>import('./components/chat/Chat'));
const Category = lazy(()=> import('./components/category/Category'));
const Diary = lazy(()=>import("./components/diary/Diary"));
const DiaryWrite = lazy(()=>import("./components/diary/diarywrite/DiaryWrite"));
const Signup = lazy(()=>import("./components/signup/Signup"));
const ConsultDetail = lazy(()=>import("./components/chat/detail/ConsultDetail"));
const ChatList = lazy(()=>import("./components/chatlist/ChatList"));
const DiaryAnalyst = lazy(()=>import("./components/diary/analyst/Analyst"));



function App() {
  const isauth = useSelector((state) => state.auth.isAuthenticated);
  console.log('로그인상태',isauth)
  const router =createBrowserRouter([
    {
      path:'/',
      element: <Login/>,
    },
    {
      path:'/signup',
      element: <Signup/>,
    },
    {
      path:'/complete',
      element: <Complete/>,
    },
    {
      path:'/home',
      element: <Mainpage/> ,
      children:[{path:'/home',element:<Footer footerState='home'/>}]
    },
    {
      path:'/consult',
      element: <Consult/>,
      children:
      [
        {path:'/consult',element:<Footer footerState='consult'/>},
      ]
    },
    {
      path:'/consult/:id',
      element: <ConsultDetail/>,
      children:
      [
        {path:'/consult/:id',element:<Footer footerState='consult'/>},
      ]
    },
    {
      path:'/chat/:id',
      element: <Conversation/>,
    },
    {
      path:'/chatlist',
      element: <ChatList/>,
    },
    
    {
      path:'/program',
      element: <Category/>,
      children:[{path:'/program',element:<Footer footerState='program'/>}]
    },
    {
      path:'/diary',
      element: <Diary/>,
      children:[{path:'/diary',element:<Footer footerState='diary'/>}]
    },
    {
      path:'/diary/:date',
      element: <DiaryWrite/>,
      children:[{path:'/diary/:date',element:<Footer footerState='diary'/>}]
    },
    {
      path:'/diary/:date/analyst',
      element: <Analyst/>,
      children:[{path:'/diary/:date/analyst',element:<Footer footerState='diary'/>}]
    },
  ]);

  return (
    <Suspense fallback="loading...">
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App
