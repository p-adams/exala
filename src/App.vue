<template>
  <div class="container">
    <header>
      <nav>
        <div>
          <h3>exhala</h3>
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

<script setup></script>

<style lang="scss">
$primary-light: #4791db;
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
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 40px;
  border-bottom: 1px solid lightgray;
  background: $primary-light;
  color: whitesmoke;
}
nav div {
  display: flex;
  margin-top: auto;
}

p {
  color: rgba(0, 0, 0, 0.87);
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
