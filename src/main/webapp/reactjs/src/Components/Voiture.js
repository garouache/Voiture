import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";

export default class Voiture extends Component {
  state = { marque: "", modele: "", couleur: "" };

  voitureChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitVoiture = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/api/voitures", this.state).then(() => {
      this.props.history.push("/list");
    });
  };

  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>Ajouter Voiture</Card.Header>
        <Form onSubmit={this.submitVoiture} id="VoitureFormId">
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridMarque">
                <Form.Label>Marque</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  name="marque"
                  type="text"
                  value={this.state.marque}
                  onChange={this.voitureChange}
                  className="bg-dark text-white"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridModele">
                <Form.Label>Modèle</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  name="modele"
                  type="text"
                  value={this.state.modele}
                  onChange={this.voitureChange}
                  className="bg-dark text-white"
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridCouleur">
              <Form.Label>Couleur</Form.Label>
              <Form.Control
                required
                autoComplete="off"
                name="couleur"
                type="text"
                value={this.state.couleur}
                onChange={this.voitureChange}
                className="bg-dark text-white"
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
