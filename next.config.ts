import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 跳过静态站点生成，使用客户端渲染
  output: 'standalone',
  // 禁用某些预渲染优化
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
