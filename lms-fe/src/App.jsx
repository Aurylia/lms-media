import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import KriteriaPenilaian from "./pages/KriteriaPenilaian";
import MateriPage from "./pages/MateriPage";
import Kuis from "./pages/Kuis";
import Lkpd from "./pages/lkpd";
import Sumatif from "./pages/Sumatif";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Login berdiri sendiri */}
        <Route path="/" element={<Login />} />

        {/* Layout utama */}
        <Route
          path="/*"
          element={
            <div className="flex flex-col h-screen">
              <Navbar />
              <div className="flex flex-1 bg-[#F8FAFC]">
                <Sidebar />
                <main className="flex-1 overflow-y-auto">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/kriteria" element={<KriteriaPenilaian />} />
                    <Route path="/materi" element={<MateriPage />} />
                    <Route path="/kuis" element={<Kuis />} />
                    <Route path="/lkpd" element={<Lkpd />} />
                    <Route path="/sumatif" element={<Sumatif />} />
                  </Routes>
                </main>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
