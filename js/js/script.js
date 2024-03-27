const objs = [
    {
        nome: "bella",
        idade: 19,
        esta_trabalhando: true,
        detalhes_profissao: {
            "profissao": "programadora",
            "empresa": "empresa x"
        },
        hobbies: ["programar", "ler", "exercicios"]
    },
    {
        nome: "jose",
        idade: 18,
        esta_trabalhando: false,
        detalhes_profissao: {
            "profissao": null,
            "empresa": null,
        },
        hobbies: ["ler", "jogar"]  
    }
]

// JSON
// converter objeto para JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)
 
// converter json para json
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})