import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroList from "./pages/HeroList"
import HeroProfile from "./pages/HeroProfile";
import getHeroes from "./api/getHeroes";

const router = createBrowserRouter([
  {
    path: "/heroes",
    element: <HeroList />,
    loader: getHeroes,
  },
  {
    path: "/heroes/:heroId",
    element: <HeroProfile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
