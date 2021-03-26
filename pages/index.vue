<template>
  <v-container fluid>
    <v-row id="filters" justify="center">
      {{ theFilterValue }}
      <v-autocomplete
        v-model="theFilterModel"
        :search-input.sync="theFilterValue"
        :items="allLuminariesNames"
        outlined
        label="Nom"
        @blur="theFilterModel = theFilterValue.toString()"
      />
    </v-row>

    <v-row no-gutters justify="center">
      <v-card
        class="mx-2 my-4 pa-2"
        v-for="aLuminary in filteredLuminaries"
        :key="aLuminary.id"
        style="min-width: 250px; max-width: 500px"
      >
        <v-row id="luminary-header" class="mx-0" no-gutters>
          <v-row no-gutters>
            <v-card-title primary-title>
              {{ aLuminary.name }}
            </v-card-title>
          </v-row>
          <v-row no-gutters justify="end" class="mr-4">
            <v-icon :color="aLuminary.isPlanet == true ? 'green' : 'grey'"
              >mdi-earth</v-icon
            >
          </v-row>
        </v-row>

        <v-row id="luminary-founded" v-if="aLuminary.discoveredBy" no-gutters>
          <small style="max-width: 250px">
            Découverte par
            <b>
              {{ aLuminary.discoveredBy }}
            </b>
          </small>
        </v-row>

        <v-row id="" class="mx-2" no-gutters>
          <v-btn
            v-for="aMoon in aLuminary.moons"
            :key="aMoon.moon"
            text
            color="light-green"
          >
            {{ aMoon.moon }}
          </v-btn>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      /**
       * TODO: ajouter d'autres valeurs à mettre dans détails. 
     * @type {{
        id: String, 
        name: String, 
        isPlanet: boolean, 
        moons: Array|null, 
        discoveredBy: String, 
        rel: String,
        }}
     */
      luminaries: [],
      theFilterModel: "",
      theFilterValue: "",
    };
  },
  computed: {
    allLuminariesNames() {
      let ret = []; 
      this.luminaries.forEach((element)=> ret.push(element.name));
      return ret ; 
    },
    filteredLuminaries() {

      return this.theFilterValue ? this.luminaries.filter((element)=> element.name.toLowerCase().includes(this.theFilterValue.toLowerCase()) ) : this.luminaries;
    }
  },
  mounted() {
    this.$content("local_api_data")
      .fetch()
      .then((rep) => {
        let ret = "";
        rep.bodies.forEach((astralBody) => {
          ret += astralBody.id + " | ";
          this.luminaries.push({
            id: astralBody.id,
            name: astralBody.name,
            isPlanet: astralBody.isPlanet,
            moons: astralBody.moons,
            discoveredBy: astralBody.discoveredBy,
            rel: astralBody.rel,
          });
        });
        console.log(ret);
      });
  },
};
</script>

<style>
.noLink {
  text-decoration: inherit !important;
  color: inherit !important;
}
</style>