  

fetch("data.json").then((response) => {
  response.json().then((dados) => {
    console.log(dados.usuarios[2].timeframes);
    })
  });

