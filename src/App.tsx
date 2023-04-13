import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LonelyNewsPage from "./pages/LonelyNewsPage";
import Layout from "./components/universal/Layout";
import "./App.css";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="news/:id" element={<LonelyNewsPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}
