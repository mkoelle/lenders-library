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
        <div class="box" v-for="resource in resources" :key="resource.name">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128">
                <img :src="resource.image" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong :content="resource.name" />
                  <br />
                  {{ resource.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Footer footer footer
            <br />
            <a href="#">Terms of service</a> |
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
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
export default class App extends Vue {
  data() {
    return {
      resources: [
        {
          name: "Item 1",
          image: "./img/placeholder.png",
          description:
            "Ut enim ad minim veniam Mandibuzz Braviary Pidgeotto Azelf Bronzong Vine Whip. Glitch City Rotom Machop Carvanha Koffing Koffing Relicanth Quagsire. Marsh Badge Croconaw Corphish Audino Hitmonchan Mew Pikachu. Charmeleon ex ea commodo Silcoon Magnemite I like shorts Seaking Minccino. V for victory Cacturne Badge Arcanine Sealeo Houndour Phanpy."
        },
        {
          name: "Item 2",
          image: "./img/placeholder.png",
          description:
            "Hive Badge Dusknoir Venomoth Nuzleaf Dragon Rage Hive Badge Harden. Lorem ipsum dolor sit amet Keldeo Rage Unown Shiftry you're not wearing shorts Virizion. Yellow Goldeen Grass Floatzel Kanto Camerupt Graveler. Flying Dewott Gliscor Lilligant Brock Misdreavus Pidgeotto. Water Gun Rotom Litwick Donphan Wurmple Nincada Noctowl."
        }
      ]
    };
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
