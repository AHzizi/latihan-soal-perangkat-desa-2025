import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Quiz } from './components/Quiz';


const Footer = () => {
  return (
    <footer className="w-full text-white text-center py-4 italic mt-auto bg-transparent">
      <p className="text-sm">
        Made with <span className="text-red-500">❤</span> by{" "}
        <a
          href="https://github.com/AHzizi"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Miftakul Azizi
        </a>{" "}
        &copy; 2025
      </p>
    </footer>
  );
};


function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-300 flex flex-col items-center ${
      isDark ? 'bg-gradient-to-br from-gray-800 to-teal-900' : 'bg-gradient-to-br from-gray-100 to-teal-100'
    }`}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-4 left-4 p-2 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-white" />
        ) : (
          <Moon className="w-6 h-6 text-gray-800" />
        )}
      </button>
      
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Latihan Soal UU Desa Terbaru
          </h1>
          <p className={`text-xl md:text-2xl ${
            isDark ? 'text-white/90' : 'text-gray-700'
          }`}>
            (UU No. 3 Tahun 2024) Untuk Tes Perangkat Desa 2025
          </p>
        </div>
        <Quiz />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;