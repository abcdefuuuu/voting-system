<template>
    <div class="hello">
        <h1>管理投票項目</h1>
        <ul>
            <li v-for="item in votingItems" :key="item.id">
                {{ item.name }}
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
        async fetchVotingItems() {
            try {
                const response = await fetch('/api/voting/items'); // 正確的API端點
                if (response.ok) {
                    this.votingItems = await response.json();
                } else {
                    console.error('Failed to fetch voting items');
                }
            } catch (error) {
                console.error('Error fetching voting items:', error);
            }
        },
        async addItem() {
            const newItem = {
                name: this.newItemTitle, // 使用 'name' 字段來匹配後端
            };

            try {
                const response = await fetch('/api/voting/items', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newItem),
                });

                if (response.ok) {
                    const data = await response.json();
                    this.votingItems.push(data); // 添加新項目到列表
                    this.newItemTitle = ''; // 清空輸入框
                } else {
                    console.error('Failed to add new voting item');
                }
            } catch (error) {
                console.error('Error adding new voting item:', error);
            }
        },
        async deleteItem(id) {
            try {
                const response = await fetch(`/api/voting/items/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    this.votingItems = this.votingItems.filter(item => item.id !== id); // 刪除項目
                } else {
                    console.error('Failed to delete voting item');
                }
            } catch (error) {
                console.error('Error deleting voting item:', error);
            }
        },
    },
    mounted() {
        this.fetchVotingItems(); // 組件掛載時獲取投票項目
    },
};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin: 10px 0;
}
button {
    margin-left: 10px;
}
</style>
