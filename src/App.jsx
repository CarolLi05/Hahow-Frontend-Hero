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
import ErrorPage from "./pages/Error";
import { ProfileError } from "./components/HeroProfile/ProfileError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="heroes" replace />,
  },
  {
    path: "heroes",
    element: <Heroes />,
    errorElement: <ErrorPage />,
    loader: HeroesLoader,
    children: [
      {
        path: ":heroId",
        element: <HeroProfile />,
        errorElement: <ProfileError />,
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
