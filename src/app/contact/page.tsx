'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里以后可以连接后端 API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-serif font-bold text-[#d4a5a5]">
              好呀 HAOYA
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-[#d4a5a5] transition">首页</Link>
              <Link href="/products" className="text-gray-600 hover:text-[#d4a5a5] transition">产品</Link>
              <Link href="/about" className="text-gray-600 hover:text-[#d4a5a5] transition">关于</Link>
              <Link href="/contact" className="text-[#d4a5a5] font-medium">联系</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">联系我们</h1>
          <p className="text-xl text-gray-600">有任何问题？我们随时为你服务</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">联系方式</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <div className="font-medium text-gray-800">邮箱</div>
                    <div className="text-gray-600">service@haoya.com</div>
                    <div className="text-sm text-gray-500">工作日 24 小时内回复</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">💬</div>
                  <div>
                    <div className="font-medium text-gray-800">微信客服</div>
                    <div className="text-gray-600">haoya_service</div>
                    <div className="text-sm text-gray-500">工作日 9:00-18:00</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <div className="font-medium text-gray-800">电话</div>
                    <div className="text-gray-600">400-xxx-xxxx</div>
                    <div className="text-sm text-gray-500">工作日 9:00-18:00</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🏢</div>
                  <div>
                    <div className="font-medium text-gray-800">公司地址</div>
                    <div className="text-gray-600">上海市 xx 区 xx 路 xx 号</div>
                    <div className="text-sm text-gray-500">欢迎预约参观</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-medium text-gray-800 mb-4">关注我们</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#fff5f2] rounded-full flex items-center justify-center text-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#fff5f2] rounded-full flex items-center justify-center text-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#fff5f2] rounded-full flex items-center justify-center text-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#fffbf9] rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">在线留言</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                  ✅ 留言已提交！我们会尽快回复你。
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                    placeholder="怎么称呼你"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                    placeholder="用于接收回复"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    主题
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                  >
                    <option value="">请选择</option>
                    <option value="product">产品咨询</option>
                    <option value="order">订单问题</option>
                    <option value="after-sales">售后服务</option>
                    <option value="cooperation">商务合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    留言内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                    rows={5}
                    placeholder="请详细描述你的问题或需求"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 rounded-lg font-medium"
                >
                  提交留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#fffbf9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-8 text-center">常见问题</h2>
          <div className="space-y-4">
            {[
              { q: '多久发货？', a: '一般下单后 24-48 小时内发货，特殊情况会提前通知。' },
              { q: '支持退换货吗？', a: '支持 7 天无理由退换货，商品需保持完好未使用。' },
              { q: '怎么查询物流？', a:  '登录账号在订单详情中查看，或联系客服提供订单号查询。' },
              { q: '有实体店吗？', a: '目前仅线上销售，欢迎预约参观我们的展厅。' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="font-medium text-gray-800 mb-2">❓ {item.q}</div>
                <div className="text-gray-600 text-sm">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-serif font-bold text-[#d4a5a5] mb-4">好呀 HAOYA</div>
              <p className="text-gray-400 text-sm">好呀，让每一天都美好</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">产品分类</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/products?category=美妆护肤" className="hover:text-[#d4a5a5] transition">美妆护肤</Link></li>
                <li><Link href="/products?category=家居生活" className="hover:text-[#d4a5a5] transition">家居生活</Link></li>
                <li><Link href="/products?category=时尚配饰" className="hover:text-[#d4a5a5] transition">时尚配饰</Link></li>
                <li><Link href="/products?category=健康食品" className="hover:text-[#d4a5a5] transition">健康食品</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">客户服务</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/contact" className="hover:text-[#d4a5a5] transition">联系我们</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">配送说明</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">退换政策</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">常见问题</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">关于好呀</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-[#d4a5a5] transition">公司简介</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">加入我们</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">媒体报道</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">合作伙伴</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 好呀 HAOYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
