<template>
  <v-container>
    
  </v-container>
</template>

<script>
export default {
  components: {},
  mounted() {
    this.$content('local_api_data').fetch().then((rep) => {
      let ret =""; 
      rep.bodies.forEach(astralBody => {
        ret += astralBody.id + " | "; 
      });
        console.log(ret);
    })  
},
};
</script>

<style>
.noLink {
  text-decoration: inherit !important;
  color: inherit !important;
}
</style>