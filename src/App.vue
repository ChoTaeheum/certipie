<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand" href="#">CertiPie</a>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item me-1">
          <router-link class="nav-link" to="/notice">자격증 공고</router-link>
        </li>
        <li class="nav-item me-1">
          <router-link class="nav-link" to="/bulletin-board">
            합격공부 비법
          </router-link>
        </li>
        <li class="nav-item me-1">
          <a class="nav-link" href="#">MY 자격증</a>
        </li>
      </ul>
    </div>
    <div>
      <button class="btn btn-primary me-2">로그인</button>
      <button class="btn btn-outline-secondary">회원가입</button>
    </div>
  </nav>
  <div class="row pb-4"></div>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
