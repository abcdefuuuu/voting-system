<template>
    <div id="app">
        <nav>
            <router-link to="/admin">後台管理</router-link>
            <router-link to="/vote">投票頁面</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>
