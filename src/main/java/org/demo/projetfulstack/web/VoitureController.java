package org.demo.projetfulstack.web;

import org.demo.projetfulstack.modele.Proprietaire;
import org.demo.projetfulstack.modele.Voiture;
import org.demo.projetfulstack.repository.ProprietaireRepo;
import org.demo.projetfulstack.repository.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/voitures")
@CrossOrigin(origins = "http://localhost:3000")
public class VoitureController {

    @Autowired
    private VoitureRepo voitureRepo;

    @Autowired
    private ProprietaireRepo proprietaireRepo;

    // Retrieve all Voitures
    @GetMapping
    public Iterable<Voiture> getAllVoitures() {
        return voitureRepo.findAll();
    }

    @PostMapping
    public ResponseEntity<String> addVoiture(@RequestBody Voiture voiture) {
        if (voiture.getProprietaire() == null || voiture.getProprietaire().getId() == null) {
            return ResponseEntity.badRequest().body("Proprietaire ID is required.");
        }

        Long proprietaireId = voiture.getProprietaire().getId();
        if (!proprietaireRepo.existsById(proprietaireId)) {
            return ResponseEntity.badRequest().body("Proprietaire not found.");
        }

        Proprietaire proprietaire = proprietaireRepo.findById(proprietaireId).get();
        voiture.setProprietaire(proprietaire);
        voitureRepo.save(voiture);

        return ResponseEntity.ok("Voiture added successfully.");
    }
    @GetMapping("/{id}")
    public ResponseEntity<Voiture> getVoitureById(@PathVariable Long id) {
        Optional<Voiture> voiture = voitureRepo.findById(id);

        if (voiture.isPresent()) {
            return ResponseEntity.ok(voiture.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<Voiture> updateVoiture(@PathVariable Long id, @RequestBody Voiture updatedVoiture) {
        if (!voitureRepo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        updatedVoiture.setId(id);
        voitureRepo.save(updatedVoiture);
        return ResponseEntity.ok(updatedVoiture);
    }

    @DeleteMapping("{id}")
    public void deleteVoiture(@PathVariable Long id) {
        voitureRepo.deleteById(id);
    }
}