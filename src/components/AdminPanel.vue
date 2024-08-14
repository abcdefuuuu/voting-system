<template>
    <div class="hello">
        <h1>管理投票項目</h1>
        <ul>
            <li v-for="item in votingItems" :key="item.id">
                {{ item.title }}
                <button @click="editItem(item.id)">編輯</button>
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
  name: 'HelloWorld',
  data() {
      return {
          votingItems: [],
          newItemTitle: '',
      };
  },
  methods: {
      fetchVotingItems() {
          // 假設從API獲取投票項目
          // fetch('/api/voting-items')
          //     .then(response => response.json())
          //     .then(data => {
          //         this.votingItems = data;
          //     });
      },
      addItem() {
          const newItem = {
              title: this.newItemTitle,
          };
          // 假設使用 POST 請求來新增項目
          fetch('/api/voting-items', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newItem),
          })
              .then(response => response.json())
              .then(data => {
                  this.votingItems.push(data);
                  this.newItemTitle = '';
              });
      },
      editItem(id) {
          // 假設跳轉到編輯頁面或使用模態框進行編輯
          alert(`編輯項目: ${id}`);
      },
      deleteItem(id) {
          // 假設使用 DELETE 請求刪除項目
          fetch(`/api/voting-items/${id}`, {
              method: 'DELETE',
          }).then(() => {
              this.votingItems = this.votingItems.filter(item => item.id !== id);
          });
      },
  },
  mounted() {
      this.fetchVotingItems();
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

