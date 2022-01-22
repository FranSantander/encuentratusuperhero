$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        let valueInput = $("#numeroHeroe").val();
    $.ajax({
        type: "GET",
        url: `https://superheroapi.com/api.php/1849072248623588/${valueInput}`,
        success: function (response) {
            let nombre = response.name;
            let imagen = response.image.url;
            let ocupacion = response.work.occupation;
            let primeraAparicion = response.biography.first-appearance;
            let altura = response.appearance.height;
            let peso = response.weight;
            let alianzas = response.connections.group-affiliation;
           
            $("#heroInfo").html(`
            <div class="text-center">
                <h3>${nombre}</h3>
                <img src="${imagen}">
                <h6>Ocupación: ${ocupacion}</h6>
                <h6>Primera Aparición: ${primeraAparicion}</h6>
                <h6>Altura: ${altura}</h6>
                <h6>Peso: ${peso}</h6>
                <h6>Alianzas: ${alianzas}</h6>
            </div>
            `);
           let estadisticas = []
            response.powerStats.forEach(function (s) {
                estadisticas.push({
                    label: s.name,
                    y: s.id,
                })
            });
            let config = {
                theme: "light2", // "light1", "light2", "dark1", "dark2"
                exportEnabled: true,
                animationEnabled: true,
                title: {
                    text: "Estadísticas de poder para"
                },
                data: [{
                    type: "pie",
                    startAngle: 25,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}%",
                    dataPoints: [ estadisticas
                       /* { y: estadisticas, label: "durability" },
                        { y: estadisticas, label: "speed" },
                        { y: estadisticas, label: "power" },
                        { y: estadisticas, label: "combat" },
                        { y: estadisticas, label: "strength" },
                    { y: estadisticas, label: "intelligence"}*/ 
                    ]
                }]
            };
            let chart = new CanvasJS.Chart("heroeStats", config);
            chart.render();

/*function toggleDataSeries (e) {
if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible){
    e.dataSeries.visible = false;
}else {
    e.dataSeries.visible = true;
}
e.chart.render ();
}*/


           /* heroe.forEach((item) => {
                $('.card')
            });
             { y: 51.08, label: "durability" },
                        { y: 27.34, label: "speed" },
                        { y: 10.62, label: "power" },
                        { y: 5.02, label: "combat" },
                        { y: 4.07, label: "strength" },
                        { y: 1.22, label: "intelligence" },
            */
        }
    });
});
});