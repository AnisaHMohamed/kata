const validatePIN = (pin) =>{
  const splitPin = pin.trim("").split("")
  let validate = true
  if((pin.length < 4) || (pin.length > 6) || (pin.length == 5) || (/\D/.test(pin)) || (/[a-z]/.test(pin)) ) {
    validate = false
  }
  
  splitPin.forEach( num => {
 
    if(isNaN(num)) {
      validate =  false
    }
    
  })
  