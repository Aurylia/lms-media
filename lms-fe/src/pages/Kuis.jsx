import React, { useState } from 'react';

// Komponen utama aplikasi (Tampilan Kuis)
const Kuis = () => {
  // State untuk menyimpan pilihan jawaban yang dipilih
  const [selectedOption, setSelectedOption] = useState(null);

  // Data dummy untuk opsi kuis
  const quizOptions = [
    { id: 'a', text: 'Tanaman transgenik hanya memberi dampak positif tanpa risiko terhadap keanekaragaman hayati' },
    { id: 'b', text: 'Produksi tanaman transgenik sepenuhnya bebas dari kontroversi etika dan lingkungan' },
    { id: 'c', text: 'Tanaman transgenik dapat meningkatkan hasil panen, namun penggunaannya harus diawasi karena dapat menimbulkan dampak ekologis' },
    { id: 'd', text: 'Semua tanaman hasil rekayasa genetik tidak dapat dikonsumsi manusia karena beracun' },
    { id: 'e', text: 'Kekhawatiran terhadap GMO hanya disebabkan oleh kurangnya hasil panen petani tradisional.' },
  ];

  // Handler saat opsi dipilih
  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  // Handler untuk tombol "Kirim Jawaban"
  const handleSubmit = () => {
    if (selectedOption) {
      console.log(`Jawaban terpilih: ${selectedOption}`);
      // Di sini Anda bisa menambahkan logika pengiriman jawaban ke API
      alert(`Jawaban ${selectedOption.toUpperCase()} telah dikirim.`);
    } else {
      alert("Silakan pilih salah satu jawaban terlebih dahulu.");
    }
  };

  // Komponen Opsi Jawaban Kuis
  const QuizOption = ({ id, text, isSelected, onSelect }) => {
    const isClickable = true; // Anggap opsi selalu bisa diklik
    
    // Styling untuk badge (a, b, c, d, e)
    const badgeClasses = isSelected
      ? 'bg-[#1F6294] text-white border-white' // Warna saat dipilih
      : 'bg-green-500 text-white border-green-500 hover:bg-green-600 transition-colors duration-200'; // Warna default
    
    // Styling untuk container opsi
    const optionClasses = isSelected
      ? 'bg-blue-50 border-2 border-[#1F6294] shadow-md' // Border biru saat dipilih
      : 'bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200';

    return (
      <div
        className={`flex items-start p-4 mb-4 rounded-lg cursor-pointer ${optionClasses}`}
        onClick={() => isClickable && onSelect(id)}
      >
        {/* Badge Huruf Opsi */}
        <div className={`shrink-0 w-6 h-6 mr-3 mt-0.5 rounded-full flex items-center justify-center font-bold text-xs uppercase ${badgeClasses}`}>
          {id}
        </div>
        
        {/* Teks Opsi */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          {text}
        </p>
      </div>
    );
  };

  return (
    // Container utama dengan warna latar belakang biru dan pola gradien
    <div className="min-h-screen bg-[#1F6294] flex flex-col font-sans">
      
      {/* Background radial gradient decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl absolute -top-40 -left-40 opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Konten Utama (Card Kuis) */}
      <main className="grow flex items-center justify-center p-4 md:p-8 relative z-10">
        <div className="w-full max-w-4xl bg-white p-6 md:p-10 lg:p-12 rounded-4xl shadow-2xl transition duration-500 hover:shadow-3xl transform hover:scale-[1.005]">
          
          {/* Bagian Judul Kuis */}
          <div className="mb-8 pt-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F6294] mb-2">Kuis 1</h2>
            <div className="w-full h-px bg-gray-200"></div>
          </div>
          
          {/* Instruksi atau Pertanyaan */}
          <div className="mb-6">
            <p className="text-lg md:text-xl font-medium text-gray-800">Misalkan ini soal 1 pada TP 1</p>
          </div>

          {/* Opsi Jawaban */}
          <div className="space-y-3 mb-10">
            {quizOptions.map((option) => (
              <QuizOption
                key={option.id}
                id={option.id}
                text={option.text}
                isSelected={selectedOption === option.id}
                onSelect={handleOptionSelect}
              />
            ))}
          </div>

          {/* Tombol Kirim Jawaban */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className={`px-8 py-3 w-48 font-semibold rounded-xl shadow-lg transition duration-300 transform hover:scale-105 active:scale-100 
                ${selectedOption
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              style={{
                background: selectedOption
                  ? 'linear-gradient(180deg, #68E079 0%, #3DCC50 100%)'
                  : undefined,
                boxShadow: selectedOption
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                  : undefined,
              }}
            >
              Kirim Jawaban
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full p-4 text-center text-white/80 text-sm">
        <p>© 2025 Aurylia | ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
};

export default Kuis;
