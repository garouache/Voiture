package org.demo.projetfulstack.modele;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@RequiredArgsConstructor
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Voiture {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @NonNull
    private String marque;
    @NonNull
    private String modele;
    @NonNull
    private String couleur;
    @NonNull
    private String immatricule;
    @NonNull
    private int annee;
    @NonNull
    private int prix;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "proprietaire_id", nullable = false)

    private Proprietaire proprietaire;

    public Voiture(String marque, String modele, String couleur, String immatricule, int annee, int prix, Proprietaire proprietaire) {
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.immatricule = immatricule;
        this.annee = annee;
        this.prix = prix;
        this.proprietaire = proprietaire;
    }

    public Voiture(String miolaCar, String uber, String blanche, String s, int i) {
    }

    public Voiture(String miniCooper, String uber, String rouge, String immatricule, int annee, int prix, int i) {
    }
}