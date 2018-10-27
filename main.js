$(document).ready(function(){

    $('#click-btn').click(function(event){
        event.preventDefault();
        calc();
    });
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
    else{
        genderFactor=-161;
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
            activityFactor=1.71;
    }
    result=parseInt((10*mass+6.25*height-5*age+genderFactor)*activityFactor);

    
    printResult(result);
}
printResult=(result)=>{
    $('#you-need').text("Potrzebujesz około: ");
    $('#result-container').text(result+" kcal");
}





