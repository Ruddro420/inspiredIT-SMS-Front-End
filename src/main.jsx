import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@/components/theme/theme-provider.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Teachers from "./routes/Page/Teachers/Teachers.jsx";
import { Login } from "./components/app_components/Login.jsx";
import DashboardContent from "./routes/Page/Dashboard/DashboardContent.jsx";
import AddTeacher from "./routes/Page/Teachers/AddTeacher.jsx";
import Students from "./routes/Page/Students/Students.jsx";
import AddStudents from "./routes/Page/Students/AddStudents.jsx";
import Staffs from "./routes/Page/Staffs/Staffs";
import AddStuffs from "./routes/Page/Staffs/AddStuffs";
import Subjects from "./routes/Page/Subjects/Subjects";
import AddSubjects from "./routes/Page/Subjects/AddSubjects";
import Classes from "./routes/Page/Classes/Classes";
import AddClasses from "./routes/Page/Classes/AddClasses";
import Notices from "./routes/Page/Notices/Notices";
import AddNotices from "./routes/Page/Notices/AddNotices";
import Fees from "./routes/Page/Fees/Fees";
import AddFees from "./routes/Page/Fees/AddFees";
import Sections from "./routes/Page/Sections/Sections";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/",
        element: <DashboardContent />,
      },
      {
        path: "/dashboard/teachers",
        element: <Teachers />,
      },
      {
        path: "/dashboard/add-teachers",
        element: <AddTeacher />,
      },
      {
        path: "/dashboard/students",
        element: <Students />,
      },
      {
        path: "/dashboard/add-students",
        element: <AddStudents />,
      },
      {
        path: "/dashboard/stuffs",
        element: <Staffs />,
      },
      {
        path: "/dashboard/add-staffs",
        element: <AddStuffs />,
      },
      {
        path: "/dashboard/subjects",
        element: <Subjects />,
      },
      {
        path: "/dashboard/add-subjects",
        element: <AddSubjects />,
      },
      {
        path: "/dashboard/classes",
        element: <Classes />,
      },
      {
        path: "/dashboard/add-classes",
        element: <AddClasses />,
      },
      {
        path: "/dashboard/notices",
        element: <Notices />,
      },
      {
        path: "/dashboard/add-notices",
        element: <AddNotices />,
      },
      {
        path: "/dashboard/fees",
        element: <Fees />,
      },
      {
        path: "/dashboard/add-fees",
        element: <AddFees />,
      },
      {
        path: "/dashboard/sections",
        element: <Sections />,
      },
      /*       {
              path: '/dashboard',
              element: <Dashboard/>
            },
            {
              path: '/teachers',
              element: <Teachers/>
            },
            {
              path: '/customers',
              element: <Customers/>
            },
            {
              path: '/analytics',
              element: <Analytics/>
            },
            {
              path: '/admin_login',
              element: <Admin/>
            },
            {
              path: '/staff_login',
              element: <Staff/>
            } */
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
