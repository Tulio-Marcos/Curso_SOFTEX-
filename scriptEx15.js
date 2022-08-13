const  pessoa= {
  nome : 'Pedro',
  idade:  0,
  sexo: 'M',
  andar(){
    console.log(this.nome + 'Andou');

  },
  falar(){
    console.log('Ola, Tudo Bem?');
  },
  correr(){
    console.log('Correndo, Estou cansado')
  }

}



const carro = {
  cor: 'Branco',
  modelo: 'BMW',
  ano:1992,

  andar(){
    console.log("Andando")
  },

  bizunar(){
    console.log('bibi')
  },
  freiar(){
    console.log("Freiou")
  }
}


const monitor = {
  ligado: true,
  funciona: true,
  polegadas: 24,

  ligado(){
    if(this.ligado){
      console.log("Esta Ligado")
    }else{
      console.log("Não Está Ligado")
    }
  },

  funcionando(){
    if(this.funciona){
      console.log("Sim")
    }else{
      console.log("Não")
    }
  },
  tamanho(){
    console.log(this.polegadas + " Polegadas")
  }
}



const cachorro = {
  cor: "branco",
  raca: "PitBull",
  idade: 2,

  latir(){
    console.log("Au AU")
  },
  morder(){
    console.log("Não Posso Morde")
  },
  brincar(){
    console.log("Vamos Brincar")
  }
  

  
}

const foneOuvido = {
  semfio:true,
  bluetooth: true,
  ligado:true,

  conectar(){
    if(this.bluetooth){
      console.log("Pode Conectar")
    }else{
      console.log("Não tem bluetooth")
    }
  },
  ligado(){
    if(this.ligado){
      console.log('Está Ligado')
    }else{
      console.log("Não está ligado")
    }
  }


}