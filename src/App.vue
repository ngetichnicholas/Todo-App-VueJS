<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-success">
      <router-link to="/todos" class="navbar-brand">Home</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/todos" class="nav-link">Tasks</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Task</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>