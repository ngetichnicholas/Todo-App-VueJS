<template>
  <div v-if="currentTodo">
    <h3 class="text-center text-success">Update Task</h3>

    <hr />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
            <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTodo.title"
        />
      </div>
      <div class="form-group">
        <label for="note">Note</label>
        <textarea
          type="text"
          class="form-control"
          id="note"
          v-model="currentTodo.note"
        ></textarea>
      </div>
      <div class="field">
        <label class="label" for="">Date Due</label>
        <div class="form-group">
          <input
            class="form-control"
            v-model="currentTodo.date_due"
            type="date"
          />
        </div>
      </div>

      <div class="field">
        <label class="label" for="">Completed</label>
        <div class="form-group">
          <select
            class="form-control"
            v-model="currentTodo.complete"
            name=""
            id=""
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label" for="">Category</label>
        <div class="form-group">
          <select
            class="form-control"
            v-model="currentTodo.category"
            name=""
            id=""
          >
            <option value="General">General</option>
            <option value="Learning">Learning</option>
            <option value="Body Exercise">Body Exercise</option>
            <option value="Chores">Chores</option>
          </select>
        </div>
      </div>
    </form>
        <button
      style="margin-top: 1rem;margin-right:1rem"
      type="submit"
      class="btn btn-success"
      @click="updateTodo"
    >
      Update
    </button>
        <button style="margin-top: 1rem"
       class="btn btn-danger"
      @click="deleteTodo"
    >
      Delete
    </button>
    <p>{{ message }}</p>
      </div>
      <div class="col-md-3"></div>
    </div>

  </div>
</template>

<script>
import TodoDataService from "../services/TodoDataService";

export default {
  name: "todo",
  data() {
    return {
      currentTodo: null,
      message: "",
    };
  },
  methods: {
    getTodo(id) {
      TodoDataService.get(id)
        .then((response) => {
          this.currentTodo = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentTodo.id,
        title: this.currentTodo.title,
        description: this.currentTodo.description,
        published: status,
      };

      TodoDataService.update(this.currentTodo.id, data)
        .then((response) => {
          this.currentTodo.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTodo() {
      TodoDataService.update(this.currentTodo.id, this.currentTodo)
        .then((response) => {
          console.log(response.data);
          this.message = "The todo was updated successfully!";
          this.$router.push({ name: "todos" });
        })
        .catch((e) => {
          console.log(e);
        });
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
  },
  mounted() {
    this.message = "";
    this.getTodo(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
