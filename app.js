const INF = 999;

let option = {
    "af": true,
    "am": true,
    "as": true,
    "eu": true,
    "oc": true,
    "difficulty": 5
};

let option_region_af = document.getElementById("option-region-af");
let option_region_am = document.getElementById("option-region-am");
let option_region_as = document.getElementById("option-region-as");
let option_region_eu = document.getElementById("option-region-eu");
let option_region_oc = document.getElementById("option-region-oc");
let option_region = [option_region_af,option_region_am,option_region_as,option_region_eu,option_region_oc];

let option_difficulty_5 = document.getElementById("option-difficulty-5");
let option_difficulty_10 = document.getElementById("option-difficulty-10");
let option_difficulty_25 = document.getElementById("option-difficulty-25");
let option_difficulty_50 = document.getElementById("option-difficulty-50");
let option_difficulty_all = document.getElementById("option-difficulty-all");
let option_difficulty = [option_difficulty_5,option_difficulty_10,option_difficulty_25,option_difficulty_50,option_difficulty_all];

let reset_button = document.getElementById("reset-button");
let input_country = document.getElementById("input-country");
let input_capital = document.getElementById("input-capital");

for(let i=0; i<option_region.length; i++){
    let region = option_region[i];
    region.addEventListener("click", function(e){
        this.classList.toggle("active");
        
    });
}

function reset_difficulty(){
    for(let i=0; i<option_difficulty.length; i++){
        let difficulty = option_difficulty[i];
        difficulty.classList.remove("active");
    }
}

for(let i=0; i<option_difficulty.length; i++){
    let difficulty = option_difficulty[i];
    difficulty.addEventListener("click", function(e){
        reset_difficulty();
        this.classList.add("active");
    });
}

function update_option(){

}

function reset(){

}


document.addEventListener("keydown", function(e){
    if(e.key == "/"){
        event.preventDefault();
        input_country.focus();
        return;
    }
    if(e.key == ":"){
        event.preventDefault();
        input_capital.focus();
        return;
    }
});

reset_button.addEventListener("click", function(e){
    reset();
});

console.log(world);
