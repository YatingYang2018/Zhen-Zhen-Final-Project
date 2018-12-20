var radarChart = document.getElementById("myRadarChart");
Chart.defaults.scale.gridLines.color = "rgba(255,0,0,1)";
var myRadarChart = new Chart(radarChart, {
    type: 'radar',
    data: {
      labels: ['Food', 'Color', 'Season', 'Music'],
      datasets: [{data: [20, 27, 14, 35],
                 borderColor:"rgba(255,255,204,1)",

                 pointBorderColor:"rgba(255,255,204,1)",

                 pointBorderColor:"rgba(255,102,102,1)"}]
}
});

document.getElementById("myRadarChart").style.display="none";
function getResult(event){
  document.getElementById("myRadarChart").style.display="block";
}
