import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Heroes from "./pages/Heroes";
import HeroProfile from "./components/HeroProfile";
import { HeroesLoader } from "./pages/HeroesLoader";
import { HeroProfileLoader } from "./components/HeroProfileLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/heroes" replace />,
  },
  {
    path: "/heroes",
    element: <Heroes />,
    loader: HeroesLoader,
    children: [
      {
        path: "/heroes/:heroId",
        element: <HeroProfile />,
        loader: HeroProfileLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
