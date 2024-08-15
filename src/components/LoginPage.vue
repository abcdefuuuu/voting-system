<template>
  <div class="login" v-if="!isAuthenticated">
    <h2>登入</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">帳號:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">密碼:</label>
        <input type="password" v-model="password" id="password" required/>
      </div>
      <button type="submit">登入</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import users from '../data/users.js'; // 引入假資料
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      username: 'tsong', // 預設帳號
      password: '12345', // 預設密碼
      errorMessage: '',
    };
  },
  computed: {
    ...mapState(['isAuthenticated']),
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      const user = users.find(
          (user) => user.username === this.username && user.password === this.password
      );

      if (user) {
        this.$store.dispatch('login'); // 調用 Vuex action 進行登入
        this.$router.push('/voting'); // 登入成功後跳轉到投票頁面
      } else {
        this.errorMessage = '帳號或密碼錯誤';
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.error {
  color: red;
}
</style>
