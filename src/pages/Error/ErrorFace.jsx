import React from "react";
import "./Error.css";

function ErrorFace() {
  return (
    <div className="error-img">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <rect width="22" height="22" x="1" y="1" className="a" rx="7.656"></rect>
        <path
            d="M23 13.938a14.69 14.69 0 01-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 008.656 23h6.688A7.656 7.656 0 0023 15.344z"
            className="b"
        ></path>
        <ellipse
            cx="12"
            cy="13.375"
            className="c"
            rx="5.479"
            ry="0.297"
        ></ellipse>
        <path
            d="M7.817 9.059l.839-.838a.429.429 0 000-.6L8.5 7.458a.427.427 0 00-.6 0l-.845.842-.839-.839a.429.429 0 00-.6 0l-.158.159a.427.427 0 000 .6l.839.838-.843.842a.427.427 0 000 .6l.158.158a.427.427 0 00.6 0l.839-.838.839.838a.426.426 0 00.6 0l.159-.158a.429.429 0 000-.6zM17.719 9.059l.839-.838a.427.427 0 000-.6l-.158-.163a.427.427 0 00-.6 0l-.839.839-.839-.839a.427.427 0 00-.6 0l-.159.159a.427.427 0 000 .6l.839.838-.839.839a.427.427 0 000 .6l.159.158a.426.426 0 00.6 0l.839-.838.839.838a.426.426 0 00.6 0l.159-.158a.427.427 0 000-.6z"
            className="c"
        ></path>
        <path
            d="M13.333 13.663V15.6a1.5 1.5 0 001.5 1.5H15a1.5 1.5 0 001.5-1.5v-2.06c-.746.06-1.863.105-3.167.123z"
            className="d"
        ></path>
        </svg>
    </div>
  );
}

export default ErrorFace;