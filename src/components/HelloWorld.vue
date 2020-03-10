<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <p class="subtitle">TBD: what that is goes here.</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
