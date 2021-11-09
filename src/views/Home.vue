 <template>
  <div class="home">
    <h1 class="title has-text-centered">Todo List Vue Application</h1>

    <hr />
    <div class="columns">
      <div class="column is-3 is-offset-3">
        <form action="">
          <h2 class="subtitle">Add task</h2>

          <div class="field">
            <label class="label" for="">Title</label>
            <div class="control">
              <input type="text" class="input" />
            </div>
          </div>

          <div class="field">
            <label for="" class="label">Note</label>
            <div class="control">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label" for="">Date Due</label>
            <div class="control">
              <input type="date" class="input" />
            </div>
          </div>

          <div class="field">
            <label class="label" for="">Completed</label>
            <div class="control">
              <div class="select">
                <select name="" id="">
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
                <select name="" id="">
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
    </div>

    <div class="columns">
      <div class="column is-6">
        <h2 class="subtitle">To Do</h2>

        <div class="todo">
          <div class="card">
            <div class="card-content">Note</div>

            <footer class="card-footer">
              <a  class="card-footer-item">Complete</a>
            </footer>
          </div>
        </div>

      </div>
      <div class="column is-6">
        <h2 class="subtitle">Complete</h2>

        <div class="todo">
          <div class="card">
            <div class="card-content">Note</div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
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
