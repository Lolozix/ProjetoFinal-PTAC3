import { NextResponse } from "next/server";

export const listaDeJogosPS5 = [
    {
        id: 1,
        imagem: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/07/untitled-design-10-1.jpg", 
        titulo: "EA Sports College Football 25",
        descricao: "É um videogame baseado em futebol universitário, desenvolvido pela EA Orlando e publicado pela EA Sports. Faz parte da série de jogos EA Sports College Football e é o primeiro jogo desse tipo em onze anos desde NCAA Football 14 em 2013.",
        preco: 300.00
    },
    {
        id: 2,
        imagem: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg", 
        titulo: "Grand Theft Auto VI",
        descricao: "É um futuro jogo eletrônico de ação-aventura desenvolvido pela Rockstar Studios e publicado pela Rockstar Games. Será o oitavo título principal da franquia Grand Theft Auto, sendo o sucessor de Grand Theft Auto V, e o décimo sexto jogo eletrônico da série.",
        preco: 500.00
    },
    {
        id: 3,
        imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/97e9f5fa6e50c185d249956c6f198a2652a9217e69a59ecd.jpg?w=440", 
        titulo: "Spider-Man 2",
        descricao: "É um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 5.",
        preco:  100.00
    },
    {
        id: 4,
        imagem: "https://cdn.sortiraparis.com/images/80/66131/908390-fortnite-enfer-vert-map-skins-passe-de-combat-le-point-sur-les-nouveautes-de-la-saison-3.jpg", 
        titulo: "Fortnite",
        descricao: "É um jogo eletrônico multijogador online revelado originalmente em 2011, desenvolvido pela Epic Games e lançado como diferentes modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.",
        preco: 350.00
    }
];

export async function GET() {
    return NextResponse.json(listaDeJogosPS5);
}
