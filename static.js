class Pessoa {
  _nome
  _idade
  
  static totalPessoas = 0


constructor (nome,idade){
  this._nome = nome;
  this._idade = idade;
  Pessoa.totalPessoas +=1;
}
get totalPessoas(){
  return Pessoa.totalPessoas
}
}
let pessoa1 = new Pessoa ('Pedro', 17)
let pessoa2 = new Pessoa ('ryan', 24)
let pessoa3 = new Pessoa ('amanda', 31)

console.log(Pessoa.totalPessoas)