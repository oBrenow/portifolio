     // Configuração do ScrollReveal
        ScrollReveal({ reset: true });
        
        // Animação do cabeçalho
        ScrollReveal().reveal('header', { 
            delay: 200,
            duration: 1000,
            origin: 'top',
            distance: '50px'
        });
        
        // Animação do topo do site
        ScrollReveal().reveal('.txt-topo', { 
            delay: 300,
            duration: 1000,
            origin: 'left',
            distance: '50px'
        });
        
        ScrollReveal().reveal('.img-topo', { 
            delay: 400,
            duration: 1000,
            origin: 'right',
            distance: '50px'
        });
        
        // Animação das especialidades
        ScrollReveal().reveal('.titulo', { 
            delay: 200,
            duration: 800,
            origin: 'top',
            distance: '30px'
        });
        
        ScrollReveal().reveal('.especialidades-box', { 
            delay: 300,
            duration: 1000,
            interval: 200,
            origin: 'bottom',
            distance: '50px'
        });
        
        // Animação da seção sobre
        ScrollReveal().reveal('.txt-sobre', { 
            delay: 300,
            duration: 1000,
            origin: 'left',
            distance: '50px'
        });
        
        ScrollReveal().reveal('.txt-icone', { 
            delay: 400,
            duration: 1000,
            origin: 'right',
            distance: '50px'
        });
        
        // Animação dos projetos
        ScrollReveal().reveal('.img-port', { 
            delay: 300,
            duration: 1000,
            interval: 200,
            origin: 'bottom',
            distance: '50px'
        });
