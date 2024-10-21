import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function AddVoiture({ onAdd }) {
  const [voiture, setVoiture] = useState({
    marque: "",
    modele: "",
    couleur: "",
  });

  const handleChange = (e) => {
    setVoiture({ ...voiture, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(voiture);
    setVoiture({ marque: "", modele: "", couleur: "" });
  };

  return (
    <Container className="mt-4">
      <h2>Ajouter Voiture</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Marque</Form.Label>
          <Form.Control
            type="text"
            name="marque"
            value={voiture.marque}
            onChange={handleChange}
            placeholder="Entrer la marque"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Modèle</Form.Label>
          <Form.Control
            type="text"
            name="modele"
            value={voiture.modele}
            onChange={handleChange}
            placeholder="Entrer le modèle"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Couleur</Form.Label>
          <Form.Control
            type="text"
            name="couleur"
            value={voiture.couleur}
            onChange={handleChange}
            placeholder="Entrer la couleur"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
}

export default AddVoiture;
