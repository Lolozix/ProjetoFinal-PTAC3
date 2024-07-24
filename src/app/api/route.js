import { NextResponse } from "next/server";

export const listaDeJogosPS5 = [
    {
        id: 1,
        imagem: "https://www.google.com/search?client=opera-gx&hs=GaB&sa=X&sca_esv=6bd45db164d8933b&sxsrf=ADLYWIK0qWcFNIL2UiqafcvmC2MZhA0dCw:1721788021105&q=Grand+Theft+Auto+VI&stick=H4sIAAAAAAAAAONgFuLVT9c3NMwwNIgvMcxLU4JwS9LKy5OySoq1FLKTrfSTy9JBOL4gJ7EkLb8o16osMyU1XyE9MTe1-BFjGLfAyx_3hKV8J605eY3RnYugFiFpLjbXvJLMkkohQSl-LlQHWDFpMFUxcTDyLGIVdi9KzEtRCMlITStRcCwtyVcI85zAxggAPExjdrQAAAA&lei=dWagZqOLBu_d1sQP8vG62As#&tbs=kac:1,kac_so:0",
        titulo: "EA Sports College Football 25",
        descricao:"É um videogame baseado em futebol universitário, desenvolvido pela EA Orlando e publicado pela EA Sports. Faz parte da série de jogos EA Sports College Football e é o primeiro jogo desse tipo em onze anos desde NCAA Football 14 em 2013.",
        preco: "R$ 300,00"
    },
    {
        id: 2,
        imagem: "https://www.google.com/search?client=opera-gx&hs=GaB&sa=X&sca_esv=6bd45db164d8933b&sxsrf=ADLYWIK0qWcFNIL2UiqafcvmC2MZhA0dCw:1721788021105&q=Grand+Theft+Auto+VI&stick=H4sIAAAAAAAAAONgFuLVT9c3NMwwNIgvMcxLU4JwS9LKy5OySoq1FLKTrfSTy9JBOL4gJ7EkLb8o16osMyU1XyE9MTe1-BFjGLfAyx_3hKV8J605eY3RnYugFiFpLjbXvJLMkkohQSl-LlQHWDFpMFUxcTDyLGIVdi9KzEtRCMlITStRcCwtyVcI85zAxggAPExjdrQAAAA&ved=2ahUKEwjjmYGb0L6HAxXvrpUCHfK4DrsQ-BZ6BAhGEBI&tbs=kac:1,kac_so:0&biw=537&bih=530&dpr=1.18",
        titulo: "Grand Theft Auto VI",
        descricao: "É um futuro jogo eletrônico de ação-aventura desenvolvido pela Rockstar Studios e publicado pela Rockstar Games. Será o oitavo título principal da franquia Grand Theft Auto, sendo o sucessor de Grand Theft Auto V, e o décimo sexto jogo eletrônico da série.",
        preco: "R$ 500,00"
    },
    {
        id: 3,
        imagem: "https://www.google.com/imgres?q=Spider-Man%202&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81NLx-3AAoL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.br%2FMarvels-Spider-Man-2-PlayStation-5%2Fdp%2FB0C7SLM73T&docid=t8mwAoTtxD1GGM&tbnid=pggOCG4qh7BAmM&vet=12ahUKEwiAtaGT0b6HAxXys5UCHeIoBmcQM3oECG8QAA..i&w=799&h=1000&hcb=2&ved=2ahUKEwiAtaGT0b6HAxXys5UCHeIoBmcQM3oECG8QAA",
        titulo: "Spider-Man 2",
        descricao: "É um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 5.",
        preco: "R$ 100,00"
    },
    {
        id: 4,
        imagem: "https://www.google.com/search?client=opera-gx&sa=X&sca_esv=6bd45db164d8933b&sxsrf=ADLYWIKJprA5Uez-xf3ypf_f-JKMnLLeXw:1721788343205&q=Fortnite&stick=H4sIAAAAAAAAAONgFuLVT9c3NMwwNIgvMcxLU-LSz9U3yLZMSrY00FLITrbSTy5LB-H4gpzEkrT8olyrssyU1HyF9MTc1OJHjGHcAi9_3BOW8p205uQ1RncuglqEpLnYXPNKMksqhQSl-LlQbbdi0mCqYuJg5FnEyuGWX1SSl1mSOoGNEQBe0ImtpgAAAA&ved=2ahUKEwixy8y00b6HAxULupUCHZz7AhMQ-BZ6BAgwEBs&tbs=kac:1,kac_so:0&biw=537&bih=530&dpr=1.18",
        titulo: "Fortnite",
        descricao: "É um jogo eletrônico multijogador online revelado originalmente em 2011, desenvolvido pela Epic Games e lançado como diferentes modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.",
        preco: "R$ 350,00"
    }
];

export async function GET(){
    return NextResponse.json(listaDeJogosPS5)
}