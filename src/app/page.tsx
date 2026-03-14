'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const defaultProducts = [
  {
    id: 1,
    name: '玫瑰精华面霜',
    nameEn: 'Rose Essence Cream',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    category: '护肤',
    rating: 4.9,
    reviews: 128,
    badge: '热销'
  },
  {
    id: 2,
    name: '珍珠美白面膜',
    nameEn: 'Pearl Whitening Mask',
    price: 189,
    originalPrice: 259,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=400&h=400&fit=crop',
    category: '面膜',
    rating: 4.8,
    reviews: 96,
    badge: '新品'
  },
  {
    id: 3,
    name: '樱花润唇膏',
    nameEn: 'Cherry Blossom Lip Balm',
    price: 79,
    originalPrice: 99,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    category: '彩妆',
    rating: 4.7,
    reviews: 234,
    badge: ''
  },
  {
    id: 4,
    name: '玻尿酸精华液',
    nameEn: 'Hyaluronic Acid Serum',
    price: 359,
    originalPrice: 459,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=400&h=400&fit=crop',
    category: '护肤',
    rating: 4.9,
    reviews: 187,
    badge: '推荐'
  },
  {
    id: 5,
    name: '薰衣草卸妆水',
    nameEn: 'Lavender Makeup Remover',
    price: 129,
    originalPrice: 169,
    image: 'https://images.unsplash.com/photo-1556228720-1987df1c52b7?w=400&h=400&fit=crop',
    category: '清洁',
    rating: 4.6,
    reviews: 156,
    badge: ''
  },
  {
    id: 6,
    name: '金盏花爽肤水',
    nameEn: 'Calendula Toner',
    price: 199,
    originalPrice: 259,
    image: 'https://images.unsplash.com/photo-1601049541289-9b3b7d5d7427?w=400&h=400&fit=crop',
    category: '护肤',
    rating: 4.8,
    reviews: 203,
    badge: '热销'
  }
];

const categories = [
  { name: '美妆护肤', icon: '💄', count: 156 },
  { name: '家居生活', icon: '🏠', count: 230 },
  { name: '时尚配饰', icon: '👜', count: 89 },
  { name: '健康食品', icon: '🥗', count: 124 },
  { name: '数码配件', icon: '📱', count: 67 },
  { name: '母婴用品', icon: '👶', count: 95 }
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-serif font-bold text-[#d4a5a5]">
                好呀 HAOYA
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-[#d4a5a5] transition">首页</Link>
                <Link href="#products" className="text-gray-600 hover:text-[#d4a5a5] transition">产品</Link>
                <Link href="#categories" className="text-gray-600 hover:text-[#d4a5a5] transition">分类</Link>
                <Link href="/about" className="text-gray-600 hover:text-[#d4a5a5] transition">关于</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-[#d4a5a5] transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-[#d4a5a5] transition relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 cart-badge text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="text-gray-600 hover:text-[#d4a5a5] transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <span className="text-[#c9a962] text-sm font-medium tracking-wider">NEW COLLECTION 2026</span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mt-4 mb-6 leading-tight">
                好呀，让<br />
                <span className="text-[#d4a5a5]">每一天都美好</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                精选全球好物，涵盖美妆护肤、家居生活、时尚配饰等多品类。
                每一件商品都经过用心挑选，只为遇见更好的你。
              </p>
              <div className="flex space-x-4">
                <Link href="#products" className="btn-primary px-8 py-3 rounded-full font-medium">
                  立即探索
                </Link>
                <Link href="#about" className="btn-outline px-8 py-3 rounded-full font-medium">
                  了解更多
                </Link>
              </div>
              <div className="flex items-center space-x-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-gray-800">50K+</div>
                  <div className="text-gray-500 text-sm">满意客户</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">98%</div>
                  <div className="text-gray-500 text-sm">好评率</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">100%</div>
                  <div className="text-gray-500 text-sm">正品保证</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4a5a5]/20 to-transparent rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=600&h=700&fit=crop" 
                alt="Beauty products"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800">产品分类</h2>
            <p className="text-gray-500 mt-2">探索完整的美妆世界</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index}
                href="#" 
                className="group text-center p-6 rounded-xl hover:bg-[#fff5f2] transition"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <div className="font-medium text-gray-800 group-hover:text-[#d4a5a5] transition">{category.name}</div>
                <div className="text-sm text-gray-400">{category.count} 件商品</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-[#fffbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-800">热销产品</h2>
              <p className="text-gray-500 mt-2">精选人气好物</p>
            </div>
            <Link href="#" className="text-[#d4a5a5] hover:text-[#b88686] font-medium transition">
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-[#d4a5a5] text-white text-xs px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <button 
                    onClick={addToCart}
                    className="absolute bottom-4 right-4 bg-white text-[#d4a5a5] p-3 rounded-full shadow-lg hover:bg-[#d4a5a5] hover:text-white transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-1">{product.category}</div>
                  <h3 className="font-serif text-lg font-bold text-gray-800">{product.name}</h3>
                  <div className="text-sm text-gray-400 italic">{product.nameEn}</div>
                  <div className="flex items-center mt-3 mb-4">
                    <div className="flex text-[#c9a962]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">{product.rating} ({product.reviews}条评价)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-[#d4a5a5]">¥{product.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">¥{product.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🌿', title: '天然成分', desc: '精选全球天然植物精华' },
              { icon: '🔬', title: '科学配方', desc: '专业实验室研发测试' },
              { icon: '🚚', title: '快速配送', desc: '48 小时内发货' },
              { icon: '💝', title: '售后无忧', desc: '30 天无理由退换' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">订阅我们的通讯</h2>
          <p className="text-gray-600 mb-8">获取最新产品资讯和专属优惠</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="输入您的邮箱"
              className="flex-1 px-6 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:border-[#d4a5a5]"
            />
            <button className="btn-primary px-8 py-3 rounded-r-full font-medium">
              订阅
            </button>
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
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">护肤</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">彩妆</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">面膜</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">清洁</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">客户服务</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">联系我们</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">配送说明</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">退换政策</Link></li>
                <li><Link href="#" className="hover:text-[#d4a5a5] transition">常见问题</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[#d4a5a5] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#d4a5a5] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#d4a5a5] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </Link>
              </div>
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
