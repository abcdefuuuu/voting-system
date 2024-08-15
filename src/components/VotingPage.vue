<template>
    <div>
        <h1>投票頁面</h1>
        <form @submit.prevent="submitVotes">
            <div v-for="item in votingItems" :key="item.id">
                <input type="checkbox" :value="item.id" v-model="selectedItems" />
                {{ item.name }} - 目前票數: {{ item.voteCount }}
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
        async fetchVotingItems() {
            fetch("/api/voting/items-with-votes")
                .then(response => response.json())
                .then(data => {
                    this.votingItems = data;
                })
                .catch(error => console.error('Error:', error));
        },
        async submitVotes() {
            const votes = {
                voter: 'tsong',
                votingItemIds: this.selectedItems,
            };

            try {
                const response = await fetch('/api/voting/vote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(votes),
                });

                if (response.ok) {
                    await this.fetchVotingItems(); // 更新顯示票數
                    this.selectedItems = []; // 清空選擇項目
                } else {
                    console.error('Failed to submit votes');
                }
            } catch (error) {
                console.error('Error submitting votes:', error);
            }
        },
    },
    mounted() {
        this.fetchVotingItems();
    },
};
</script>
