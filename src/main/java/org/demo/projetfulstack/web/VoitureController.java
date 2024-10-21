package org.demo.projetfulstack.web;


import org.demo.projetfulstack.modele.Voiture;
import org.demo.projetfulstack.repository.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/voitures")
public class VoitureController {
    @Autowired private VoitureRepo voitureRepo;

    @GetMapping
    public Iterable<Voiture> getAllVoitures() {
        return voitureRepo.findAll();
    }
}
