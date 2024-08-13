<template>
    <div>
        <h1>投票頁面</h1>
        <form @submit.prevent="submitVotes">
            <div v-for="item in votingItems" :key="item.id">
                <input type="checkbox" :value="item.id" v-model="selectedItems" />
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
        fetchVotingItems() {
            // // 假設從API獲取投票項目
            // fetch('/api/voting-items')
            //     .then(response => response.json())
            //     .then(data => {
            //         this.votingItems = data;
            //     });
        },
        submitVotes() {
            const votes = {
                items: this.selectedItems,
            };
            // 假設使用 POST 請求來提交投票
            fetch('/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(votes),
            }).then(() => {
                this.fetchVotingItems(); // 更新顯示票數
                this.selectedItems = [];
            });
        },
    },
    mounted() {
        this.fetchVotingItems();
    },
};
</script>
