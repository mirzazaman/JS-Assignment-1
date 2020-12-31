function CToF(TempInC=30) {
    let TempInF=9/5*TempInC+32;
    console.log(`Temperature in Celsius= ${TempInC}`);
    console.log(`Temperature in Fahrenheit= ${TempInF}`);
    return TempInF;
}

CToF(33);