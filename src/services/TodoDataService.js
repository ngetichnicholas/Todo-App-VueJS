import http from "../http-common";

class TodoDataService {
  getAll() {
    return http.get("/todo_list");
  }

  get(id) {
    return http.get(`/todo_details/${id}`);
  }

  create(data) {
    return http.post("/add_todo", data);
  }

  update(id, data) {
    return http.put(`/update_todo/${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete_todo/${id}`);
  }

  deleteAll() {
    return http.delete(`/todos`);
  }

  findByTitle(title) {
    return http.get(`/todos?title=${title}`);
  }
}

export default new TodoDataService();