import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "lucide-react"; // untuk ikon kotak di navbar

export default function KriteriaPenilaian() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1E4D6B] flex flex-col">
  
      <div className="relative flex-1 flex flex-col items-center justify-center">
       
        {/* Card Utama */}
        <div className="relative z-10 bg-white rounded-3xl shadow-lg w-[90%] max-w-5xl p-10">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
            Kriteria Penilaian
          </h2>
          <hr className="border-gray-300 mb-8" />

          {/* 3 Kolom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-50 rounded-2xl p-6 text-center shadow-sm">
              <h3 className="text-[#1E3A8A] font-semibold text-lg">
                Pengetahuan
              </h3>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 text-center shadow-sm">
              <h3 className="text-[#1E3A8A] font-semibold text-lg">
                Keterampilan
              </h3>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 text-center shadow-sm">
              <h3 className="text-[#1E3A8A] font-semibold text-lg">Sikap</h3>
            </div>
          </div>

          {/* Tombol Kembali */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white text-center py-4 text-sm">
        © 2025 Aurylia | ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
