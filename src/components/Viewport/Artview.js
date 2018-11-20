import React, { Component } from "react";
import "../../sass/_artview.scss";

//// IMPORT GALLERY IMAGE URLS ////

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => {
    images.push(r(item));
  });
  return images;
}

const images = importAll(
  require.context("../../static/artview-photos", false, /\.(png|jpe?g|svg)$/)
);

//// MODAL ////

// function GalleryModal(props) {
//   if (props.isOpen === false) {
//     return null;
//   }
//   return (
//     <div
//       isOpen={props.isOpen}
//       className="modal-overlay"
//       onClick={props.onClick}
//       name={props.name}
//     >
//       <div className="modal-body">
//         <a className="modal-close" href="#" onClick={props.onClick}>
//           <span className="modal-icon--close" />
//         </a>
//         <img src={props.src} alt={props} />
//       </div>
//     </div>
//   );
// }

//// ARTVIEW COMPONENT ////

export default class ArtView extends Component {
  state = {
    showModal: false,
    url: ""
  };

  // Function for opening modal
  // openModal = (url, e) => {
  //   this.setState({
  //     showModal: true,
  //     url: url
  //   });
  // };

  // Function for closing modal
  // closeModal = () => {
  //   this.setState({
  //     showModal: false,
  //     url: ""
  //   });
  // };

  renderImage = (url, index) => {
    return (
      <div className={"artview-gallery__card card--" + index}>
        <img
          className="artview-gallery__thumbnail"
          src={url}
          alt={"Image number " + (index + 1)}
        />
        {/* <span
          className="artview-gallery__card-icon-open"
          value={url}
          onClick={e => this.openModal(url, e)}
        /> */}
      </div>
    );
  };

  render() {
    return (
      <section className="artview artview-gallery__container">
        {images.map((url, index) => this.renderImage(url, index))}

        {/* <GalleryModal
          isOpen={this.state.showModal}
          onClick={this.closeModal}
          src={this.state.url}
          alt={"Image modal"}
        /> */}
      </section>
    );
  }
}
