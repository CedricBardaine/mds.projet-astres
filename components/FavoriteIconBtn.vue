<template>
  <div>
    <v-row no-gutters style="display: contents">
      <v-icon
        class="ma-4 mr-4 linkHover"
        @click="
          /* Fires a notification */
          $store.state.favorites.includes(astralBodyId)
            ? ''
            : (snackbarModel = true);

          /* Modify favorites list */
          $store.commit('favorites/toggle', astralBodyId);
        "
        :color="$store.state.favorites.includes(astralBodyId) ? 'yellow' : ''"
        >mdi-star</v-icon
      >
    </v-row>
    <v-snackbar v-model="snackbarModel" right elevation="0" text color="yellow">
      Ajouté aux favoris 💫
    </v-snackbar>
  </div>
</template>

<script>
/**
 * Displays a star icon button allowing to add or remove an astral body from the favorites.
 * When a favorite is added, a notification is fired.
 */
export default {
  name: 'FavoriteIconBtn',
  props: {
    astralBodyId: String,
  },
  data() {
    return {
      snackbarModel: false,
    };
  },
};
</script>