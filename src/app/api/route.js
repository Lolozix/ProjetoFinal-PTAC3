import { NextResponse } from "next/server";

export const listaDeJogosPS5 = [
    {
        id: 1,
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.knoxnews.com%2Fstory%2Fsports%2Fcollege%2Funiversity-of-tennessee%2F2024%2F07%2F18%2Ftennessee-volunteers-ea-sports-college-football-25-video-game-ps5%2F74456232007%2F&psig=AOvVaw2MhMbDMaf8Px_uewmlU_0p&ust=1722040731081000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCKCL68e8w4cDFQAAAAAdAAAAABAS", 
        titulo: "EA Sports College Football 25",
        descricao: "É um videogame baseado em futebol universitário, desenvolvido pela EA Orlando e publicado pela EA Sports. Faz parte da série de jogos EA Sports College Football e é o primeiro jogo desse tipo em onze anos desde NCAA Football 14 em 2013.",
        preco: "R$ 300,00"
    },
    {
        id: 2,
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rockstargames.com%2Fbr%2FVI&psig=AOvVaw3S8qH_6GgsZj9ZaDwdFhhr&ust=1722040769304000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLCN-9i8w4cDFQAAAAAdAAAAABAS", 
        titulo: "Grand Theft Auto VI",
        descricao: "É um futuro jogo eletrônico de ação-aventura desenvolvido pela Rockstar Studios e publicado pela Rockstar Games. Será o oitavo título principal da franquia Grand Theft Auto, sendo o sucessor de Grand Theft Auto V, e o décimo sexto jogo eletrônico da série.",
        preco: "R$ 500,00"
    },
    {
        id: 3,
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjovemnerd.com.br%2Fnoticias%2Fgames%2Fmarvels-spider-man-2-review&psig=AOvVaw0DSVgyTlnCmOotYKCXXlG2&ust=1722040799940000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMi_kee8w4cDFQAAAAAdAAAAABAc", 
        titulo: "Spider-Man 2",
        descricao: "É um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 5.",
        preco: "R$ 100,00"
    },
    {
        id: 4,
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fortnite.com%2Fnews%3Flang%3Dpt-BR&psig=AOvVaw2uZDATZ7mjmreqbchc6NTJ&ust=1722040834765000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCJir6ve8w4cDFQAAAAAdAAAAABAE", 
        titulo: "Fortnite",
        descricao: "É um jogo eletrônico multijogador online revelado originalmente em 2011, desenvolvido pela Epic Games e lançado como diferentes modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.",
        preco: "R$ 350,00"
    }
];

export async function GET() {
    return NextResponse.json(listaDeJogosPS5);
}
