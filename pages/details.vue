<template>
  <v-container>
    <v-row justify="center">
      <h1>
        {{ $route.params.name }}
      </h1>
    </v-row>
    <v-row v-if="$route.params.isPlanet" justify="center">
      <small>(planète)</small>
    <br>
    </v-row>
    <v-row justify="center">
      <small v-if="$route.params.discoveredBy">
        Découverte par {{ $route.params.discoveredBy }}
      </small>
      &nbsp;
      <small v-if="$route.params.discoveryDate">
        le {{ $route.params.discoveryDate }}
      </small>
    </v-row>
    <br />
    <br />
    <v-container>
      <v-row no-gutters>
        <v-row no-gutters justify="end" style="width: 45%"> Masse </v-row>
        <v-row no-gutters style="display: contents ; font-weight: bold ; color: #8bc34a">&nbsp;:&nbsp;</v-row>
        <v-row no-gutters justify="start" style="width: 45%">
          {{ $route.params.mass.massValue }}x10
          <sup> {{ $route.params.mass.massExponent + " " }} </sup>kg
        </v-row>
      </v-row>
      <br />

      <v-row no-gutters>
        <v-row no-gutters justify="end" style="width: 45%"> Volume </v-row>
        <v-row no-gutters style="display: contents ; font-weight: bold ; color: #8bc34a">&nbsp;:&nbsp;</v-row>
        <v-row no-gutters justify="start" style="width: 45%">
          {{ $route.params.vol.volValue }}x10
          <sup> {{ $route.params.vol.volExponent + " " }} </sup> km³
        </v-row>
      </v-row>
      <br />

      <v-row no-gutters>
        <v-row no-gutters justify="end" style="width: 45%"> Densité </v-row>
        <v-row no-gutters style="display: contents ; font-weight: bold ; color: #8bc34a">&nbsp;:&nbsp;</v-row>
        <v-row no-gutters justify="start" style="width: 45%">
          {{ $route.params.density }} g/cm³
        </v-row>
      </v-row>
      <br />

      <v-row no-gutters>
        <v-row no-gutters justify="end" style="width: 45%"> Gravité </v-row>
        <v-row no-gutters style="display: contents ; font-weight: bold ; color: #8bc34a">&nbsp;:&nbsp;</v-row>
        <v-row no-gutters justify="start" style="width: 45%">
          {{ $route.params.gravity }} m/s²
        </v-row>
      </v-row>
      <br />

      <v-row no-gutters>
        <v-row no-gutters justify="end" style="width: 45%"> Inclinaison </v-row>
        <v-row no-gutters style="display: contents ; font-weight: bold ; color: #8bc34a">&nbsp;:&nbsp;</v-row>
        <v-row no-gutters justify="start" style="width: 45%"
          >{{ $route.params.inclination }}°
        </v-row>
      </v-row>
      <br />

      <v-row no-gutters>
        <v-row no-gutters justify="end" style="width: 45%"> Rayon moyen </v-row>
        <v-row no-gutters style="display: contents ; font-weight: bold ; color: #8bc34a">&nbsp;:&nbsp;</v-row>
        <v-row no-gutters justify="start" style="width: 45%">
          {{ $route.params.meanRadius }} km
        </v-row>
      </v-row>
      <br />

      <v-row no-gutters>
        <v-row no-gutters justify="end" style="width: 45%">
          Rayon équatorial
        </v-row>
        <v-row no-gutters style="display: contents ; font-weight: bold ; color: #8bc34a">&nbsp;:&nbsp;</v-row>
        <v-row no-gutters justify="start" style="width: 45%">
          {{ $route.params.equaRadius }} km
        </v-row>
      </v-row>
      <br />

      <v-row no-gutters>
        <v-row no-gutters justify="end" style="width: 45%">
          Rayon polaire
        </v-row>
        <v-row no-gutters style="display: contents ; font-weight: bold ; color: #8bc34a">&nbsp;:&nbsp;</v-row>
        <v-row no-gutters justify="start" style="width: 45%">
          {{ $route.params.polarRadius }} km
        </v-row>
      </v-row>
      <br />

      <v-row no-gutters>
        <v-row no-gutters justify="end" style="width: 45%">
          Période de révolution
        </v-row>
        <v-row no-gutters style="display: contents ; font-weight: bold ; color: #8bc34a">&nbsp;:&nbsp;</v-row>
        <v-row no-gutters justify="start" style="width: 45%">
          {{ $route.params.sideralOrbit }} jours
        </v-row>
      </v-row>
      <br />

      <v-row no-gutters>
        <v-row no-gutters justify="end" style="width: 45%">
          Rotation complète
        </v-row>
        <v-row no-gutters style="display: contents ; font-weight: bold ; color: #8bc34a">&nbsp;:&nbsp;</v-row>
        <v-row no-gutters justify="start" style="width: 45%">
          {{ $route.params.sideralRotation }} h
        </v-row>
      </v-row>
      <br />
    </v-container>
  </v-container>
</template>

<script>
export default {
  mounted() {
    /*
    this.$route.params : {
        discoveredBy: "Asaph Hall"
        id: "deimos"
        isPlanet: false
        moons: null
        name: "Deïmos"
        rel: "https://api.le-systeme-solaire.net/rest/bodies/deimos"
    }
    */
    console.log(this.$route);
  },
};
</script>

<style>
</style>