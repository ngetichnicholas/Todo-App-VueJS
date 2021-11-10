<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Tasks To Do</h4>
      <div
        class="list-group-item"
        v-for="todo in todos"
        v-if="todo.complete === 'No'"
        v-bind:key="todo.id"
      >
        <h4 class="text-info">{{ todo.title }}</h4>
        <div>
          <p>{{ todo.note }}</p>
        </div>
        <h4 class="text-success">Details</h4>
        <div>
          <label><strong>Date Created:</strong></label>
          {{ todo.date_created | formatDate }}
        </div>
        <div>
          <label><strong>Date Due:</strong></label>
          {{ todo.date_due | formatDate }}
        </div>
        <div>
          <label><strong>Category:</strong></label> {{ todo.category }}
        </div>
        <a class="text-primary" :href="'/todos/' + todo.id">
          <button class="btn btn-success">Update</button>
        </a>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Completed Tasks</h4>
      <div
        class="list-group-item"
        v-for="todo in todos"
        v-if="todo.complete === 'Yes'"
        v-bind:key="todo.id"
      >
        <h4 class="text-info">{{ todo.title }}</h4>
        <div>
          <p>{{ todo.note }}</p>
        </div>
        <h4 class="text-success">Details</h4>
        <div>
          <label><strong>Date Created:</strong></label>
          {{ todo.date_created | formatDate }}
        </div>
        <div>
          <label><strong>Date Due:</strong></label>
          {{ todo.date_due | formatDate }}
        </div>
        <div>
          <label><strong>Category:</strong></label> {{ todo.category }}
        </div>
        <a class="text-primary" :href="'/todos/' + todo.id">
          <button class="btn btn-success">Update</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TodoDataService from "../services/TodoDataService";

export default {
  name: "todos-list",
  data() {
    return {
      todos: [],
      currentTodo: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTodos() {
      TodoDataService.getAll()
        .then((response) => {
          this.todos = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTodos();
      this.currentTodo = null;
      this.currentIndex = -1;
    },

    setActiveTodo(todo, index) {
      this.currentTodo = todo;
      this.currentIndex = index;
    },

    deleteTodo() {
      TodoDataService.delete(this.currentTodo.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "todos" });
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      TodoDataService.findByTitle(this.title)
        .then((response) => {
          this.todos = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTodos();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>