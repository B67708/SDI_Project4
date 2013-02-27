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


//Does the string follow a pattern like an email address?

//Function to determine if the email address follows a pattern.        
var checkEmailAddress = function(){
    
//These Variables are for determining the postion of @ and .

    var endUser   = myEmailAddress.indexOf("@"),
        startHost = myEmailAddress.indexOf("@")+1,
        endHost   = myEmailAddress.lastIndexOf("."),
        startTLD  = myEmailAddress.lastIndexOf(".")+1,
        endTLD    = myEmailAddress.length;
    
//These variables take the data from the last variables and determine the length of the address

    var emailUser = myEmailAddress.substring(0,endUser),
        emailHost = myEmailAddress.substring(startHost,endHost),
        emailGtld = myEmailAddress.substring(startTLD,endTLD),
        emailUser = (endUser),
        emailHost = (endHost - startHost),
        emailGtld = (myEmailAddress.length - (myEmailAddress.lastIndexOf(".")+1));
        
        
        if(emailUser >1){emailUser = true}          //This checks to see if the username is greater than 1 charater
            else emailUser = false;
        
        if(emailHost >1){emailHost = true}          //This checks to see if the host name is great than 1 character
            else emailHost = false;
            
        if(emailGtld == 3){emailGtld = true}        //This checks to see if the gTLD is equal to 3 charaters
            else emailGtld = false;
        
    
        
            if(emailUser && emailHost && emailGtld == true){        //This Checks to see if address if formatted to the pattern
                email = true
            } else
                email = false;
                
            return email;           //returns boolean
};

//Is the string a URL(Does it start with http:// or http://)

//function to see if the url matches http:// or https://
var checkUrl = function(){
    
    var urlcheck= false;
    
    if(url.substring(0,7) == "http://"){      //check to see if url matchs http://
        urlcheck = true
    };
     if (url.substring(0,8) == "https://"){   //check to see if url matchs https://
        urlcheck = true};
        
     
    return urlcheck;
    };


//String function outputs

    console.log("String function outputs");       

// Does a string follow a pattern like a phone number output?

var phoneNumber = "123-456-7890";                      //Variable for phone number
    console.log(checkPhoneNum());                      //Output for phone number

//Does the string follow a pattern like an email address?

var myEmailAddress = "Johnwinchell86@fullsail.edu";    //Variable for Email
    console.log(checkEmailAddress());                  //Output for Email

//Is the string a URL(Does it start with http:// or http://)

var url = "http://www.codecademy.com";                 //Variable for url
    console.log(checkUrl());                           //output for url


