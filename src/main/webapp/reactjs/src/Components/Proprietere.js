import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

class Proprietere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
    };
  }

  // Handle changes in input fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Submit form data to the backend
  handleSubmit = (event) => {
    event.preventDefault();

    const proprietaireData = {
      nom: this.state.nom,
      prenom: this.state.prenom,
    };

    axios
      .post("http://localhost:8080/api/proprietaires", proprietaireData)
      .then(() => {
        window.location.href = "/listprop"; // Redirect after successful addition
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du propriétaire :", error);
      });
  };

  render() {
    return (
      <Card className="mt-5">
        <Card.Header>Ajouter Propriétaire</Card.Header>
        <Form onSubmit={this.handleSubmit} className="p-3">
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrer le nom"
                  name="nom"
                  value={this.state.nom}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formPrenom">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrer le prénom"
                  name="prenom"
                  value={this.state.prenom}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Ajouter Propriétaire
          </Button>
        </Form>
      </Card>
    );
  }
}

export default Proprietere;
