var spec2 = "https://raw.githubusercontent.com/Elysium8/Homework_Week9/main/homework.json";
vegaEmbed('#bar_chart', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);