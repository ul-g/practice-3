<template>
    <v-btn-toggle v-model="language" class="language-switcher" dense>
      <v-btn @click="setLanguage('en')" :class="{ active: language === 'en' }">EN</v-btn>
      <v-btn @click="setLanguage('ru')" :class="{ active: language === 'ru' }">RU</v-btn>
    </v-btn-toggle>
  </template>
  
  <script>
  export default {
    data() {
      return {
        language: this.$i18n.locale,
      };
    },
    methods: {
      setLanguage(lang) {
        this.language = lang;
        this.$i18n.locale = lang;
      },
    },
  };
  </script>
  
  <style scoped>
  .language-switcher {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  
  .language-switcher .v-btn {
    color: #555;
    background-color: #e0e0e0;
    border-radius: 5px;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }
  
  .language-switcher .v-btn:hover {
    background-color: #c0c0c0;
  }
  
  .language-switcher .v-btn.active {
    background-color: #1976d2;
    color: #ffffff;
  }
  </style>
  