<template>
    <v-container>
      <h1 class="page-title">{{ $t('movieDetails') }}</h1>
      <v-card class="movie-details-card" v-if="movie">
        <v-img
          src="https://placeimg.com/640/480/movie"
          height="300px"
        ></v-img>
        <v-card-title class="movie-title">{{ movie.title }}</v-card-title>
        <v-card-text>
          <p>{{ $t('additionalInfo') }}</p>
          <v-btn color="primary" @click="goBack">{{ $t('back') }}</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    props: ['id'],
    computed: {
      movie() {
        return this.$store.state.movies.find(movie => movie.id === parseInt(this.$route.params.id));
      },
    },
    methods: {
      goBack() {
        this.$router.push({ name: 'Home' });
      },
    },
  };
  </script>
  