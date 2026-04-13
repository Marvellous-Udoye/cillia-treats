import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RouteScrollRestoration } from "./components/route-scroll-restoration";
import { CatalogPageShell } from "./components/catalog-page-shell";
import { catalogPages } from "./data/catalog-pages";
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
        <Route
          path="/cakes"
          element={<CatalogPageShell page={catalogPages.cakes} />}
        />
        <Route
          path="/pastries"
          element={<CatalogPageShell page={catalogPages.pastries} />}
        />
        <Route
          path="/gift-sets"
          element={<CatalogPageShell page={catalogPages["gift-sets"]} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
