let hours = document.querySelectorAll(".hours");
let lastTime = document.querySelectorAll(".last-time");


function daily() {

  fetch("./data.json").then((response) => {
    response.json().then((dados) => {

      console.log(dados.usuarios[0].timeframes.daily.current);

      hours.forEach((e, i) => {

        hours[i].innerHTML = dados.usuarios[i].timeframes.daily.current + " hrs ";
        lastTime[i].innerHTML = " Last Daily " + dados.usuarios[i].timeframes.daily.previous + "hrs";

        document.getElementById('daily').style.color = 'hsl(236, 100%, 87%)';
        document.getElementById('weekly').style.color = 'hsl(235, 45%, 61%)';
        document.getElementById('monthly').style.color = 'hsl(235, 45%, 61%)';

      });

    });

  })
}

function weekly() {

  fetch("./data.json").then((response) => {
    response.json().then((dados) => {

      console.log(dados.usuarios[0].timeframes.monthly.current);

      hours.forEach((e, i) => {

        hours[i].innerHTML = dados.usuarios[i].timeframes.weekly.current + " hrs ";
        lastTime[i].innerHTML = " Last Daily " + dados.usuarios[i].timeframes.weekly.previous + "hrs";

        document.getElementById('daily').style.color = 'hsl(235, 45%, 61%)';
        document.getElementById('weekly').style.color = 'hsl(236, 100%, 87%)';
        document.getElementById('monthly').style.color = 'hsl(235, 45%, 61%)';

      });

    });

  })
}

function monthly() {

  fetch("./data.json").then((response) => {
    response.json().then((dados) => {

      console.log(dados.usuarios[0].timeframes.monthly.current);

      hours.forEach((e, i) => {

        hours[i].innerHTML = dados.usuarios[i].timeframes.monthly.current + " hrs ";
        lastTime[i].innerHTML = " Last Daily " + dados.usuarios[i].timeframes.monthly.previous + "hrs";

        document.getElementById('daily').style.color = 'hsl(235, 45%, 61%)';
        document.getElementById('weekly').style.color = 'hsl(235, 45%, 61%)';
        document.getElementById('monthly').style.color = 'hsl(236, 100%, 87%)';

      });

    });

  })
}
