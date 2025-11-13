import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", username, password);
    // nanti diganti dengan axios ke Laravel backend
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0E4B80]">
      {/* Kontainer utama */}
      <div className="bg-white rounded-2xl shadow-2xl w-[400px] p-10">
        <h1 className="text-2xl font-bold text-center text-[#0E4B80] mb-8">
          MASUK
        </h1>

        {/* Form di dalam kontainer */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* Input Nama Pengguna */}
          <div className="relative">
            <label className="text-gray-600 text-sm font-semibold">
              Nama Pengguna
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E4B80]"
              placeholder="Masukkan nama pengguna"
              required
            />
          </div>

          {/* Input Kata Sandi */}
          <div className="relative">
            <label className="text-gray-600 text-sm font-semibold">
              Kata Sandi
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E4B80]"
              placeholder="Masukkan kata sandi"
              required
            />
          </div>

          {/* Tombol Masuk */}
          <button
            type="submit"
            className="bg-[#0E4B80] hover:bg-[#0c3f6a] text-white font-semibold rounded-full py-2 mt-4 transition"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
