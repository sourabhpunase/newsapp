import { Children, useState } from "react";
import { Navbar } from "./components/Navbar";
import { NewsBoard } from "./components/NewsBoard";
import { ForAll } from "./context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NewsDetails } from "./components/NewsDetails";
import Errorpage from "./Errorpage";
import { Cart } from "./components/Cart";
import { db } from "./firebaseinit";

function App() {
const router=createBrowserRouter([
{path:'/',element:<Navbar/>,

errorElement:<Errorpage/>
,children:[
{index:true,element:<NewsBoard/>},
{path:":itemId" ,element:<NewsDetails/>},
{path:'/cart',element:<Cart/>}

]

},



])
  return (
    
    <>
   



<RouterProvider router={router}/>




</>
  );
}

export default App;
