package org.demo.projetfulstack.repository;

import org.demo.projetfulstack.modele.Proprietaire;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProprietaireRepo extends CrudRepository<Proprietaire, Long> {
}