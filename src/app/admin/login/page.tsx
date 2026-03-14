'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 简单验证（实际项目应该用后端验证）
    if (email === 'admin@haoya.com' && password === 'admin123') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('账号或密码错误');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f2] to-[#fcece6] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#d4a5a5] mb-2">好呀 HAOYA</h1>
          <p className="text-gray-500">后台管理系统</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              邮箱
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5] focus:ring-1 focus:ring-[#d4a5a5]"
              placeholder="admin@huaxi.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              密码
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5] focus:ring-1 focus:ring-[#d4a5a5]"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            className="w-full btn-primary py-3 rounded-lg font-medium"
          >
            登录
          </button>

          <div className="text-center text-sm text-gray-500">
            <p>默认账号：admin@haoya.com</p>
            <p>默认密码：admin123</p>
          </div>
        </form>
      </div>
    </div>
  );
}
