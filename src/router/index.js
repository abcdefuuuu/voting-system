import { createRouter, createWebHistory } from 'vue-router';
import AdminPanel from '../components/AdminPanel.vue';
import VotingPage from '../components/VotingPage.vue';

const routes = [
    {
        path: '/admin',
        name: 'AdminPanel',
        component: AdminPanel,
    },
    {
        path: '/vote',
        name: 'VotingPage',
        component: VotingPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
