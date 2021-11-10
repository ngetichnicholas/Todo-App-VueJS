 <template>
 <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class="home">
    <h1 class="title has-text-centered has-text-link">My Tasks</h1>

    <hr />
    <div class="columns">
      <div class="column is-1"></div>
      <div class="column is-10">
        <div class="columns">
                <div class="column is-4">
        <form action="" v-on:submit.prevent="addTodo">
          <h2 class="subtitle has-text-info">Add task</h2>

          <div class="field">
            <label class="label" for="">Title</label>
            <div class="control">
              <input v-model="title" type="text" class="input" />
            </div>
          </div>

          <div class="field">
            <label for="" class="label">Note</label>
            <div class="control">
              <textarea v-model="note" name="" id="" class="control"></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label" for="">Date Due</label>
            <div class="control">
              <input v-model="date_due" type="date" class="input" />
            </div>
          </div>

          <div class="field">
            <label class="label" for="">Completed</label>
            <div class="control">
              <div class="select">
                <select v-model="complete" name="" id="">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label" for="">Category</label>
            <div class="control">
              <div class="select">
                <select v-model="category" name="" id="">
                  <option value="General">General</option>
                  <option value="Learning">Learning</option>
                  <option value="Body Exercise">Body Exercise</option>
                  <option value="Chores">Chores</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
          </div>

        </form>
      </div>
      <div class="column is-4">
        <h2 class="subtitle has-text-info">Tasks To Do</h2>

        <div class="todo">
          <div class="card" v-for="todo in todos" v-if="todo.complete === 'No'" v-bind:key="todo.id">
            <div class="card-content">
              <h2 class="subtitle has-text-success">{{todo.title}}</h2>
              <p>{{todo.note}}</p>
            </div>

          </div>
        </div>

      </div>
      <div class="column is-4">
        <h2 class="subtitle has-text-info">Tasks Completed</h2>

        <div class="todo">
          <div class="card" v-for="todo in todos" v-if="todo.complete === 'Yes'" v-bind:key="todo.id">
            <div class="card-content">
              <h2 class="subtitle has-text-primary">{{todo.title}}</h2>
              <p>{{todo.note}}</p>
            </div>

          </div>
        </div>
      </div>
        </div>
        
      </div>
      <div class="column is-1"></div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "Home",
  data() {
    return {
      todos: [],
      title: '',
      note: '',
      date_due: new Date(),
      complete: 'No',
      category: 'General'

    };
  },
  mounted () {
    this.getTodos()
  }, 
  methods: {
    getTodos() {
      axios({
        method: 'get',
        url: 'https://nicholas-to-to-django-api.herokuapp.com/api/todo_list',

      }).then(response => this.todos = response.data)
    },
    addTodo() {
      if (this.title) {
        axios({
          method: 'post',
          url: 'https://nicholas-to-to-django-api.herokuapp.com/api/add_todo',
          data: {
            title: this.title,
            note: this.note,
            date_due: this.date_due,
            complete: this.complete,
            category: this.category
          }
        }).then((response) => {
          let newTodo = {
            'id': response.data.id,
            'title': this.title,
            'note': this.note,
            'date_due': this.date_due,
            'complete': this.complete,
            'category': this.category
          }

          this.todos.push(newTodo)

          this.title = ''
          this.note = ''
          this.date_due = new Date()
          this.complete = 'No'
          this.category = 'General'

        }).catch((error) => {
          console.log(error)
        })

      }
    }
  }
};
</script>

<style lang="scss">
.select, select {
  width: 100%;
}
.card {
  margin-bottom: 20px;
}

</style
