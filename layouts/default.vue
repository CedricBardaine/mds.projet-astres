<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title>
        <NuxtLink to="/" class="noLink"> Astres.ced </NuxtLink>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
