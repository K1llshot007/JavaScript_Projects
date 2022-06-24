// /* Objectives
// 1.Array to hold all possible chars
// 2.Button to generate 4 random passwords
// 3.Display Password options
// 4.Ability to set the password length
// 5.1-click copy password to clipboard(using input type=text for password display)*/

// /*Steps 
// 1.Making an array for all possible chars
// 2.using math.floor for random number generation to get random chars from array
// 3.using for loop the same no. of time that input is given
// 4.display the passwords using text content*/

let allCharArr = []
for(let i=33; i<127; i++){
	allCharArr.push(String.fromCharCode(i));
}
console.log(allCharArr)
let randomNum = 0
let pass = ""
let passArr = []


function randomPassGenerator(){
    reset()
    let passLength = document.getElementById("pass-length").value
    let intPassLength = parseInt(passLength)
    // console.log(intPassLength)
    for(let i = 0; i<4; i++){
        for(let index=0; index< intPassLength; index++){
            randomNumGenerator()
            // console.log(randomNum)
             pass += allCharArr[randomNum]
            // console.log(allCharArr[randomNum])
        }
        passArr.push(pass)
        // console.log(passArr)
        pass=""
    }
    document.getElementById("randompass").value = passArr[0]
    document.getElementById("randompass1").value = passArr[1]
    document.getElementById("randompass2").value = passArr[2]
    document.getElementById("randompass3").value = passArr[3]
    


}

randomNumGenerator = () => {
    randomNum = Math.floor(Math.random()*allCharArr.length)
}
reset = () => {
    document.getElementById("randompass").value = ""
    document.getElementById("randompass1").value = ""
    document.getElementById("randompass2").value = ""
    document.getElementById("randompass3").value = ""
    pass=""
    passArr=[]
}

copyToClipboard = () => {
    const area = document.querySelectorAll('.randomPass')
    // console.log(area[0].value)
    for(let x = 0; x<area.length; x++ ){
        
    area[x].addEventListener('click',function(){
        area[x].select()
        // document.execCommand('copy')
        navigator.clipboard.writeText(area[x].value)
        
    })
    // document.execCommand('copy')
    // alert("copied the text" + area[x].value)}
    }
    // alert("copied the text" + area[x].value)
}
