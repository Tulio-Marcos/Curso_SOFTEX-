alert('Responda Apenas sim OU nao');
var terresteValor = prompt('É terreste?');

if(terresteValor == 'sim'){

  var umaPessoaValor = prompt('Cabe apenas uma pessoa?');

   if(umaPessoaValor== 'sim'){

    var pessadoValor = prompt('É Pessado ?');

      if (pessadoValor == 'sim'){

        alert('é uma Trator');
      }else{

        var temPedalValor = prompt('Tem Pedal?');

        if(temPedalValor == 'sim'){
          alert('É uma Bicicleta');
        }else{
          alert('Voce Respondeu errado')
        }
      }
   }else{

    var usaCapaceteValor = prompt('Usa Capacete?');

    if(usaCapaceteValor == 'sim'){
      alert('É uma Moto');
    }else{
      var temPassageiroValor = prompt(' Tem Passageiro?');
      if(temPassageiroValor == 'sim'){
        var usaTriloValor = prompt('Usa Trilho?');
        if (usaTriloValor == 'sim'){
          alert('É um Trem')
        }else{
          var andaPistaValor = prompt('Anda na Pista?')
          if (andaPistaValor == 'sim'){
            var altoValor = prompt('É alto?');
            if(altoValor == 'sim'){
              var carroceria = prompt('Usa Carroceria ?');
              if (carroceria =='sim'){
                alert('É UM Caminhão')
              }else{
                var temCobradorValor = prompt('Pode ter Cobrador?');
                if(temCobradorValor == 'sim'){
                  alert('É um Ônibus');
                }else{
                  alert('Voce Respondeu algo errado');
                }
              }
            }else{
              var veiculoLeveValor = prompt(' É veiculo Leve?');
              if(veiculoLeveValor == 'sim'){
                alert('É um Carro');
              }else{
                alert('Voce Respondeu Algo Errado');
              }
            }
          }else{
            alert('Voce Respondeu Algo Errado');
          }
        }
      }else{
        alert('Voce Respondeu Algo Errado');
      }
    }
   }
}else {
  var aereoValor = prompt('É Aéreo?');
  if (aereoValor =='sim'){
    var pularValor = prompt('Precisa Pular');
    if(pularValor == 'sim'){
      alert('É uma Asa DELTA');
    }else{
      var viajaDentroValor = prompt(' Viaja Dentro?');
      if (viajaDentroValor == 'sim'){
        var devagarValor= prompt(' É Devagar?');
        if(devagarValor == 'sim'){
          alert('É um Balão')
        }else{
          var pilotoValor= prompt('Tem Piloto?');
          if(pilotoValor=='sim'){
            var asasFixasValor = prompt('Possui Asas Fixas?');
            if(asasFixasValor == 'sim'){
              alert('AVIÃO');
            }else{
              var vooVerticalValor= prompt('Faz Voo vertical?');
              if(vooVerticalValor == 'sim'){
                alert('HELICÓPTERO');
              }else{
                alert('Voce Respondeu Algo Errado');
              }
            }
          }else{
            alert('Voce Respondeu Algo Errado');
          }
        }
      }else{
        alert('Voce Respondeu Algo Errado');
      }
    }
  }else {
    var aquaticoValor = prompt('É aquático?');
    if (aquaticoValor == 'sim'){
      var cobertoAguavalor = prompt(' É Coberto d´água?')
      if(cobertoAguavalor == 'sim'){
        alert('SUBMARINO');
      }else{
        var navegaAguaValor = prompt('Navega Na Água?');
        if(navegaAguaValor == 'sim'){
          var possuiVelaValor = prompt('Possui Vela?');
          if(possuiVelaValor == 'sim'){
            alert('BARCO');
          }else{
            var temMotorValor = prompt('Tem Motor ?');
            if(temMotorValor == 'sim'){
              var aquaticoAltoValor = prompt('É Alto?');
              if(aquaticoAltoValor == 'sim'){
                alert('NAVIO')
              }else{
                var descobertoValor = prompt('Pode Ser Descoberto?');
                if(descobertoValor == 'sim'){
                  alert('LANCHA');
                }else{
                  alert(' Voce Respondeu Errado')
                }
              }
            }else{
              alert(' Voce Respondeu Errado')
            }
          }
        }else{
          alert(' Voce Respondeu Errado')
        }
      }
    }
  }

}
