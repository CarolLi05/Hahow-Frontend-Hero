import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroList from "./pages/HeroList"
import HeroProfile from "./pages/HeroProfile";

const router = createBrowserRouter([
  {
    path: "/heroes",
    element: <HeroList />,
    children: [
      {
        path: "/heroes/:heroId",
        element: <HeroProfile />,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
