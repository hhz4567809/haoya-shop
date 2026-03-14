'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const defaultProducts = [
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
    badge: '热销',
    stock: 156,
    description: '富含玫瑰精华，深层滋养肌肤'
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
    badge: '新品',
    stock: 89,
    description: '珍珠提取物，温和美白'
  },
  {
    id: 3,
    name: '北欧香薰蜡烛',
    nameEn: 'Nordic Scented Candle',
    price: 89,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1602166556198-96e823c77fbf?w=400&h=400&fit=crop',
    category: '家居生活',
    rating: 4.7,
    reviews: 234,
    badge: '热销',
    stock: 280,
    description: '天然大豆蜡，持久留香'
  },
  {
    id: 4,
    name: '轻奢手表',
    nameEn: 'Minimalist Watch',
    price: 599,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
    category: '时尚配饰',
    rating: 4.9,
    reviews: 203,
    badge: '推荐',
    stock: 45,
    description: '简约设计，瑞士机芯'
  },
  {
    id: 5,
    name: '有机蜂蜜',
    nameEn: 'Organic Honey',
    price: 129,
    originalPrice: 169,
    image: 'https://images.unsplash.com/photo-1587049352846-4a24214d81ee?w=400&h=400&fit=crop',
    category: '健康食品',
    rating: 4.7,
    reviews: 145,
    badge: '',
    stock: 320,
    description: '纯天然无添加'
  },
  {
    id: 6,
    name: '无线蓝牙耳机',
    nameEn: 'Wireless Earbuds',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    category: '数码配件',
    rating: 4.6,
    reviews: 278,
    badge: '新品',
    stock: 156,
    description: '长续航，降噪通话'
  }
];

export default function AdminDashboard() {
  const [products, setProducts] = useState(defaultProducts);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('全部');
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      router.push('/admin/login');
      return;
    }

    // 从 localStorage 加载产品数据
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    router.push('/admin/login');
  };

  const handleDelete = (id: number) => {
    if (confirm('确定要删除这个产品吗？')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      localStorage.setItem('products', JSON.stringify(updated));
    }
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const handleSave = (productData: any) => {
    if (editingProduct) {
      // 编辑现有产品
      const updated = products.map(p => 
        p.id === editingProduct.id ? { ...productData, id: editingProduct.id } : p
      );
      setProducts(updated);
      localStorage.setItem('products', JSON.stringify(updated));
    } else {
      // 添加新产品
      const newId = Math.max(...products.map(p => p.id), 0) + 1;
      const newProduct = { ...productData, id: newId, rating: 5.0, reviews: 0 };
      const updated = [...products, newProduct];
      setProducts(updated);
      localStorage.setItem('products', JSON.stringify(updated));
    }
    setShowModal(false);
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === '全部' || p.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['全部', ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#d4a5a5]">好呀 HAOYA</h1>
              <p className="text-sm text-gray-500">后台管理系统</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" target="_blank" className="text-gray-600 hover:text-[#d4a5a5] transition">
                查看网站 →
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-500 transition"
              >
                退出登录
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-[#d4a5a5]">{products.length}</div>
            <div className="text-gray-500 text-sm">产品总数</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-[#c9a962]">
              {products.filter(p => p.badge).length}
            </div>
            <div className="text-gray-500 text-sm">推荐产品</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-500">
              {products.reduce((sum, p) => sum + p.stock, 0)}
            </div>
            <div className="text-gray-500 text-sm">库存总量</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-500">
              {products.reduce((sum, p) => sum + p.reviews, 0)}
            </div>
            <div className="text-gray-500 text-sm">累计评价</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="搜索产品..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
              />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <button
              onClick={handleAddNew}
              className="btn-primary px-6 py-2 rounded-lg font-medium"
            >
              + 添加产品
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  产品
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  分类
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  价格
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  库存
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  标签
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.nameEn}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-[#d4a5a5]">¥{product.price}</div>
                    <div className="text-xs text-gray-400 line-through">¥{product.originalPrice}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{product.stock}</td>
                  <td className="px-6 py-4">
                    {product.badge && (
                      <span className="px-2 py-1 text-xs rounded-full bg-[#d4a5a5] text-white">
                        {product.badge}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-[#d4a5a5] hover:text-[#b88686] mr-3"
                    >
                      编辑
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      删除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <ProductModal
          product={editingProduct}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

function ProductModal({ product, onClose, onSave }: any) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    nameEn: product?.nameEn || '',
    price: product?.price || 0,
    originalPrice: product?.originalPrice || 0,
    image: product?.image || '',
    category: product?.category || '护肤',
    badge: product?.badge || '',
    stock: product?.stock || 0,
    description: product?.description || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
          {product ? '编辑产品' : '添加产品'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">产品名称</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">英文名称</label>
              <input
                type="text"
                value={formData.nameEn}
                onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">图片 URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
              placeholder="https://..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
              >
                <option value="美妆护肤">美妆护肤</option>
                <option value="家居生活">家居生活</option>
                <option value="时尚配饰">时尚配饰</option>
                <option value="健康食品">健康食品</option>
                <option value="数码配件">数码配件</option>
                <option value="母婴用品">母婴用品</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">标签</label>
              <input
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                placeholder="热销/新品/推荐"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">现价</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">原价</label>
              <input
                type="number"
                value={formData.originalPrice}
                onChange={(e) => setFormData({ ...formData, originalPrice: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">库存</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">产品描述</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a5a5]"
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              取消
            </button>
            <button
              type="submit"
              className="btn-primary px-6 py-2 rounded-lg font-medium"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
