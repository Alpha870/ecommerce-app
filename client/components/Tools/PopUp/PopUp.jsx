import React from "react";
import "./PopUp.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const Popup = ({ title, body, button }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{body}</Popover.Body>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger trigger="focus" placement="top" overlay={popover}>
        <Button className="boton-pop">{button}</Button>
      </OverlayTrigger>
    </>
  );
};

export default Popup;
