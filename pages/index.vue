<template>
  <v-container fluid>
    <v-row id="filters" justify="center" class="px-1">
      <!-- May replace  search-input.sync  by  v-model  for performance issues. -->
      <v-combobox
        class="mx-4"
        style="max-width: 250px"
        :search-input.sync="filterByName"
        :items="allLuminariesNames"
        clearable
      />
      <v-row no-gutters align="center" class="mx-4">
        Type :
        <v-btn
          text
          class="pa-0"
          :color="filterByType != 'none' ? 'primary' : ''"
          @click="changeTypeFilter()"
        >
          {{ filterByType }}
        </v-btn>
      </v-row>
    </v-row>

    <v-row no-gutters justify="center">
      <v-card
        class="mx-2 my-4 pa-2"
        v-for="aLuminary in filteredLuminaries"
        :key="aLuminary.id"
        :style="
          $vuetify.breakpoint.name == 'xs'
            ? 'min-width: 150px;'
            : 'min-width: 250px; max-width: 500px'
        "
      >
        <v-row id="luminary-header" class="mx-0" no-gutters>
          <v-row no-gutters>
            <v-card-title
              primary-title
              class="linkHover"
              @click="$router.push({ name: 'details', params: aLuminary })"
            >
              {{ aLuminary.name }}
            </v-card-title>
          </v-row>
          <v-row no-gutters justify="end" class="mr-4">
            <v-icon :color="aLuminary.isPlanet == true ? 'primary' : 'grey'"
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
            color="secondary"
            @click="filterByMoonName(aMoon.moon)"
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

      filterByName: "",
      /**
       * @type {"planet" | "other" | "none"}
       */
      filterByType: "none",
    };
  },
  computed: {
    allLuminariesNames() {
      let ret = [];
      this.luminaries.forEach((element) => ret.push(element.name));
      return ret;
    },
    filteredLuminaries() {
      let ret = this.luminaries.slice();

      if (this.filterByName)
        ret = ret.filter((element) =>
          element.name.toLowerCase().includes(this.filterByName.toLowerCase())
        );

      if (this.filterByType == "planet")
        ret = ret.filter((element) => element.isPlanet);
      else if (this.filterByType == "other")
        ret = ret.filter((element) => element.isPlanet === false);

      return ret;
    },
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
