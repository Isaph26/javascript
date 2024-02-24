let amigo = {nome: 'José',
sexo: 'M',  
peso: 62, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)