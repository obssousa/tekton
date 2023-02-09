import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import router from './router';
import './assets/index.css';
import App from './App.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_KEY,
  bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
  use: [apiPlugin],
});

app.use(router);

app.component('Header', Header);
app.component('Footer', Footer);
app.component('Grid', Grid);
app.component('Page', Page);
app.component('Teaser', Teaser);
app.component('Feature', Feature);

app.mount('#app');
