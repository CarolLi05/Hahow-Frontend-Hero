import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Heroes from "./pages/Heroes";
import HeroProfile from "./components/HeroProfile/HeroProfile";
import { HeroesLoader } from "./router_task/HeroesLoader";
import { HeroProfileLoader } from "./router_task/HeroProfileLoader";
import { HeroProfileAction } from "./router_task/HeroProfileAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="heroes" replace />,
  },
  {
    path: "heroes",
    element: <Heroes />,
    loader: HeroesLoader,
    children: [
      {
        path: ":heroId",
        element: <HeroProfile />,
        loader: HeroProfileLoader,
        action: HeroProfileAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
