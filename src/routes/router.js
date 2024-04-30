import { createRouter, createWebHistory } from 'vue-router'
import ContentAreaHomeSimple from '@/components/base/content-areas/ContentAreaHomeSimple.vue';
import ContentAreaProductsList from '@/components/base/content-areas/ContentAreaProductsList.vue';
import ContentAreaContact from '@/components/base/content-areas/ContentAreaContact.vue';
import ContentAreaFeedbacks from '@/components/base/content-areas/ContentAreaFeedbacks.vue';

const routes = [
    { path: '/', component: ContentAreaHomeSimple },
    { path: '/produits', component: ContentAreaProductsList },
    { path: '/contact', component: ContentAreaContact },
    { path: '/avis', component: ContentAreaFeedbacks }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router