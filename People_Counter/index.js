
let count = 0;


function increment() {
    count+=1;
    document.getElementById("count-el").textContent = count;
    
}

function decrement() {
    count--
    document.getElementById("count-el").textContent = count;
    
}

function save() {
    console.log(count)
    document.getElementById("saved-count").textContent += count + " - "
    count = 0
    document.getElementById("count-el").textContent = count

}



