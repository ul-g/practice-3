<template>
  <v-app>
    <v-container>
      <LanguageSwitcher />
    </v-container>

    <router-view />
  </v-app>
</template>

<script>
import LanguageSwitcher from './components/LanguageSwitcher.vue';

export default {
  components: {
    LanguageSwitcher,
  },
};
</script>

<style>

</style>
