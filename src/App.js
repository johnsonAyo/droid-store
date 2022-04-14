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

// components
import AdminToolbar from "./components/AdminToolbar";

// hoc
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

// pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Order from "./pages/Order";
import "./default.scss";

const MainLayouts = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const PaymentLayout = () => (
  <WithAuth>
    <MainLayout>
      <Outlet />
    </MainLayout>
  </WithAuth>
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
      <AdminToolbar />
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
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route exact path="/search" element={<MainLayouts />}>
            <Route path="/search" element={<Search />} />
          </Route>
          <Route path="/search/:filterType" element={<MainLayouts />}>
            <Route path="/search/:filterType" element={<Search />} />
          </Route>
          <Route path="/product/:productID" element={<MainLayouts />}>
            <Route path="/product/:productID" element={<ProductDetails />} />
          </Route>
          <Route path="/cart" element={<MainLayouts />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/payment" element={<PaymentLayout />}>
            <Route path="/payment" element={<Payment />} />
          </Route>
          <Route path="/order/:orderID" element={<MainLayouts />}>
            <Route path="/order/:orderID" element={<Order />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
