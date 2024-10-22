package org.demo.projetfulstack.web;

import org.demo.projetfulstack.modele.Proprietaire;
import org.demo.projetfulstack.repository.ProprietaireRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/proprietaires")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class ProprietaireController {
    @Autowired
    private ProprietaireRepo proprietaireRepo;

    @GetMapping
    public Iterable<Proprietaire> getAllProprietaires() {
        return proprietaireRepo.findAll();
    }

    @PostMapping
    public ResponseEntity<String> addProprietaire(@RequestBody Proprietaire proprietaire) {
        proprietaireRepo.save(proprietaire);
        return ResponseEntity.ok("Propriétaire added successfully.");
    }


    @PutMapping("/{id}")
    public ResponseEntity<Proprietaire> updateProprietaire(@PathVariable Long id, @RequestBody Proprietaire updatedProprietaire) {
        if (!proprietaireRepo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        updatedProprietaire.setId(id);
        proprietaireRepo.save(updatedProprietaire);
        return ResponseEntity.ok(updatedProprietaire);
    }
}
