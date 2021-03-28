<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title>
        <NuxtLink to="/" class="noLink linkHover"> Astres.ced </NuxtLink>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
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

<style>
.noLink {
  text-decoration: inherit !important;
  color: inherit !important;
}

.linkHover:hover {
  color: #8bc34a !important;
  cursor: pointer;
}
</style>
