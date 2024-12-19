<template>
    <v-container>
      <h1 class="page-title">{{ $t('movieList') }}</h1>
      <v-row>
        <v-col
          v-for="(movie, index) in movies"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="movie-card" @click="goToDetails(movie.id)">
            <v-img
              src="https://placeimg.com/640/480/movie"
              height="200px"
            ></v-img>
            <v-card-title class="movie-title">{{ movie.title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-btn color="primary" @click="goToAddMovie" class="add-movie-btn">{{ $t('addMovie') }}</v-btn>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    computed: {
      movies() {
        return this.$store.getters.allMovies;
      },
    },
    methods: {
      goToDetails(id) {
        this.$router.push({ name: 'MovieDetails', params: { id } });
      },
      goToAddMovie() {
        this.$router.push({ name: 'AddMovie' });
      },
    },
  };
  </script>
  
  <style scoped>
  .page-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #424242;
  }
  </style>
  