import axios from "axios";

export default axios.create({
  baseURL: "https://nicholas-to-to-django-api.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});