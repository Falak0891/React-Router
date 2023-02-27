import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import Items from "./pages/Items";

function App() {
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="items" element={<Items />} />
        <Route path="items/:id" element={<ItemDetails />} />
      </Route>
    </>
  );

  const router = createBrowserRouter(routes);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Navbar />,
  //     children: [
  //       { index: true, element: <Home /> },
  //       { path: "about", element: <About /> },
  //       { path: "items", element: <Items /> },
  //       { path: "items/:id", element: <ItemDetails /> },
  //     ],
  //   },
  // ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
