import { BrowserRouter, Routes, Route } from "react-router";
import { Signup } from "../pages/Signup";
import { Layout } from "../layout/main";
import { Signin } from "../pages/Signin";
import { Home } from "../pages/Home";
import { PrivateRoute } from "../components/private-route";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
