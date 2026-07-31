function mostrarTela(nome){
            const telas = document.querySelectorAll('section')
            telas.forEach(telas => {
                telas.style.display = 'none';
            });

            const telaEscolhida = document.getElementById('tela-'+ nome);
            telaEscolhida.style.display = "block";
        }