const tributeChest = []


const payTribute = (numberId, summary, queen ) => {
    const tribute = {
        id: numberId,
        description: summary,
        queenId: queen
    }
    return tributeChest.push(tribute);
}

payTribute(1, "Jar of honey", 1);
payTribute(2, "A bigger hive", 3);
payTribute(3, "More bees", 3);

console.log(tributeChest);




/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}




const queens = []

const createQueen = (queenNumber, queenName) => {
    const queenObject = {
        id: queenNumber,
        name: queenName
    }

   return queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Billy Joel")
createQueen(3, "Madonna")

console.log(queens);

for (const queen of queens) {
    const hailMessage = hailTheQueen(queen.name)  // What should be passed as an argument?
    console.log(hailMessage)
}



for (const queenObject of queens) {

    for (const tributeObject of tributeChest) {
        if(queenObject.id === tributeObject.queenId){
            console.log(`${queenObject.name} has a tribute of ${tributeObject.description}`)
        }
    }
    }