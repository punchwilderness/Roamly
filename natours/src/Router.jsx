import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import NavBar from "./Components/navbar";

function Router() {
  return (
    <div className="w-screen min-h-screen max-w-full p-6 box-border">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Router;
