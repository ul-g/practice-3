<template>
    <v-container>
      <h1 class="page-title">{{ $t('addMovieTitle') }}</h1>
      <v-form @submit.prevent="addMovie">
        <v-text-field
          :label="$t('enterMovieTitle')"
          v-model="newMovie"
          outlined
          color="primary"
          class="input-field"
        />
        <v-btn type="submit" color="primary" class="submit-btn">{{ $t('addMovie') }}</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'AddMovie',
    data() {
      return {
        newMovie: '',
      };
    },
    methods: {
      addMovie() {
        if (this.newMovie.trim()) {
          const movie = {
            id: Date.now(),
            title: this.newMovie,
          };
          this.$store.dispatch('addMovie', movie);
          this.$router.push({ name: 'Home' });
        }
      },
    },
  };
  </script>
  