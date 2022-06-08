var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
function RGB(r, g, b){
    var rgb = 0x1000000 | parseInt(r)<<16 | parseInt(g)<<8 | parseInt(b);
    return "#" + rgb.toString(16).substr(1);
}

$(document).ready(function () {
    $(".boja").change(function () {
        var Boja= RGB($("#r").val(), $("#g").val(), $("#b").val());
        $(".tekst").css("color", Boja);
    });
});
function izračunaj() {
    
    let visina = parseInt(document.querySelector("#visina").value);
    let masa = parseInt(document.querySelector("#masa").value);
    let rezultat = document.querySelector("#rezultat");
  
  
    if (visina === "" || isNaN(visina)) 
        rezultat.innerHTML = "Unesite ispravnu visinu!";
  
    else if (masa === "" || isNaN(masa)) 
        rezultat.innerHTML = "Unesite ispravnu masu!";
  
    else {
  
        let bmi = (masa / ((visina * visina)/10000)).toFixed(2);

        if (bmi < 18.6){ 
            rezultat.innerHTML =`Neuhranjenost: ${bmi}`;
            document.getElementById("extremeobese").hidden = true;
            document.getElementById("obese").hidden = true;
            document.getElementById("under").hidden = false;
            document.getElementById("normal").hidden = true;
            document.getElementById("over").hidden = true;
            ;
        }
  
        else if (bmi >= 18.6 && bmi < 24.9){ 
            rezultat.innerHTML = `Normalna masa: ${bmi}`;
            document.getElementById("extremeobese").hidden = true;
            document.getElementById("obese").hidden = true;
            document.getElementById("normal").hidden = false;
            document.getElementById("under").hidden = true;
            document.getElementById("over").hidden = true;
        }
        else if(bmi>= 24.9 && bmi < 29.9){
            rezultat.innerHTML =`Prekomjerna tjelesna težina: ${bmi}`;
            document.getElementById("extremeobese").hidden = true;
            document.getElementById("obese").hidden = true;
            document.getElementById("over").hidden = false;
            document.getElementById("normal").hidden = true;
            document.getElementById("under").hidden = true;
        }
        else if(bmi>= 29.9 && bmi < 39.9){
            rezultat.innerHTML =`Pretilost: ${bmi}`;
            document.getElementById("extremeobese").hidden = true;
            document.getElementById("obese").hidden = false;
            document.getElementById("over").hidden = true;
            document.getElementById("normal").hidden = true;
            document.getElementById("under").hidden = true;
        }
        else{
            rezultat.innerHTML =`Ekstremna pretilost: ${bmi}`;
            document.getElementById("extremeobese").hidden = false;
            document.getElementById("obese").hidden = true;
            document.getElementById("over").hidden = true;
            document.getElementById("normal").hidden = true;
            document.getElementById("under").hidden = true;
        }
    }
}
// link: /proxy.php?postaja=173&polutant=1&tipPodatka=0&vrijemeOd=11.08.2016&vrijemeDo=25.08.2016
$(document).ready(function(){
var data = $.getJSON ("http://arwen.unin.hr/proxy.php?postaja=173&polutant=1&tipPodatka=0&vrijemeOd=11.08.2016&vrijemeDo=25.08.2016", function(data){
    
    $("#ucitaj").click(function(){
    $("#tablica1").DataTable({
        data: data,
        columns: [
            {data: "vrijednost"},
            {data: "mjernaJedinica"},
            {data: "vrijeme"}
        ],
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/hr.json'
        }
    });
});  
});
});


