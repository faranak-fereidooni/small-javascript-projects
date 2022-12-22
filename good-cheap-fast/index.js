const toggles = document.querySelectorAll("toggle");
const Good = document.querySelector("Good");
const Fast = document.querySelector("Fast");
const Cheap = document.querySelector("Cheap");

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(Good.checked && Fast.checked & Cheap.checked){
        if(Good===theClickedOne){
            Fast.checked=false;
}
        if(Cheap===theClickedOne){
            Good.checked=false;
}
        if(Fast===theClickedOne){
            Cheap.checked=false;
}
    }
}