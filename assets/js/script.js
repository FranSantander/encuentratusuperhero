$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        let valorInput = $("#numeroHeroe").val();
        $.ajax({
            type: "GET",
            url: "https://superheroapi.com/api.php/10158707247677014/" + valorInput,
            success: function (data) {
                console.log(data)
                let nombre = data.name;
                let imagen = data.image.url;
                let conexiones = data.connections.relatives;
                let editor = data.biography.publisher;
                let ocupacion = data.work.occupation;
                let primeraAparicion = data.biography.first_appearance;
                let altura = data.appearance.height;
                let peso = data.appearance.weight;
                let alianzas = data.connections.group_affiliation;
                let valorPoderes = data.powerstats;

                $("#heroeInfo").html(`
                <p>SuperHero Encontrado:</p>
                <div class="card text-justificy" style="width: 18rem;">
                    <img src="${imagen}">
                <div class="card-body">
                 <h5 class="card-title">Nombre: ${nombre}</h5>
                <p class="card-text">Conexiones: ${conexiones}</p>
             </div>
             <ul class="list-group list-group-flush">
                <li class="list-group-item">Publicado por: ${editor}</li>
                <li class="list-group-item">Ocupación: ${ocupacion}</li>
                <li class="list-group-item">Altura: ${altura}</li>
                <li class="list-group-item">Primera Aparición: ${primeraAparicion}</li>
                <li class="list-group-item">Peso: ${peso}</li>
                <li class="list-group-item">Alianzas: ${alianzas}</li>
            </ul>
            </div>
          </div>
            `);
             /*let nombresPoderes = ["intelligence", "strength", "speed", "durability", "power", "combat"];
            for (let i = 0; i < valorPoderes.length; i++) { 
            document.write (nombresPoderes[i]);
        };*/
         
      let estadisticas2;
            for (let i = 0; i < valorPoderes.length; i++) {
                estadisticas2 = `${valorPoderes}`;
            }
                /*let estadisticas1 = []
                 data.powerStats.forEach(function (h) {
                     estadisticas1.push({
                         label: h.powerstats,
                         y: h.name,
                     })
                 });

                 let poderes = {
                    "intelligence": "",
                    "strength": "",
                    "speed": "",
                    "durability": "",
                    "power": "",
                    "combat": ""
                    
                 }
                 for (propiedad in poderes){

                    }*/
                
                 let config = {
                    
                     theme: "light2", // "light1", "light2", "dark1", "dark2"
                     animationEnabled: true,
                     title: {
                         text: "Estadísticas de poder para " + nombre
                     },
                     data: [{
                         type: "pie",
                         startAngle: 25,
                         toolTipContent: "<b>{label}</b>: {y}%",
                         showInLegend: "true",
                         legendText: "{label}",
                         indexLabelFontSize: 16,
                         indexLabel: "{label} - {y}%",
                         dataPoints: [ /*estadisticas,*/
                             { y: valorPoderes , label:"intelligence" },
                             { y: valorPoderes, label: "strength" },
                             { y: valorPoderes, label: "speed" },
                             { y: valorPoderes, label: "durability" },
                             { y: valorPoderes, label: "power" },
                            { y: valorPoderes, label: "combat" }
                 ]
             }]
         };
         let chart = new CanvasJS.Chart("chartContainer", config);
         chart.render();

              /* function toggleDataSeries (e) {
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