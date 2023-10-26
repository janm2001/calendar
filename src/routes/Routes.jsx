import { Route, Routes, Navigate } from "react-router-dom";

import routes from "./routes";

import CommitsPage from "../page/CommitsPage";
import CalendarPage from "../page/Calendar";
import Layout from "../components/Layout/layout";
import CommitPage from "../page/CommitPage";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={routes.home}
          element={<Navigate to="/commits" replace />}
        />
        <Route index path={routes.commits} element={<CommitsPage />} />
        <Route path={routes.commit} element={<CommitPage />} />
        <Route path={routes.calendar} element={<CalendarPage />} />
      </Route>
    </Routes>
  );
}
