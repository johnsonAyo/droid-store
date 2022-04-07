import "./default.scss";
import Homepage from "./page/Homepage";
import { Routes, Route } from "react-router";
import Registration from "./page/Registration";
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";

import { Outlet } from "react-router-dom";

const MainLayouts = () => (
  <>
    <MainLayout>
      <Outlet />
    </MainLayout>
  </>
);
const HomepageLayouts = () => (
  <>
    <HomepageLayout>
      <Outlet />
    </HomepageLayout>
  </>
);
function App() {
  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route path="/" element={<HomepageLayouts />}>
            <Route path="/" element={<Homepage />} />
          </Route>
          <Route path="/registeration" element={<MainLayouts />}>
            <Route path="/registeration" element={<Registration />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
