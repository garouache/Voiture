import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./Assets/Css/Voiture.css";

export default class Voiture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marque: "",
      modele: "",
      couleur: "",
      immatricule: "",
      prix: "",
      annee: "",
      proprietaire: {
        id: "", // L’utilisateur devra sélectionner ou entrer un ID
      },
    };
  }

  // Gestion du changement des champs
  voitureChange = (event) => {
    const { name, value } = event.target;
    if (name === "proprietaireId") {
      this.setState({ proprietaire: { id: value } }); // Mise à jour de l'ID du propriétaire
    } else {
      this.setState({ [name]: value });
    }
  };

  // Soumission du formulaire
  submitVoiture = (event) => {
    event.preventDefault();
    const voitureData = {
      ...this.state,
      prix: parseInt(this.state.prix), // Conversion en entier
      annee: parseInt(this.state.annee),
    };

    axios
      .post("http://localhost:8080/api/voitures", voitureData)
      .then(() => {
        window.location.href = "/list"; // Redirection vers la liste après succès
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de la voiture :", error);
      });
  };

  render() {
    return (
      <Card className="mt-5 addcar">
        <Card.Header>Ajouter Voiture</Card.Header>
        <Form onSubmit={this.submitVoiture} className="p-3">
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formGridMarque">
                <Form.Label>Marque</Form.Label>
                <Form.Control
                  name="marque"
                  type="text"
                  placeholder="Entrer la marque"
                  value={this.state.marque}
                  onChange={this.voitureChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGridModele">
                <Form.Label>Modèle</Form.Label>
                <Form.Control
                  name="modele"
                  type="text"
                  placeholder="Entrer le modèle"
                  value={this.state.modele}
                  onChange={this.voitureChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formGridCouleur">
                <Form.Label>Couleur</Form.Label>
                <Form.Control
                  name="couleur"
                  type="text"
                  placeholder="Entrer la couleur"
                  value={this.state.couleur}
                  onChange={this.voitureChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGridImmatricule">
                <Form.Label>Immatricule</Form.Label>
                <Form.Control
                  name="immatricule"
                  type="text"
                  placeholder="Entrer l'immatricule"
                  value={this.state.immatricule}
                  onChange={this.voitureChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formGridPrix">
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  name="prix"
                  type="number"
                  placeholder="Entrer le prix"
                  value={this.state.prix}
                  onChange={this.voitureChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGridAnnee">
                <Form.Label>Année</Form.Label>
                <Form.Control
                  name="annee"
                  type="number"
                  placeholder="Entrer l'année"
                  value={this.state.annee}
                  onChange={this.voitureChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formGridProprietaire">
            <Form.Label>ID du Propriétaire</Form.Label>
            <Form.Control
              name="proprietaireId"
              type="number"
              placeholder="Entrer l'ID du propriétaire"
              value={this.state.proprietaire.id}
              onChange={this.voitureChange}
            />
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100">
            Ajouter Voiture
          </Button>
        </Form>
      </Card>
    );
  }
}
