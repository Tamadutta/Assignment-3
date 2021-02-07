
function kilometerToMeter(distance) {
    if(distance < 0){
        return 'Distance cannot be negative';
    }
    else{
         output = distance * 1000;
    }
    
    return output;
}


function budgetCalculator(watch, mobile, laptop) {
    var output = watch * 50 + mobile * 100 + laptop * 500;
    return output;
}

function hotelCost(day) {
    if(day <= 10){
        var rent = day * 100;
        
    }
    else if(day <= 20){
        var first10DaysRent = 1000;
        var remainingDays = day - 10;
        var rent = first10DaysRent + remainingDays * 80 ;
       
    }
    else{
        var first10DaysRent = 1000;
        var second10DaysRent = 800;
        var daysRemained = day - 20;
        var thirdRemainingDaysRent = daysRemained * 50;
        var rent = first10DaysRent + second10DaysRent + thirdRemainingDaysRent ;
        
    }
    return rent;
}

function megaFriend(string) {
    var longestName = "";
    for (let i = 0; i < string.length; i++) {
       if (string[i].length > longestName.length)
           longestName = string[i];
       
    
    }
    return longestName;
}
var friendsName = megaFriend(["Rishika", "Hiya", "Niharika", "Imu", "rakha"]);
console.log(friendsName);