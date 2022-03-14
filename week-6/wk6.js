var bar = document.getElementById('myChart');
var pie = document.getElementById('pieChart');
var line = document.getElementById('lineChart');

var stars = [95, 90, 70, 85, 55];
var frameworks = ['Internet Programming', 'Databases', 'Intelligent System', 'Computer Architecture', 'Java'];

// BAR CHART
var barChart = new Chart(bar, {
 type: 'bar',
 data: {
    labels: frameworks,
    datasets: [{
        label: 'MSc Computing Marks',
        data: stars,
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)"
            ],
            borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
            borderWidth: 1
    }]
 },
 options: {
    scales: {
        yAxes: [{
            display: true,
            stacked: true,
            ticks: {
                min: 0, // minimum value
                max: 100 // maximum value
            }
        }]
    }
}
})

// PIE CHART
var pieChart = new Chart(pie, {
    type: 'pie',
    data: {
       labels: frameworks,
       datasets: [{
           label: 'MSc Computing Marks',
           data: stars,
           backgroundColor: [
               "rgba(255, 99, 132, 0.2)",
               "rgba(54, 162, 235, 0.2)",
               "rgba(255, 206, 86, 0.2)",
               "rgba(75, 192, 192, 0.2)",
               "rgba(153, 102, 255, 0.2)"
               ],
               borderColor: [
             "rgba(255, 99, 132, 1)",
             "rgba(54, 162, 235, 1)",
             "rgba(255, 206, 86, 1)",
             "rgba(75, 192, 192, 1)",
             "rgba(153, 102, 255, 1)",
           ],
               borderWidth: 1
       }]
    },
   })

   // LINE CHART
   var lineChart = new Chart(line, {
    type: 'line',
    data: {
       labels: frameworks,
       datasets: [{
           label: 'MSc Computing Marks',
           data: stars,
           backgroundColor: [
               "rgba(255, 99, 132, 0.2)",
               "rgba(54, 162, 235, 0.2)",
               "rgba(255, 206, 86, 0.2)",
               "rgba(75, 192, 192, 0.2)",
               "rgba(153, 102, 255, 0.2)"
               ],
               borderColor: [
             "rgba(255, 99, 132, 1)",
             "rgba(54, 162, 235, 1)",
             "rgba(255, 206, 86, 1)",
             "rgba(75, 192, 192, 1)",
             "rgba(153, 102, 255, 1)",
           ],
               borderWidth: 1
       }]
    },
    options: {
        scales: {
            yAxes: [{
                display: true,
                stacked: true,
                ticks: {
                    min: 0, // minimum value
                    max: 100 // maximum value
                }
            }]
        }
    }
   })