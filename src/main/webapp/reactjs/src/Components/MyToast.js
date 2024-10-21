import React from "react";
import { Toast } from "react-bootstrap";

function MyToast({ show, message }) {
  return (
    <Toast
      show={show}
      style={{ position: "absolute", top: "20px", right: "20px" }}
    >
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default MyToast;
