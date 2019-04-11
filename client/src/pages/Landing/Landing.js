import React, { Component } from "react";
import LandingGreeting from "../../components/LandingGreeting";
import LandingImage from "../../components/LandingImage";
import InfoPanel from "../../components/InfoPanel";
import Footer from "../../components/Footer";
// import API from "../utils/API";

class Landing extends Component {
  state = {

  };

//   componentDidMount() {
//     this.loadBooks();
//   }

//   loadBooks = () => {
//     API.getBooks()
//       .then(res =>
//         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

  render() {
    return (
    <div>
        <div className="row">
          <LandingGreeting />
          <LandingImage />
        </div>
        <InfoPanel />
        <Footer />
    </div>
    );
  }
}

export default Landing;
