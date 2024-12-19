<template>
    <v-card class="movie-card">
      <v-img :src="movie.poster" height="300px"></v-img>
      
      <v-card-title>
        <slot name="title">{{ movie.title }}</slot>
      </v-card-title>
      
      <v-card-subtitle>
        <slot name="subtitle">{{ movie.genre }}</slot>
      </v-card-subtitle>
      
      <v-card-text>
        <slot name="description">{{ movie.description }}</slot>
      </v-card-text>
      
      <v-card-actions>
        <slot name="actions">
          <v-btn color="primary" @click="addToFavorites">Add to Favorites</v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      movie: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToFavorites() {
        // Логика для добавления в избранное
        this.$emit('add-favorite', this.movie);
      }
    }
  };
  </script>
  
  <style scoped>
  .movie-card {
    max-width: 300px;
    margin: 20px;
  }
  </style>
  