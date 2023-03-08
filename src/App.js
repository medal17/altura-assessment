import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, Outlet, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/home';
import Explore from './pages/explore';
import Navbar from './components/navbar/Navbar';
import { Children } from 'react';

function NavWrapper() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<NavWrapper/>,
    children:[
      {path:'/', index:true, element:<Home/>},
      {path:'explore', element:<Explore/>}
    ] 
  }
  ])
  return (
    <div className="App">
      <RouterProvider  router={router}/>
    </div>
  );
}

export default App;
