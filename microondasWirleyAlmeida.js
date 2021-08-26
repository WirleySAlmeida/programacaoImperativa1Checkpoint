// Aula 09 - Programação Imperativa
// 1º Checkpoint de Programação Imperativa
// Autor: Wirley Almeida
// Turma 17 Full Time

console.log("\n\t\t\t\t\t\t\tESCOLHA A OPÇÃO \n 1 - Pipoca | 2 - Macarrão | 3 - Carne | 4 - Feijão | 5 - Brigadeiro ")

function microondas(opcao, segundos){ // Implementamos uma função microondas com 2 parâmetros

switch(opcao){ // acreditamos que o SWITCH é a melhor solução para escolher as opções da atividade

    case 1: // Dentro de cada caso foi utilizado IF / ELSE IF / ELSE para dividir entre "Prato pronto", "Tempo insuficiente", "comida queimou" e "kabumm"
    
        console.log('<<< PIPOCA SELECIONADA >>>')
        if((segundos >= 10) && (segundos < 20)){
            console.log("Prato Pronto, bom apetite")
        }

        else if(segundos < 10){
            console.log('Tempo insuficiente!')
        }

        else if(segundos >= 30){
            console.log('KABUMMM!')
        }
        else{
            if(segundos >= 20){
                console.log('Pipoca queimou')
            }
        }
        break;

    case 2:
        console.log('<<< MACARÃO SELECIONADA >>>')
        if((segundos >= 8) && (segundos < 16)){
            console.log("Prato Pronto, bom apetite!")
        }

        else if(segundos < 8){
            console.log('Tempo insuficiente!')}
        else if(segundos >= 24){
            console.log('KABUMMM!')
        }
        else{
            if(segundos >= 16){
                console.log('Macarrão queimou')
            }
        }
        break;

        case 3:
            console.log('<<< CARNE SELECIONADA >>>')
            if((segundos >= 15) && (segundos < 30)){
                console.log("Prato Pronto, bom apetite!")
            }

            else if(segundos < 15){
                console.log('Tempo insuficiente!')}

            else if(segundos >= 45){
                console.log('KABUMMM!')
            }

            else{
                if(segundos >= 30){
                    console.log('Carne queimou!')
                }
            }
            break;

        case 4:
            console.log('<<< FEIJÃO SELECIONADA >>>')
            if((segundos >= 12) && (segundos < 24)){
                console.log("Prato Pronto, bom apetite!")
            }

            else if(segundos < 12){
                console.log('Tempo insuficiente!')}

            else if(segundos >= 36){
            console.log('KABUMMM!')
             }
            else{
                if(segundos >= 24){
                    console.log('Feijão queimou!')
                }
            }
            break;

        case 5:
            console.log('<<< BRIGADEIRO SELECIONADA >>>')
            if((segundos >= 8) && (segundos < 16)){
                console.log("Prato Pronto, bom apetite!")
            }

            else if(segundos < 8){
                console.log('Tempo insuficiente!')}

            else if(segundos >= 24){
                console.log('KABUMMM!')}

            else{
                if(segundos >= 16){
                    console.log('Brigadeiro queimou!')
                }
            }
            break;

        default: // DEFAULT foi utilizado quando uma opção não listada é escolhida
            console.log("Prato inexistente ! ")
    
    }
}

microondas(1,10);