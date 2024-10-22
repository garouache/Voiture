import React from "react";
import { Card } from "react-bootstrap";
import "./Assets/Css/Bienvenue.css";
import Logo from "./Assets/logolocationvoiture.png";
function Bienvenue() {
  return (
    <Card className=" text-black">
      <Card.Body>
        <div class="parentbienvenue">
          <div class="div1bienvenue">
            <h1>Bienvenue au Magasin des Voitures</h1>
            <blockquote className="blockquote mb-0">
              <p>Le meilleur de nos voitures est exposé près de chez vous.</p>
              <footer className="blockquote-footer textfooter">
                ANASS EL HABTI
              </footer>
            </blockquote>
          </div>
          <div class="div2bienvenue">
            <img
              src={Logo}
              width="350"
              height="350"
              alt="logo"
              className="logobienvenue"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Bienvenue;
