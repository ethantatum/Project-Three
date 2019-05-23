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
  // Gets all student in a class
  getStudentsInClass: (classID) => {
    return axios.get("/api/class/students/" + classID);
  },
  // Gets all student in a all classes
  getStudentsInAllClasses: (userID) => {
    return axios.get("/api/user/allstudents/" + userID);
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
  // Gets all students
  getstudents: function() {
    return axios.get("/api/student");
  },

  // Gets the student with the given id
  getStudent: function(id) {
    return axios.get("/api/student/" + id);
  },

  createStudent: function(id, newStudent) {
    return axios.post("/api/student/" + id, newStudent);
  },

  getBehavior: function(id) {
    return axios.get(`/api/student/behavior/${id}`);
  },

  addBehavior: function(id, newBehavior) {
    return axios.put(`/api/student/behavior/${id}`, newBehavior);
  },

  getComments: function(id) {
    return axios.get(`/api/student/comments/${id}`);
  },

  addComment: function(id, newComment) {
    return axios.put(`/api/student/comments/${id}`, newComment);
  },

  addReport: function(id, report) {
    return axios.put(`/api/student/report/${id}`, report);
  }
};