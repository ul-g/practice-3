import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';  // Используем новое имя компонента
import AddMovie from '../views/AddMovie.vue';
import MovieDetails from '../views/MovieDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,  // Обновлено имя компонента
  },
  {
    path: '/add-movie',
    name: 'AddMovie',
    component: AddMovie,
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
