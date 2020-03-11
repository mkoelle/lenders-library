<template>
  <div>
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src="../assets/logo.png" width="28" height="28" />
            <p class="title is-3 nav-title">Library</p>
          </a>
          <div class="navbar-burger burger" @click="showNav = !showNav" data-target="topNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="topNav" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-start">
            <a class="navbar-item" href="#">Home</a>
            <a class="navbar-item" href="#">Tabs</a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-small">
                    <span class="icon">
                      <i class="fa fa-user-plus"></i>
                    </span>
                    <span>Register</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-small is-info is-outlined">
                    <span class="icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <span>Login</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar is-white is-hidden-mobile is-hidden-tablet-only">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-active" href="#">Popular</a>
            <a class="navbar-item" href="#">Recent</a>
            <a class="navbar-item" href="#">Rising</a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <input class="input" type="search" placeholder="Search library..." />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      showNav: false
    };
  }
});
</script>

<style scoped>
.title {
  padding-left: 10px;
}
</style>
