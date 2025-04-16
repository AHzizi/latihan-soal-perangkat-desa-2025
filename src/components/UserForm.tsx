import { useState } from 'react';
import type { UserInfo } from '../types';

interface UserFormProps {
  onSubmit: (userInfo: UserInfo) => void;
}

export function UserForm({ onSubmit }: UserFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim()) return;
    onSubmit({ firstName, lastName: lastName.trim() || undefined });
  };

  return (
    <div className="w-full max-w-md p-8 mx-auto bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Selamat Datang di Ujian</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1">
            Nama Depan *
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700/40 border border-gray-600/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            placeholder="Masukkan nama depan"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1">
            Nama Belakang (Opsional)
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700/40 border border-gray-600/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            placeholder="Masukkan nama belakang"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-gray-600 to-teal-600 text-white rounded-lg hover:from-gray-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300"
        >
          Mulai Ujian
        </button>
      </form>
    </div>
  );
}