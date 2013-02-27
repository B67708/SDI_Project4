// John Cardiff-Winchell
// SDI 1302
// Project 4
// Library

// Does a string follow a pattern like a phone number?

// Function determines if string follows pattern like a phone number.
  var checkPhoneNum = function(){

  //These determine the position of the dashes in the phone number        
        var endAreaNum = phoneNumber.indexOf("-"),
            startLocalNum = phoneNumber.indexOf("-")+1,
            endLocalNum = phoneNumber.lastIndexOf("-"),
            startNumberNum = phoneNumber.lastIndexOf("-")+1,
            endNumberNum = phoneNumber.length;

//This takes the data from the last code and figures out the number of digits in the section        
            var areaNum = phoneNumber.substring(0,endAreaNum),
                localNum = phoneNumber.substring(startLocalNum,endLocalNum),
                numberNum = phoneNumber.substring(startNumberNum,endNumberNum),
                areaCount = (endAreaNum),
                localCount = (endLocalNum - startLocalNum),
                numberCount = (phoneNumber.length - (phoneNumber.lastIndexOf("-")+1));
                               
            if(0 <= areaNum <= 999){areaNum = true}    //This decides if the area code is between 0 and 999
                else areaNum = false;
                
            if(areaCount == 3){areaNum = true}          //This decides if the area code if 3 digits long
                else areaNum = false;
                
            if(0 <= localNum <= 999){localNum = true}  //This decides if the second 3 numbers are between 0 and 999
                else localNum = false;
                    
            if(localCount == 3){localNum = true}       //This decides if the second 3 numbers are 3 digits long
                else localNum = false;
                    
            if(0 <= numberNum <= 9999){numberNum = true} //This decides if the last 4 are between 0 and 9999
                else numberNum = false;
                    
            if(numberCount == 4){numberNum = true}       //This decides if the last 4 numbers are 4 digits long
                else numberNum = false;
                
                if(areaNum && localNum && numberNum == true){     //This checks if all conditions are true or false
                    check = true
                    
                    } else
                
                    check = false;
                    
                return check;    //Returns Boolean                          
};

















//String function outputs

console.log("String function outputs");       

// Does a string follow a pattern like a phone number output.

var phoneNumber = "123-456-7890";            //Variable for phone number
console.log(checkPhoneNum());             //Output for phone number