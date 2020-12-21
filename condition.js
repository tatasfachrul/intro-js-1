const conditionIf = 'Arkademy'

// If-Else
if (conditionIf !== 'Arkademy'){
  console.log('This variable is not Arkademy')
} else {
  console.log('This is Arkademy')
}

// Ternary. <condition> ? <true> : <false>
conditionIf !== 'Arkademy' 
? console.log('This variable is not Arkademy') 
: console.log('This is Arkademy')

// SWITCH
const conditionSwitch = 10
switch (conditionSwitch) {
  case 1:
    return console.log('First condition')
  case 2:
    console.log('Second condition')
    break;
  case 3:
    console.log('Third condition')
    break;
  default:
    break;
}