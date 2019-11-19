/* EX di oggi: lista album musicali in pagina

NOME REPO: js-jq-ajax-api-musica

DESCRIZIONE:
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo.In questo momento non è importante la parte
grafica.

Chiamata:
https://flynn.boolean.careers/exercises/api/array/music

Layout base(per chi non vuole implementarne uno suo):
https://bitbucket.org/booleancareers/ex-dischi-musicali-layout */

$(document).ready(function() {
    var templateSource, templateCompiled;
    $.ajax({
        "url": "https://flynn.boolean.careers/exercises/api/array/music",
        "success": function (data) {
            for (var i = 0; i < data.response.length; ++i) {
                templateSource = $("#templates").html();
                templateCompiled = Handlebars.compile(templateSource);
                $(".cds-container").append(templateCompiled(data.response[i]));
            }
        }
    });
});
