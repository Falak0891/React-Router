import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Items from "./pages/Items";
function App() {

  // const routes = createRoutesFromElements(
  //   <>
  //   <Route path="/" >
  //     <Route index element={<Home/>}/>
  //     <Route path="/about" element={<About/>}/>
  //     <Route path="/items" element={<Items/>}/>
  //   </Route>
    
  //   </>
  // );

  // const router = createBrowserRouter(routes);

  const router = createBrowserRouter([
    {path: "/root", children:[
      {index: true, element:<Home/>},
      {path:"about", element:<About/>},
      {path:"items", element:<Items/>}

    ]}
    

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
