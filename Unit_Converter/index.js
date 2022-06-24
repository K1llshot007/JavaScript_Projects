// let input = document.getElementById("num")
// let inputNum = parseInt(input)
// console.log(input.select())




// console.log(mf)

function convert() {
    let input = document.getElementById("num").value
    
    let inputNum = parseFloat(input)
    console.log(inputNum)
    
    let mfResult = inputNum * 3.28084
    let fmResult = inputNum / 3.28084

    let mf = document.getElementById("m/f")
    mf.textContent = inputNum + " meters = "+ mfResult.toFixed(3) +" feet"

    let fm = document.getElementById("f/m")
    fm.textContent = inputNum + " feet = "+ fmResult.toFixed(3) +" meters"

}


