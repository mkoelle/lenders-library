<template>
  <div id="app">
    <div class="columns">
      <div class="column has-text-centered">
        <figure class="image container is-128x128">
          <img alt="Vue logo" src="./assets/logo.png" />
        </figure>
        <HelloWorld msg="Welcome to the Community Library!" />
      </div>
      <div class="column has-background-light">
        <div class="box">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128">
                <img src="./assets/placeholder.png" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Article Name 1</strong>
                  <br />Ut enim ad minim veniam Mandibuzz Braviary Pidgeotto
                  Azelf Bronzong Vine Whip. Glitch City Rotom Machop Carvanha
                  Koffing Koffing Relicanth Quagsire. Marsh Badge Croconaw
                  Corphish Audino Hitmonchan Mew Pikachu. Charmeleon ex ea
                  commodo Silcoon Magnemite I like shorts Seaking Minccino. V
                  for victory Cacturne Badge Arcanine Sealeo Houndour Phanpy.
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="box">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128">
                <img src="./assets/placeholder.png" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Article Name 2</strong>
                  <br />Hive Badge Dusknoir Venomoth Nuzleaf Dragon Rage Hive
                  Badge Harden. Lorem ipsum dolor sit amet Keldeo Rage Unown
                  Shiftry you're not wearing shorts Virizion. Yellow Goldeen
                  Grass Floatzel Kanto Camerupt Graveler. Flying Dewott Gliscor
                  Lilligant Brock Misdreavus Pidgeotto. Water Gun Rotom Litwick
                  Donphan Wurmple Nincada Noctowl.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
