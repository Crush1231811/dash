// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 设置路径别名
      '@': path.resolve(__dirname, './src'),
    },
    // 导入时想要省略的扩展名列表
    extensions: ['.js', '.jsx', '.json']
  }
});