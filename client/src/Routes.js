import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import NewsPage from "./Components/NewsPage";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />} />
    <Route path="/ndtv" element={<NewsPage data="ndtv" />} />
    <Route path="/indiatoday" element={<NewsPage data="indiatoday" />} />
    <Route path="/indiatv" element={<NewsPage data="indiatv" />} />
    <Route path="/indianexpress" element={<NewsPage data="indianexpress" />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);
export default function Routes() {
  return <RouterProvider router={router} />;
}
