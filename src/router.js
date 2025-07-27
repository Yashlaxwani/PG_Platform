import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import StaffList from "./pages/StaffList";
import TenantsList from "./pages/TenantsList";
import AddActivity from "./pages/AddActivity";
import Room from "./pages/Room";
import Complaints from "./pages/Complaints";
import AddMenu from "./pages/AddMenu";
import Settings from "./pages/Settings";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { authFormAction } from "./utils/actions/authActions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "staff",
        element: <StaffList />,
      },
      {
        path: "tenants",
        element: <TenantsList />,
      },
      {
        path: "add-activity",
        element: <AddActivity />,
      },
      {
        path: "room",
        element: <Room />,
      },
      {
        path: "complaints",
        element: <Complaints />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
    action: authFormAction
  },
  {
    path: "/signup",
    element: <SignUp />,
    action: authFormAction
  },
]);
