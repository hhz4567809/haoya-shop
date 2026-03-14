'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const allProducts = [
  // 美妆护肤
  {
    id: 1,
    name: '玫瑰精华面霜',
    nameEn: 'Rose Essence Cream',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    category: '美妆护肤',
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
    category: '美妆护肤',
    rating: 4.8,
    reviews: 96,
    badge: '新品'
  },
  {
    id: 3,
    name: '玻尿酸精华液',
    nameEn: 'Hyaluronic Acid Serum',
    price: 359,
    originalPrice: 459,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=400&h=400&fit=crop',
    category: '美妆护肤',
    rating: 4.9,
    reviews: 187,
    badge: '推荐'
  },
  // 家居生活
  {
    id: 4,
    name: '北欧香薰蜡烛',
    nameEn: 'Nordic Scented Candle',
    price: 89,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1602166556198-96e823c77fbf?w=400&h=400&fit=crop',
    category: '家居生活',
    rating: 4.7,
    reviews: 234,
    badge: '热销'
  },
  {
    id: 5,
    name: '纯棉四件套',
    nameEn: 'Pure Cotton Bedding Set',
    price: 399,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1522771753035-4a50423a5a63?w=400&h=400&fit=crop',
    category: '家居生活',
    rating: 4.8,
    reviews: 156,
    badge: ''
  },
  {
    id: 6,
    name: '日式陶瓷餐具套装',
    nameEn: 'Japanese Ceramic Tableware',
    price: 259,
    originalPrice: 359,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop',
    category: '家居生活',
    rating: 4.6,
    reviews: 89,
    badge: '新品'
  },
  // 时尚配饰
  {
    id: 7,
    name: '轻奢手表',
    nameEn: 'Minimalist Watch',
    price: 599,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
    category: '时尚配饰',
    rating: 4.9,
    reviews: 203,
    badge: '推荐'
  },
  {
    id: 8,
    name: '真皮手提包',
    nameEn: 'Leather Handbag',
    price: 799,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
    category: '时尚配饰',
    rating: 4.8,
    reviews: 167,
    badge: '热销'
  },
  // 健康食品
  {
    id: 9,
    name: '有机蜂蜜',
    nameEn: 'Organic Honey',
    price: 129,
    originalPrice: 169,
    image: 'https://images.unsplash.com/photo-1587049352846-4a24214d81ee?w=400&h=400&fit=crop',
    category: '健康食品',
    rating: 4.7,
    reviews: 145,
    badge: ''
  },
  {
    id: 10,
    name: '坚果礼盒',
    nameEn: 'Mixed Nuts Gift Box',
    price: 199,
    originalPrice: 269,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop',
    category: '健康食品',
    rating: 4.8,
    reviews: 312,
    badge: '热销'
  },
  // 数码配件
  {
    id: 11,
    name: '无线蓝牙耳机',
    nameEn: 'Wireless Earbuds',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    category: '数码配件',
    rating: 4.6,
    reviews: 278,
    badge: '新品'
  },
  {
    id: 12,
    name: '便携充电宝',
    nameEn: 'Portable Power Bank',
    price: 159,
    originalPrice: 229,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
    category: '数码配件',
    rating: 4.7,
    reviews: 189,
    badge: ''
  }
];

const categories = ['全部', '美妆护肤', '家居生活', '时尚配饰', '健康食品', '数码配件', '母婴用品'];

export default function Products() {
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [sortBy, setSortBy] = useState('default');
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = products
    .filter(p => selectedCategory === '全部' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#fffbf9]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-serif font-bold text-[#d4a5a5]">
              好呀 HAOYA
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-[#d4a5a5] transition">首页</Link>
              <Link href="/products" className="text-[#d4a5a5] font-medium">产品</Link>
              <Link href="/about" className="text-gray-600 hover:text-[#d4a5a5] transition">关于</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">全部产品</h1>
          <p className="text-gray-500">探索{products.length}款精选好物</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-[#d4a5a5] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
            >
              <option value="default">默认排序</option>
              <option value="price-asc">价格从低到高</option>
              <option value="price-desc">价格从高到低</option>
              <option value="rating">评分优先</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#d4a5a5] text-white text-xs px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute bottom-3 right-3 bg-white text-[#d4a5a5] p-2 rounded-full shadow-lg hover:bg-[#d4a5a5] hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-400 mb-1">{product.category}</div>
                  <h3 className="font-medium text-gray-800 truncate">{product.name}</h3>
                  <div className="text-xs text-gray-400 italic truncate">{product.nameEn}</div>
                  <div className="flex items-center mt-2 mb-3">
                    <div className="flex text-[#c9a962]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-[#d4a5a5]">¥{product.price}</span>
                    <span className="text-xs text-gray-400 line-through ml-2">¥{product.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500">该分类暂无商品</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-serif font-bold text-[#d4a5a5] mb-4">好呀 HAOYA</div>
            <p className="text-gray-400 text-sm">&copy; 2026 好呀 HAOYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
