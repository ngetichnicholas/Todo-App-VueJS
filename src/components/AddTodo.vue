<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class="">
    <h3 class="text-center text-success">Add Task</h3>

    <hr />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form action="" v-on:submit.prevent="addTodo">

          <div class="field">
            <label class="label" for="">Title</label>
            <input id="title" v-model="title" v-on:keyup="validateTitle()" type="text" class="form-control" />
            <p id="hide" class="hide text-danger">Only Mr and Mrs allowed</p>
          </div>

          <div class="field">
            <label for="" class="label">Note</label>
            <textarea
              v-model="note"
              name=""
              id=""
              class="form-control"
            ></textarea>
          </div>

          <div class="field">
            <label class="label" for="">Date Due</label>
            <input class="form-control" v-model="date_due" type="date" />
          </div>

          <div class="field">
            <label class="label" for="">Completed</label>
            <div class="select">
              <select class="form-control" v-model="complete" name="" id="">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label class="label" for="">Category</label>
            <div class="select">
              <select v-model="category" class="form-control" name="" id="">
                <option value="General">General</option>
                <option value="Learning">Learning</option>
                <option value="Body Exercise">Body Exercise</option>
                <option value="Chores">Chores</option>
              </select>
            </div>
          </div>

          <div class="form-group" style="margin-top: 1rem;">
            <button class="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      todos: [],
      title: "",
      note: "",
      date_due: new Date(),
      complete: "No",
      category: "General",
    };
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    addTodo() {
      if (this.title) {
        axios({
          method: "post",
          url: "https://nicholas-to-to-django-api.herokuapp.com/api/add_todo",
          data: {
            title: this.title,
            note: this.note,
            date_due: this.date_due,
            complete: this.complete,
            category: this.category,
          },
        })
          .then((response) => {
            let newTodo = {
              id: response.data.id,
              title: this.title,
              note: this.note,
              date_due: this.date_due,
              complete: this.complete,
              category: this.category,
            };

            this.todos.push(newTodo);
            this.$router.push({ name: "todos" });

            this.title = "";
            this.note = "";
            this.date_due = new Date();
            this.complete = "No";
            this.category = "General";
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
     validateTitle: function() {
  var x = document.getElementById("title");
  if(x.value.toUpperCase() != "MR" && x.value.toUpperCase() != "MRS") {
      document.getElementById("hide").style.display = 'block';

  }
  }
  },
};
</script>
<style>
.hide {
  display: none;
}
</style>


