import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router";
import { checkUserSession } from "./redux/User/user.actions";
import { Outlet } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
import AdminLayout from "./layouts/AdminLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// hoc
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

// pages
import Homepage from "./page/Homepage";
import Registration from "./page/Registration";
import Login from "./page/Login";
import Recovery from "./page/Recovery";
import Dashboard from "./page/Dashboard";
import "./default.scss";

const MainLayouts = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const DashboardLayouts = () => (
  <WithAuth>
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  </WithAuth>
);

const AdminLayouts = () => (
  <WithAdminAuth>
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  </WithAdminAuth>
);

const HomepageLayouts = () => (
  <HomepageLayout>
    <Outlet />
  </HomepageLayout>
);

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route path="/" element={<HomepageLayouts />}>
            <Route path="/" element={<Homepage />} />
          </Route>
          <Route path="/registration" element={<MainLayouts />}>
            <Route path="/registration" element={<Registration />} />
          </Route>
          <Route path="/login" element={<MainLayouts />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/recovery" element={<MainLayouts />}>
            <Route path="/recovery" element={<Recovery />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayouts />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/admin" element={<AdminLayouts />}>
            <Route path="/admin" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
