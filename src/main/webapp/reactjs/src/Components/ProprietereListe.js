import axios from "axios";
import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";

class ProprietereListe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proprietaires: [],
    };
  }

  componentDidMount() {
    this.fetchProprietaires();
  }

  // Fetch owners from the backend
  fetchProprietaires = () => {
    axios
      .get("http://localhost:8080/api/proprietaires")
      .then((response) => {
        this.setState({ proprietaires: response.data });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des propriétaires :",
          error
        );
      });
  };

  render() {
    return (
      <Card className="mt-5">
        <Card.Header>Liste des Propriétaires</Card.Header>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
            </tr>
          </thead>
          <tbody>
            {this.state.proprietaires.map((proprietaire) => (
              <tr key={proprietaire.id}>
                <td>{proprietaire.id}</td>
                <td>{proprietaire.nom}</td>
                <td>{proprietaire.prenom}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    );
  }
}

export default ProprietereListe;
