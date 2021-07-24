<template>
  <div class="container">
    <header>
      <nav>
        <div>
          <h3>exhala</h3>
          <h5>An interactive <i>najasa</i> removal walkthrough</h5>
        </div>
        <div class="page-navigation">
          <router-link to="/">Home</router-link>
          <router-link to="/resources">Resources</router-link>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
main {
  height: 400px;
}
nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  border-bottom: 1px solid lightgray;
  background: steelblue;
  color: whitesmoke;
}
h3 {
  font-size: 32px;
}
h3,
h5 {
  padding: 4px;
  margin: unset;
  text-align: left;
}
.page-navigation {
  display: flex;
  justify-content: space-between;
  margin-right: 25px;
}
nav a {
  margin-right: 10px;
  line-height: 50px;
  text-decoration: none;
  color: whitesmoke;
}
</style>
