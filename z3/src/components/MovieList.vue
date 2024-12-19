<template>
  <v-container>
    <v-row>
      <v-col
        v-for="movie in movies"
        :key="movie.id"
        cols="12" sm="6" md="4"
      >
        <MovieCard :movie="movie" @add-favorite="handleAddToFavorites">
          <template #title>
            <h3 style="color: #1976d2;">{{ movie.title }} ({{ movie.year }})</h3>
          </template>
          
          <template #description>
            <p>{{ movie.description.slice(0, 100) }}...</p>
          </template>
          
          <template #actions>
            <v-btn color="success" @click="share(movie)">Share</v-btn>
            <v-btn color="primary" @click="handleAddToFavorites(movie)">Favorite</v-btn>
          </template>
        </MovieCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  components: { MovieCard },
  data() {
    return {
      movies: [
        { id: 1, title: 'Inception', genre: 'Sci-Fi', description: 'A thief who steals corporate secrets...', year: 2010, poster: 'https://path/to/poster1.jpg' },
        { id: 2, title: 'The Matrix', genre: 'Action', description: 'When a beautiful stranger leads...', year: 1999, poster: 'https://path/to/poster2.jpg' }
      ]
    };
  },
  methods: {
    handleAddToFavorites(movie) {
      console.log(`${movie.title} добавлен в избранное`);
    },
    share(movie) {
      console.log(`Поделиться фильмом: ${movie.title}`);
    }
  }
};
</script>

<style scoped>
</style>
