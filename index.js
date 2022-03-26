// Code your solution in this file!


//find HQ location
//Minus HQ location from Start Location

function distanceFromHqInBlocks(customerBlock){
    let blockDist = 42 - customerBlock;
    return Math.abs(blockDist);
}
function distanceFromHqInFeet(customerBlock){
    let feetDist = distanceFromHqInBlocks(customerBlock);
    feetDist = feetDist * 264;
    return feetDist;
}
function distanceTravelledInFeet(startFeet, currentFeet){
    let feetTravelled = startFeet - currentFeet;
    feetTravelled = Math.abs(feetTravelled);
    feetTravelled = feetTravelled * 264;
    return feetTravelled;
}
function calculatesFarePrice(start, destination){
    let farePrice = undefined;
    let distTravelled = distanceTravelledInFeet(start, destination);
    if(distTravelled < 400){
        farePrice = 0;
    } else if(distTravelled >= 400 && distTravelled < 2000){
        farePrice = (distTravelled - 400) / 50;
    } else if(distTravelled >= 2000 && distTravelled < 2500){
        farePrice = 25;
    }  else if(distTravelled >= 2500){
        farePrice = "cannot travel that far";
    }


    return farePrice;
}