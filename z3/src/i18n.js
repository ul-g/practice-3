import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    home: 'Home',
    addMovie: 'Add Movie',
    movieDetails: 'Movie Details',
    movieList: 'Movie List',
    enterMovieTitle: 'Enter movie title',
    addMovieTitle: 'Add a new movie',
    back: 'Back',
    additionalInfo: 'Here is additional information about the movie.',
  },
  ru: {
    home: 'Главная',
    addMovie: 'Добавить фильм',
    movieDetails: 'Детали фильма',
    movieList: 'Список фильмов',
    enterMovieTitle: 'Введите название фильма',
    addMovieTitle: 'Добавьте новый фильм',
    back: 'Назад',
    additionalInfo: 'Здесь будет дополнительная информация о фильме.',
  },
};

const i18n = createI18n({
  locale: 'en', // язык по умолчанию
  fallbackLocale: 'en',
  messages,
});

export default i18n;
