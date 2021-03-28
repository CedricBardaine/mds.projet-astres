<template>
  <v-container fluid>
    <!-- Filters div - - - - - - - - - - -->
    <v-row no-gutters id="filters" justify="start" align="center" class="pl-1">
      <!-- May replace  search-input.sync  by  v-model  for performance issues. -->
      <v-combobox
        style="max-width: 250px"
        :search-input.sync="filterByName"
        :items="allAstralBodiesNames"
        clearable
      />

      <div style="width: 24px" />

      <div no-gutters align="center">
        Type :
        <v-btn
          text
          class="pa-0"
          :color="filterByType != 'none' ? 'primary' : ''"
          @click="changeTypeFilter()"
        >
          {{ filterByType }}
        </v-btn>
      </div>

      <div style="width: 24px" />

      <v-checkbox label="Possède des lunes" v-model="filterHasMoons" />

      <div style="width: 24px" />

      <v-icon
        :color="filterFavorites ? 'primary' : ''"
        @click="filterFavorites = !filterFavorites"
        >mdi-star</v-icon
      >
    </v-row>
    <!-- - - - - - - - - - - Filters div -->

    <!-- The astralBodies list - - - - - - - - - - -->
    <v-row no-gutters justify="center">
      <v-card
        class="mx-2 my-4 pa-2"
        v-for="anAstralBody in filteredAstralBodies"
        :key="anAstralBody.id"
        :style="
          $vuetify.breakpoint.name == 'xs'
            ? 'min-width: 150px;'
            : 'min-width: 250px; max-width: 500px'
        "
      >
        <v-row id="astralBody-header" class="mx-0" no-gutters>
          <v-row no-gutters>
            <v-card-title
              primary-title
              class="linkHover"
              @click="$router.push({ name: 'details', params: anAstralBody })"
            >
              {{ anAstralBody.name }}
            </v-card-title>
          </v-row>
          <v-row no-gutters justify="end" class="mr-4">
            <v-icon :color="anAstralBody.isPlanet == true ? 'primary' : 'grey'"
              >mdi-earth</v-icon
            >
          </v-row>
        </v-row>

        <v-row v-if="anAstralBody.discoveredBy" no-gutters align="center">
          <v-row no-gutters>
            <small style="max-width: 250px">
              Découverte par
              <b>
                {{ anAstralBody.discoveredBy }}
              </b>
            </small>
          </v-row>

          <!-- The favorite star icon  &  the fired notification - - - - - - - - - - -->
          <v-row no-gutters style="display: contents">
            <v-icon
              class="ma-4 mr-4 linkHover"
              @click="
                /* Fires a notification */
                $store.state.favorites.includes(anAstralBody.id)
                  ? ''
                  : (snackbarModel = true);

                /* Modify favorites list */
                $store.commit('favorites/toggle', anAstralBody.id);
              "
              :color="
                $store.state.favorites.includes(anAstralBody.id) ? 'yellow' : ''
              "
              >mdi-star</v-icon
            >
          </v-row>
          <v-snackbar
            v-model="snackbarModel"
            right
            elevation="0"
            text
            color="yellow"
          >
            Ajouté aux favoris 💫
          </v-snackbar>
          <!-- - - - - - - - - - - The favorite star icon  &  the fired notification -->
        </v-row>

        <v-row id="" class="mx-2" no-gutters>
          <v-btn
            v-for="aMoon in anAstralBody.moons"
            :key="aMoon.moon"
            text
            color="secondary"
            @click="filterByMoonName(aMoon.moon)"
          >
            {{ aMoon.moon }}
          </v-btn>
        </v-row>
      </v-card>
    </v-row>
    <!-- - - - - - - - - - - The astralBodies list -->
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      /**
       * @type {{
           id: String, 
           name: String, 
           isPlanet: boolean, 
           moons: Array|null, 
           discoveredBy: String, 
           rel: String,

           AND_MORE
          }}
      */
      astralBodies: [],

      filterByName: "",
      /**
       * @type {"planet" | "other" | "none"}
       */
      filterByType: "none",
      filterHasMoons: false,
      filterFavorites: false,

      snackbarModel: false,
    };
  },
  computed: {
    /**
     * Used for the combobox.
     */
    allAstralBodiesNames() {
      let ret = [];
      this.astralBodies.forEach((element) => ret.push(element.name));
      return ret;
    },

    filteredAstralBodies() {
      let ret = this.astralBodies.slice();

      if (this.filterByName)
        ret = ret.filter((element) =>
          element.name.toLowerCase().includes(this.filterByName.toLowerCase())
        );

      if (this.filterByType == "planet")
        ret = ret.filter((element) => element.isPlanet);
      else if (this.filterByType == "other")
        ret = ret.filter((element) => element.isPlanet === false);

      if (this.filterHasMoons) ret = ret.filter((element) => element.moons);

      if (this.filterFavorites)
        ret = ret.filter((element) =>
          this.$store.state.favorites.includes(element.id)
        );

      return ret;
    },
  },
  mounted() {
    // Retrieves data not from a distant API but from the $content.
    this.$content("local_api_data")
      .fetch()
      .then((rep) => {
        let ret = "";
        rep.bodies.forEach((astralBody) => {
          ret += astralBody.id + " | ";
          this.astralBodies.push({
            id: astralBody.id,
            name: astralBody.name,
            isPlanet: astralBody.isPlanet,
            moons: astralBody.moons,
            discoveredBy: astralBody.discoveredBy,
            rel: astralBody.rel,

            // for details
            inclination: astralBody.inclination, // °
            mass: astralBody.mass, // mass: {massValue: 3.30114,  massExponent: 23}
            vol: astralBody.vol, // vol: {volValue: 6.083, volExponent: 10}
            density: astralBody.density, // g/cm³
            gravity: astralBody.gravity, // m/s²
            meanRadius: astralBody.meanRadius, // km
            equaRadius: astralBody.equaRadius, // km
            polarRadius: astralBody.polarRadius, //km
            sideralOrbit: astralBody.sideralOrbit, // days
            sideralRotation: astralBody.sideralRotation, // hrs
            discoveryDate: astralBody.discoveryDate, // dd/mm/yyyy
          });
        });
      });

    // If the page is called from details it has a route param with a moon name, we then filter it automatically.
    if (this.$route.params.moonName)
      this.$nextTick(() => this.filterByMoonName(this.$route.params.moonName));
  },
  methods: {
    changeTypeFilter() {
      switch (this.filterByType) {
        case "none":
          this.filterByType = "planet";
          break;
        case "planet":
          this.filterByType = "other";
          break;
        case "other":
          this.filterByType = "none";
          break;

        default:
          break;
      }
    },

    filterByMoonName(name) {
      this.filterByName = name;
      this.filterByType = "none";
    },
  },
};
</script>

<style>
/* Be careful to CSS scope */
.theme--dark.v-list {
  background: rgb(30 30 30 / 95%);
  color: #ffffff;
}
</style>
