import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const MyAlert = ({ head, color, text, redirect }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      navigate(route);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <Alert variant={color} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{head}</Alert.Heading>
          {text}
        </Alert>
      )}
    </>
  );
};

export default MyAlert;
