import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Heroes from "./pages/Heroes";
import HeroProfile from "./components/HeroProfile";
import { HeroesLoader } from "./pages/HeroesLoader";

const router = createBrowserRouter([
  {
    path: "/heroes",
    element: <Heroes />,
    loader: HeroesLoader,
    children: [
      {
        path: "/heroes/:heroId",
        element: <HeroProfile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
