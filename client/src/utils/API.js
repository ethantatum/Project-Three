import axios from "axios";

export default {
  // Gets all student
  getStudents: () => {
    return axios.get("/api/students");
  },
  
  // Gets all classes
  getclasses: function() {
    return axios.get("/api/class");
  },
  // Gets the student with the given id
  getStudent: function(id) {
    return axios.get("/api/students/" + id);
  },

  // Adds profile completion data to user db
  updateUser: function(id, userData) {
    return axios.post(`/api/users/${id}`, userData);
  }
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
