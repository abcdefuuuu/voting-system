<template>
  <div>
    <h1>投票頁面</h1>
    <form @submit.prevent="submitVotes">
      <div v-for="item in votingItems" :key="item.id">
        <input
            type="checkbox"
            :value="item.id"
            v-model="selectedItems"
        />
        {{ item.title }} - 目前票數: {{ item.votes }}
      </div>
      <button type="submit">提交投票</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      votingItems: [],
      selectedItems: [],
    };
  },
  methods: {
    // 模擬從 API 獲取投票項目
    fetchVotingItems() {
      // 使用 setTimeout 模擬延遲
      setTimeout(() => {
        this.votingItems = [
          { id: 1, title: '選項 A', votes: 10 },
          { id: 2, title: '選項 B', votes: 25 },
          { id: 3, title: '選項 C', votes: 5 },
        ];
      }, 1000); // 1秒延遲
    },
    // 模擬提交投票
    submitVotes() {
      // 假設提交投票到後端
      setTimeout(() => {
        // 更新假資料中的票數
        this.votingItems = this.votingItems.map(item => {
          if (this.selectedItems.includes(item.id)) {
            return { ...item, votes: item.votes + 1 };
          }
          return item;
        });

        // 清空選擇
        this.selectedItems = [];
      }, 1000); // 1秒延遲
    },
  },
  mounted() {
    this.fetchVotingItems();
  },
};
</script>

<style scoped>
/* 在這裡添加你的樣式 */
</style>
