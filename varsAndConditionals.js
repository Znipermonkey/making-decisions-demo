/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack){
    console.log('Jon Snow has better attack than Jamie Lannister')
} else if (jamieLannisterAttack > jonSnowAttack){
    console.log('Jamie Lannister has better attack than Jon Snow')
} else {
    console.log('Our fighters are evenly matched')
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack){
    console.log ('Jon Snow has been slain.')
} else {jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log (`Jon Snows health is down to ${jonSnowHealth}`)
}

 jonSnowDefense += 25

 if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log ('Jon Snow has been slain.')
 }else { jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log (`Jon Snows health is down to ${jonSnowHealth}`)
 }

let isDead = false

for (let i = 1; i <= 3; i++){
    isDead = Math.random() > .5
    if (isDead === true){
        console.log(console.log(`Jon has died after ${i} rounds`))
        break
    }
}

if (isDead === false){
    console.log('It is a miracle! Jon is alive after the bombardment.')
}