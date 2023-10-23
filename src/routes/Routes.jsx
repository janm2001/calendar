import { Route, Routes } from "react-router-dom";

import routes from "./routes";

import Home from "../page/Home";
import CalendarPage from "../page/Calendar";
import Layout from "../components/Layout/layout";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={routes.home} element={<Home />} />
        <Route path={routes.calendar} element={<CalendarPage />} />
      </Route>
    </Routes>
  );
}
