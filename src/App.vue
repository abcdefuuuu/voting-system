<template>
  <div id="app">
    <!-- 顯示導航鏈接的條件：用戶必須已經登入 -->
    <nav v-if="isAuthenticated">
      <router-link to="/admin">後台管理</router-link>
      <router-link to="/voting">投票頁面</router-link>
      <button @click="handleLogout">登出</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['logout']),
    async handleLogout() {
      await this.logout(); // 調用 Vuex action 進行登出
      this.$router.push('/login'); // 登出後跳轉到登入頁面
    }
  }
};
</script>

<style>
nav {
  padding: 10px;
  background-color: #f5f5f5;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}
button {
  margin-left: 10px;
}
</style>
