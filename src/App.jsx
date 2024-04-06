// import Navbar from './components/Navbar/Navbar'
import HomePage from './Routes/Homepage/HomePage'
import LayOut from './Routes/Layout/LayOut';
// import { Form } from 'react-router-dom'
import ListPage from './Routes/Lists/LsitPage'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
 }from "react-router-dom";
import SinglePage from './Routes/SinglePage/SinglePage';



function App() {

  const router = createBrowserRouter([
  {
    path:"/",
    element:<LayOut/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/List",
        element: <ListPage/>
      },
      {
        path:"/:id",
        element:<SinglePage/>
      }
    ]
  }
  
])

return (

  
  <RouterProvider router={router}/>

  

)
}

export default App