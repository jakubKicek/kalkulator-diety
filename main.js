$(document).ready(function(){

    $('#click-btn').click(function(event){
        event.preventDefault();
        calc();
    });
    $('#reset-btn').click(function(){
        $('#you-need').text(" ");
        $('#result-container').text(" ");
    })
})
calc=()=>{
    
    let gender = $('#gender').val();
    let age = $('#age').val();
    let height = $('#height').val();
    let mass = $('#mass').val();
    let activity = $('#activity').val();
    let genderFactor=0;
    let activityFactor=0;
    let result;
    
    // check gender value
    if(gender=='Mężczyzna'){
        genderFactor=5;
    }
    else if(gender=='Kobieta'){
        genderFactor=-161;
    }
    else{
        genderFactor=-9999999;
    }
    genderFactor = parseInt(genderFactor);
    
    
    //check acitivity value
    switch(activity){
        case "pacjent chory, leżący w łóżku":
            activityFactor=1.25;
            break;
        case "niska aktywność fizyczna":
            activityFactor=1.4;
            break;
        case "umiarkowana aktywność fizyczna":
            activityFactor=1.6;
            break;
        case "aktywny tryb życia":
            activityFactor=1.75;
            break;
        case "bardzo aktywny tryb życia":
            activityFactor=2;
            break;
        case "wyczynowe uprawianie sportu":
            activityFactor=2.3;
            break;
        default:
            genderFactor=-999999;
    }
    result=parseInt((10*mass+6.25*height-5*age+genderFactor)*activityFactor);

    
    printResult(result);
}
printResult=(result)=>{
    if(result<=0){
        $('#you-need').text('Podane nieprawidłowe wartości, kliknij "Reset" i spróbuj jeszcze raz.');
    }
    else{
        $('#you-need').text("Potrzebujesz około: ");
        $('#result-container').text(result+" kcal");
    }
        $('#result-bar').removeClass("fading-in-text");
        $('#result-bar').addClass("fading-out-text");
        $('#result-bar').removeClass("fading-out-text");
        $('#result-bar').addClass("fading-in-text");
}





