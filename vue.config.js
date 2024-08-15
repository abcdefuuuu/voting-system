const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 設定開發伺服器的端口
  devServer: {
    port: 8081, // 強制 Vue 開發伺服器使用 8080 端口
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
