import React, { Component } from "react";
import { Card, Table, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default class VoitureListe extends Component {
  state = { voitures: [] };

  componentDidMount() {
    axios.get("http://localhost:8080/api/voitures").then((response) => {
      this.setState({ voitures: response.data });
    });
  }

  deleteVoiture = (voitureId) => {
    axios.delete(`http://localhost:8080/api/voitures/${voitureId}`).then(() => {
      this.setState({
        voitures: this.state.voitures.filter(
          (voiture) => voiture.id !== voitureId
        ),
      });
    });
  };

  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>Liste Voitures</Card.Header>
        <Card.Body>
          <Table bordered hover striped variant="dark">
            <thead>
              <tr>
                <th>Marque</th>
                <th>Modèle</th>
                <th>Couleur</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.voitures.length === 0 ? (
                <tr align="center">
                  <td colSpan="4">Aucune Voiture disponible</td>
                </tr>
              ) : (
                this.state.voitures.map((voiture) => (
                  <tr key={voiture.id}>
                    <td>{voiture.marque}</td>
                    <td>{voiture.modele}</td>
                    <td>{voiture.couleur}</td>
                    <td>
                      <ButtonGroup>
                        <Link
                          to={`edit/${voiture.id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          Edit
                        </Link>{" "}
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => this.deleteVoiture(voiture.id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}
