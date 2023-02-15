import React from "react";
import  {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

//Components
import Nav from "./components/Nav";
const HeaderLayout = () => (
  <div>
    <Nav />
    <Outlet/>
  </div>
);
const router = createBrowserRouter([{
  element:<HeaderLayout/>,
children:[{path:"/",element: <HomePage />,},
{path:"/about",element:<AboutPage />,},
{path:"/contact",element:<ContactPage/>,},
],
},
]);

function App(){
  return (<RouterProvider router={router} />);
}
export default App;