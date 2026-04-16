import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { RouteScrollRestoration } from "./components/route-scroll-restoration";
import { HomePage } from "./pages/home-page";

function SiteLayout() {
  return (
    <>
      <RouteScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
