'use client';

import Link from 'next/link';

export default function About() {
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
              <Link href="/about" className="text-[#d4a5a5] font-medium">关于</Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#d4a5a5] transition">联系</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-800 mb-6">
            关于<span className="text-[#d4a5a5]">好呀</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            好呀，让每一天都美好
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">我们的故事</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  好呀（HAOYA）成立于 2026 年，是一家致力于为用户提供优质生活产品的电商平台。
                  我们从化妆品起步，用心精选每一款产品，只为让用户遇见更美好的自己。
                </p>
                <p>
                  "好呀"这个名字，源自我们最想对用户说的话。当你收到心仪的商品时，
                  当你在镜子里看到更美的自己时，当你享受美好生活时，我们希望你会微笑着说一声："好呀！"
                </p>
                <p>
                  如今，好呀已经发展成为涵盖美妆护肤、家居生活、时尚配饰、健康食品等多品类的综合电商平台。
                  不变的是我们对品质的坚持，和对用户体验的重视。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4a5a5]/20 to-transparent rounded-2xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop" 
                alt="Our team"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#fffbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">我们的使命</h3>
              <p className="text-gray-600 leading-relaxed">
                让每个人都能轻松发现优质好物，享受美好生活。我们严格筛选每一件商品，
                确保品质与性价比，让用户购物无忧。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">我们的愿景</h3>
              <p className="text-gray-600 leading-relaxed">
                成为用户心中最值得信赖的生活伙伴。无论何时何地，当用户需要好物时，
                第一个想到的就是好呀。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800">核心价值观</h2>
            <p className="text-gray-500 mt-2">指引我们前行的信念</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '💝', title: '用户第一', desc: '用户需求是我们一切决策的出发点' },
              { icon: '✅', title: '品质保证', desc: '严格选品，只推荐真正好用的产品' },
              { icon: '🤝', title: '诚信为本', desc: '真实描述，透明定价，不玩套路' },
              { icon: '🌱', title: '持续成长', desc: '不断学习，为用户提供更好的服务' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800">产品品类</h2>
            <p className="text-gray-500 mt-2">精选多品类好物</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: '美妆护肤', icon: '💄', count: 156 },
              { name: '家居生活', icon: '🏠', count: 230 },
              { name: '时尚配饰', icon: '👜', count: 89 },
              { name: '健康食品', icon: '🥗', count: 124 },
              { name: '数码配件', icon: '📱', count: 67 },
              { name: '母婴用品', icon: '👶', count: 95 }
            ].map((category, index) => (
              <Link 
                key={index}
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className="group text-center p-6 rounded-xl bg-white hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <div className="font-medium text-gray-800 group-hover:text-[#d4a5a5] transition">{category.name}</div>
                <div className="text-sm text-gray-400">{category.count} 件商品</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '10K+', label: '服务用户' },
              { num: '500+', label: '精选商品' },
              { num: '98%', label: '好评率' },
              { num: '24h', label: '快速发货' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#d4a5a5] mb-2">{stat.num}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[#fffbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800">联系我们</h2>
            <p className="text-gray-500 mt-2">期待与你相遇</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-2xl mb-3">📧</div>
                <div className="font-medium text-gray-800">邮箱</div>
                <div className="text-gray-500 text-sm mt-1">service@haoya.com</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-2xl mb-3">📱</div>
                <div className="font-medium text-gray-800">微信</div>
                <div className="text-gray-500 text-sm mt-1">haoya_official</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-2xl mb-3">🌐</div>
                <div className="font-medium text-gray-800">官网</div>
                <div className="text-gray-500 text-sm mt-1">haoya.com</div>
              </div>
            </div>
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
