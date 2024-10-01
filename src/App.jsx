import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Heroes, { HeroesLoader } from "./pages/Heroes";
import HeroProfile, { HeroProfileLoader } from "./components/HeroProfile";

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
