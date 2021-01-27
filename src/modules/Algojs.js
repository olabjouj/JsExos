"use strict";

// --------------------------------------------Function without argument--------------------------------------------
export function isoNum() {
    return 42;
}

// --------------------------------------------------- Function with arguments -------------------------------------
export function  myFct(arg1 ,arg2) {
    var sum = arg1 + arg2;
    return 91;
}

// --------------------------------------------------- Messi’s Goal Total -------------------------------------
export function  goalTotal(arg1 ,arg2, arg3) {
    var sum = arg1 + arg2 + arg3;
    return sum;
}
// --------------------------------------------------- Grasshopper Order of Operations -------------------------------------
export function GrasshopperOrder() {
    var sum = (2+2)*(2+2)*2;
    return sum;
}
// --------------------------------------------------- Return the First Element in an Array -------------------------------------
export function getFirstValue(tab) {
    var tab = [58, 34, 29];
    
    return tab[0];
}

// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
export function minMax(tab) {
    var max = tab[0];
    var min = tab[0];
    for ( var i= 1; i <= tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }    
    }
    for (var j= 1; j <= tab.length; j++) {
        if (tab[j] < min) {
            min = tab[j];
        }    
    }
    return [min, max];
 
}



// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------

export function sortByLength(tab){
    var container= 0;
    var tmp = 0;
    for (var i =0 ; i< tab.length ; i++){
         container = i;
        //  console.log('test1');
        for ( var j=i+1 ; j < tab.length ; j++){
            // console.log('test2')
            if ( tab[j].length < tab[container].length){
                // console.log("test3")
                tmp= tab[container]
                tab[container] = tab[j];
                tab[j]= tmp;

                // console.log("test4")
            }  
        }
    }
    return tab ;
}
// --------------------------------------------------- Sort by String Length -------------------------------------
export function filterArray(tab){
    var result = [];
    var tab = [1, 2, 3, "a", "b", 4];
    var j = 0;
for ( var i = 0 ; i<tab.length; i++){
    if (tab[i]<= 0 || tab[i]>= 0){
        result [j]= tab[i];
        j++;
    }
}
 return result 
}

// --------------------------------------------------- Filter Strings from Array -------------------------------------
export function  animals( val1 , val2 , val3){
    var x = 2 * 2 ;
    var y = 3 * 4;
    var z = 5 * 4;
    var sum = x+ y+ z;

    return sum;
  }
// --------------------------------------------------- Return Last Item -------------------------------------
export function  lastItem(val){
  var index = val.charAt(val.length-1);
  return index;
}

// --------------------------------------------------- The Farm Problem -------------------------------------

// --------------------------------------------------- Reverse an Array -------------------------------------
export function reverseArray (){
    var tmp = 0;
    var tab = [1, 2, 3, 4];
        for (var i=0 ; i<=tab.length ; i++){
            while ( tab[i] < tab[i+1]){
            tmp = tab[i];
            tab[i]= tab[i+1];
            tab[i+1]= tmp;
            i = 0;
            }  
        }
        return tab ;
    }



// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------
export function addition (n){
    var n =9 ;
     return  n + 1 ;  
}

// --------------------------------------------------- Boolean to String Conversion -------------------------------------
export function boolToString(n){
    if ( n == true){
        return "true";
    }else{
       return  "false"
    }
}

// --------------------------------------------------- Filter out Strings from an Array -------------------------------------
export function filterArrayInt(tab){ 
    var res = []; 
    for (var i = 0; i < tab.length; i++){ 
        var test = (tab[i]);
         if (typeof test === 'number'){ 
             res.push(tab[i]);
        } 
} return res;
}
// --------------------------------------------------- Array of Multiples -------------------------------------
export function arrayOfMultiples(n,m){
    var tab =[];
    for ( var i=1; i<= m ; i++){
        tab[i-1]= n*i;

    }
    return tab;
}

// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------
export function convert(n,m){
    var x = (3600 * n) + (60 * m);
    return x;
}

// --------------------------------------------------- Return Negative -------------------------------------
export function returnNegative(n){

    if(n>0){ 
        return -n;
    }else if (n<0){
        return n;
    }else{
        return 0;
    }
}
// --------------------------------------------------- Simple Loop -------------------------------------
export function simpleLoop(n){
    var tab = [];
    for ( var i =1 ; i <= n ; i++){
        tab[i-1]= i;
    }
    return tab;
}

// --------------------------------------------------- Area of a Rectangle -------------------------------------
export function getArea(n,m){
    if(n>0 && m>0){
        return n * m ;
    }else {
        return -1 ;
    }
}
// --------------------------------------------------- Two Makes Ten -------------------------------------
export function makesTen(n,m){
    if ((n==10 || m==10)|| (n+m == 10 )){
        return true;
    }else {
        return false;
    }
}

// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------
export function addUp(n){
    var x=0;
    for(var i =1  ; i<= n ; i++){
        x = x+i;
    }
    return x;
}
// --------------------------------------------------- Matchstick Houses -------------------------------------
export function matchHouses(n){
    var x = (6 * n ) - (n - 1);
    return x;
}