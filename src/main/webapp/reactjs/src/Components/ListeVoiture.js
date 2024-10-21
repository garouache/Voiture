import React from "react";
import { Table, Container } from "react-bootstrap";

function ListeVoiture({ voitures }) {
  return (
    <Container className="mt-4">
      <h2>Liste des Voitures</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Marque</th>
            <th>Modèle</th>
            <th>Couleur</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map((voiture, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{voiture.marque}</td>
              <td>{voiture.modele}</td>
              <td>{voiture.couleur}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListeVoiture;
