<template>
  <div class="admin-panel">
    <h1>管理投票項目</h1>
    <ul>
      <li v-for="item in votingItems" :key="item.id">
        {{ item.title }}
        <button @click="deleteItem(item.id)">刪除</button>
      </li>
    </ul>
    <form @submit.prevent="addItem">
      <input v-model="newItemTitle" placeholder="新投票項目名稱" />
      <button type="submit">新增項目</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminPanel',
  data() {
    return {
      votingItems: [],  // 存放投票項目的假資料
      newItemTitle: '', // 新增投票項目的標題
    };
  },
  methods: {
    // 模擬從 API 獲取投票項目
    fetchVotingItems() {
      setTimeout(() => {
        this.votingItems = [
          { id: 1, title: '選項 A' },
          { id: 2, title: '選項 B' },
          { id: 3, title: '選項 C' },
        ];
      }, 1000); // 1秒延遲
    },
    // 模擬新增投票項目
    addItem() {
      if (this.newItemTitle.trim() === '') {
        alert('請輸入投票項目名稱');
        return;
      }

      const newItem = {
        id: this.votingItems.length + 1, // 模擬 ID
        title: this.newItemTitle,
      };

      setTimeout(() => {
        this.votingItems.push(newItem);
        this.newItemTitle = '';
      }, 1000); // 1秒延遲
    },

    // 模擬刪除投票項目
    deleteItem(id) {
      if (confirm('確定要刪除這個項目嗎?')) {
        setTimeout(() => {
          this.votingItems = this.votingItems.filter(item => item.id !== id);
        }, 1000); // 1秒延遲
      }
    },
  },
  mounted() {
    this.fetchVotingItems();
  },
};
</script>

<style scoped>
.admin-panel {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
}

input {
  margin-right: 10px;
}
</style>
