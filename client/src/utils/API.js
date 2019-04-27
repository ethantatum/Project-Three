import axios from "axios";

export default {
  //=============== API calls for classes ==================//
  // Gets all classes
  getClasses: function() {
    return axios.get("/api/class");
  },
  createClass: function(userID, classData) {
    return axios.post("/api/class/" + userID, classData);
  },
  //=============== API calls for teachers ==================//
  // Gets classes within teacher
  getTeacherClasses: function(teacherID) {
    return axios.get("/api/user/classes/" + teacherID);
  },
  //=============== API call to get complete user information ==================//
  getUserData: function(userID) {
    return axios.get("/api/user/" + userID);
  },
  // Adds profile completion data to user db
  updateUser: function(id, userData) {
    return axios.post(`/api/user/${id}`, userData);
  },
  //=============== API calls for students ==================//

  // Gets all student
  getStudents: () => {
    return axios.get("/api/student");
  },
  // Gets the student with the given id
  getStudent: function(id) {
    return axios.get("/api/student/" + id);
  },
  //=============== API calls for messages ================//

  // Gets all messages for given student

};
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }

  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },