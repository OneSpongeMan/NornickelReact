function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    
    if (a > 10) {
        console.log('a is bigger than 10')
    } else {
        console.log('a is less than or equal to 10 ')
    }
    switch (a) {
        case 5:
            console.log('an example of a special case')
            break
        default:
            console.log('')
            break
    }
    switch (a) {
        case 15:
            console.log('but a is not 15')
            break
        default:
            console.log('')
            break
    }
    if (a > 5) {
        console.log('and a is greater than 5')
    } else {
        console.log('and a is less than or equal to 5 ')
    }
    switch (a % 2) {
        case 0:
            console.log('and a is even')
            break
        default:
            console.log('and a is odd')
            break
    }
}
  
manyChecks();