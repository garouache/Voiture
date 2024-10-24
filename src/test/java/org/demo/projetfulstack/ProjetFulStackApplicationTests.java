package org.demo.projetfulstack;

import static org.assertj.core.api.Assertions.assertThat;
import org.demo.projetfulstack.web.VoitureController;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class ProjetFulStackApplicationTests {
    @Autowired
    VoitureController voitureController;

    @Test
    void contextLoads() {
        assertThat((Object) voitureController).isNotNull();
    }
}