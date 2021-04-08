array = []
array.push({frame : 1, score : 2, bonus : "none"}, 
          {frame : 2, score : 10, bonus : "X"},
           {frame : 3, score : 10, bonus : "Y"})

// console.log(array.length)
// console.log(array[array.length -1])
// console.log(array.slice(-1)[0])
let obj = array.find(obj => obj.Bonus == "Y" )
console.log(obj)

let lastElement = [array[array.length -1]]
console.log(lastElement)

if(lastElement.some(element => element.bonus === "X")){
  alert("strike!")
}else{
  alert("no strike!")
}