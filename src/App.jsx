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

import Loading from './components/loading/loading';

const Login = lazy(() => import('./components/Login/Login'));
const Mainpage = lazy(() => import('./components/main/MainPage'));
const Consult = lazy(()=>import('./components/chat/Chat'));
const Category = lazy(()=> import('./components/category/Category'));
const Diary = lazy(()=>import("./components/diary/Diary"));
const DiaryWrite = lazy(()=>import("./components/diary/diarywrite/DiaryWrite"));
const Signup = lazy(()=>import("./components/signup/Signup"));
const ConsultDetail = lazy(()=>import("./components/chat/detail/ConsultDetail"));
const ChatList = lazy(()=>import("./components/chatlist/ChatList"));
const CategoryVideo=lazy(()=>import("./components/category/CategoryVideo"));
const ProgramDetail=lazy(()=>import("./components/category/ProgramDetail"));

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }
  return children;
};


function App() {
  const isauth = useSelector((state) => state.auth.isAuthenticated);
  console.log('로그인상태',isauth)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/complete',
      element: <Complete />,
    },
    {
      path: '/home',
      element: (
        <Mainpage/>
      ),
      children: [
        { path: '/home', element: <Footer footerState='home' /> }
      ]
    },
    {
      path: '/consult',
      element: (
        <ProtectedRoute isAuth={isauth}>
          <Consult />
         
        </ProtectedRoute>
      ),
      children: [
        { path: '/consult', element: <Footer footerState='consult' /> }
      ]
    },
    {
      path: '/consult/:id',
      element: (
        <ProtectedRoute isAuth={isauth}>
          <ConsultDetail />
          
        </ProtectedRoute>
      ),
      children: [
        { path: '/consult/:id', element: <Footer footerState='consult' /> }
      ]
    },
    {
      path: '/chat/:id',
      element: (
        <ProtectedRoute isAuth={isauth}>
          <Conversation />
        </ProtectedRoute>
      ),
    },
    {
      path: '/chatlist',
      element: (
        <ProtectedRoute isAuth={isauth}>
          <ChatList />
        </ProtectedRoute>
      ),
    },
    {
      path: '/program',
      element: (
     
          <Category />
         
   
      ),
      children: [
        { path: '/program', element: <Footer footerState='program' /> }
      ]
    },
    {
      path:'/video/:id',
      element: (
        <CategoryVideo/>
      ),
    },
    {
      path:'/program/:id',
      element: (
        <ProgramDetail/>
      ),
      children: [
        { path: '/program/:id', element: <Footer footerState='program' /> }
      ]
    },
    {
      path: '/diary',
      element: (
        <ProtectedRoute isAuth={isauth}>
          <Diary />
        
        </ProtectedRoute>
      ),
      children: [
        { path: '/diary', element: <Footer footerState='diary' /> }
      ]
    },
    {
      path: '/diary/:date',
      element: (
        <ProtectedRoute isAuth={isauth}>
          <DiaryWrite />
         
        </ProtectedRoute>
      ),
      children: [
        { path: '/diary/:date', element: <Footer footerState='diary' /> }
      ]
    },
    {
      path: '/diary/:date/analyst',
      element: (
        <Analyst/>
      ),
      children: [
        { path: '/diary/:date/analyst', element: <Footer footerState='diary' /> }
      ]
    },
  ]);

  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App
