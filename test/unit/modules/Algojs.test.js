import test from "tape";

import {
    isoNum,
    myFct,
    goalTotal,
    GrasshopperOrder,
    getFirstValue,
    sortByLength,
    minMax,
    filterArray,
    animals,
    lastItem,
    reverseArray,
    addition,
    boolToString,
    filterArrayInt,
    arrayOfMultiples,
    convert,
    returnNegative,
    simpleLoop,
    getArea,
    makesTen,
    addUp,
    matchHouses,

} from "../../../src/modules/Algojs";

// --------------------------------------------Function without argument--------------------------------------------
test("---------isoNum---------", t => {

    t.test("isoNum", assert => {
        const message = "should create a function named isoNum Without Argument return true";
        const expected = true;
        const actual = isoNum();

        assert.equal(actual, expected, message);
        assert.end();
    });
});
// --------------------------------------------------- Function with arguments -------------------------------------
// test("---------myFct---------", t => {

//     t.test("myFct", assert => {
//         const message = "should create a function With 2 Arguments and return sum : 91 ";
//         const expected = 91;
//         const actual = myFct(90, 1);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });
// // -------------------------------------------------- Messi's Goal Total --------------------------------------
// test("--------goalTotal---------", t => {

//     t.test("goalTotal", assert => {
//         const message = "should return total of messi goals";
//         const expected = 58;
//         const actual = goalTotal(43, 10, 5);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });
// // ------------------------------------------------ Grasshopper Order of Operations ----------------------------------------
// test("---------GrasshopperOrder-----------", t => {

//     t.test("GrasshopperOrder", assert => {
//         const message = "Fix the function to make it return 32 without changing the number";
//         const expected = 32;
//         const actual = GrasshopperOrder();

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });
// // -------------------------------------------------- Return the First Element in an Array --------------------------------------
// test("---------getFirstValue---------", t => {
//     t.test("getFirstValue", assert => {
//         const message = "Return the first element value";
//         const expected = 58;
//         const actual = getFirstValue();

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // ---------------------------------------- Find the Smallest and Biggest Numbers ------------------------------------------------
// test("---------minMax---------", t => {

//     t.test("TEST 1 : minMax", assert => {
//         const message = "Should return [1, 5]";
//         const expected = [1, 5];
//         const actual = minMax([1, 2, 3, 4, 5]);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 : minMax", assert => {
//         const message = 'Should return [5, 2334454]';
//         const expected = [5, 2334454];
//         const actual = minMax([2334454, 5]);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 3 : minMax", assert => {
//         const message = 'Should return [1, 1]';
//         const expected = [1, 1];
//         const actual = minMax([1]);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
// });

// // -------------------------------------------- Sort by String Length --------------------------------------------
// test("---------sortByLength---------", t => {

//     t.test("TEST 1 : sortByLength", assert => {
//         const message = "returns an array of strings sorted by length in **ascending** order like a, bb, ccc, dddd, eeeee";
//         const expected = ["a", "bb", "ccc", "dddd", "eeeee"];
//         const actual = sortByLength(["a", "ccc", "eeeee", "dddd", "bb"]);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 : sortByLength", assert => {
//         const message = 'returns an array of strings sorted by length in **ascending** order like ["Apple", "Google", "Microsoft"]';
//         const expected = ["Apple", "Google", "Microsoft"];
//         const actual = sortByLength(["Google", "Apple", "Microsoft"]);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 3 : sortByLength", assert => {
//         const message = 'returns an array of strings sorted by length in **ascending** order like ["Raphael", "Leonardo", "Donatello", "Michelangelo"]';
//         const expected = ["Raphael", "Leonardo", "Donatello", "Michelangelo"];
//         const actual = sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
// });

// // -------------------------------------------------- Filter Strings from Array --------------------------------------
// test("---------filterArray---------", t => {

//     t.test("filterArray", assert => {
//         const message = "returns an array of integers only.";
//         const expected = [1, 2, 3, 4];
//         const actual = filterArray();

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
// });

// // -----------------------------------------------The Farm Problem -----------------------------------------
// test("---------The Farm Problem---------", t => {

//     t.test("lastItem", assert => {
//         const message = "returns the total number of legs of all the animals.";
//         const expected = 'g';
//         const actual = lastItem('The quick brown fox jumped over the lazy dog');

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // -------------------------------------------------------- The Farm Problem --------------------------------
// test("---------animals---------", t => {

//     t.test("animals", assert => {
//         const message = "returns the total number of legs of all the animals.";
//         const expected = 36;
//         const actual = animals();

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // ----------------------------------------------- Reverse an Array -----------------------------------------
// test("---------reverseArray---------", t => {
//     t.test("reverseArray", assert => {
//         const message = "reverse an array.";
//         const expected = [4, 3, 2, 1];
//         const actual = reverseArray();

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
// });

// // -------------------------------------------------- Return the Next Number from the Integer Passed --------------------------------------
// test("---------addition---------", t => {
//     t.test("addition", assert => {
//         const message = "Increments the number by + 1 and returns the result.";
//         const expected = 10;
//         const actual = addition();

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // --------------------------------------------------- Boolean to String Conversion -------------------------------------
// test("--------boolToString---------", t => {
//     t.test("TEST 1 : boolToString", assert => {
//         const message = "returns boleans as a string.Like True";
//         const expected = 'true';
//         const actual = boolToString(true);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 : boolToString", assert => {
//         const message = "returns boleans as a string.Like False";
//         const expected = 'false';
//         const actual = boolToString(false);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // ----------------------------------------------- Filter out Strings from an Array -----------------------------------------
// test("---------filterArrayInt---------", t => {
//     t.test("TEST 1 : filterArrayInt", assert => {
//         const message = "converts an object into an array. YOU NEED TO RETURN [1, 2]";
//         const expected = [1, 2];
//         const actual = filterArrayInt([1, 2, "a", "b"]);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 : filterArrayInt", assert => {
//         const message = "converts an object into an array. YOU NEDD TO RETURN [1, 0, 15]";
//         const expected = [1, 0, 15];
//         const actual = filterArrayInt([1, "a", "b", 0, 15]);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 3 : filterArrayInt", assert => {
//         const message = "converts an object into an array. YOU NEED TO RETUEN [1, 2, 123]";
//         const expected = [1, 2, 123];
//         const actual = filterArrayInt([1, 2, "aasf", "1", "123", 123]);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
// });

// // --------------------------------------------- Array of Multiples -------------------------------------------
// test("---------arrayOfMultiples---------", t => {
//     t.test("TEST 1 : arrayOfMultiples", assert => {
//         const message = "converts an object into an array.  Your function Should return [7, 14, 21, 28, 35]";
//         const expected = [7, 14, 21, 28, 35];
//         const actual = arrayOfMultiples(7, 5);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 : arrayOfMultiples", assert => {
//         const message = "converts an object into an array. Your function  Should return  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]";
//         const expected = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];
//         const actual = arrayOfMultiples(12, 10);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 3 : arrayOfMultiples", assert => {
//         const message = "converts an object into an array. Your function  Should return [17, 34, 51, 68, 85, 102]";
//         const expected = [17, 34, 51, 68, 85, 102];
//         const actual = arrayOfMultiples(17, 6);

//         assert.deepEqual(actual, expected, message);
//         assert.end();
//     });
// });

// // ------------------------------------------- Convert Hours and Minutes into Seconds ---------------------------------------------
// test("---------convert---------", t => {
//     t.test("TEST 1 :  convert", assert => {
//         const message = "converts the args to seconds.  Your function  Should return 3780";
//         const expected = 3780;
//         const actual = convert(1, 3);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 :  convert", assert => {
//         const message = "converts the args to seconds.  Your function  Should return 7200";
//         const expected = 7200;
//         const actual = convert(2, 0);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 3 :  convert", assert => {
//         const message = "converts the args to seconds. Your function  Should return 0";
//         const expected = 0;
//         const actual = convert(0, 0);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // --------------------------------------------- Return Negative -------------------------------------------
// test("---------returnNegative---------", t => {
//     t.test("TEST 1 :  returnNegative", assert => {
//         const message = "returns negative of that number.  Your function  Should return -4";
//         const expected = -4;
//         const actual = returnNegative(4);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 :  returnNegative", assert => {
//         const message = "returns negative of that number.  Your function  Should return -4";
//         const expected = -4;
//         const actual = returnNegative(-4);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 3 :  returnNegative", assert => {
//         const message = "returns negative of that number. Your function  Should return 0";
//         const expected = 0;
//         const actual = returnNegative(0);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // ------------------------------------------------- Simple Loop---------------------------------------
// test("---------Simple Loop---------", t => {
//     t.test("SimpleLoop     ----> 1 TEST", assert => {
//         const message = "returns negative of that number.  Your function  Should return -4";
//         const expected = [1, 2, 3, 4, 5, 6];
//         const actual = simpleLoop(6);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // ---------------------------------------------Area of a Rectangle-------------------------------------------
// test("---------Area of a Rectangle---------", t => {
//     t.test("TEST 1 :  getArea", assert => {
//         const message = "returns negative of that number.  Your function  Should return 12";
//         const expected = 12;
//         const actual = getArea(3, 4);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 :  getArea", assert => {
//         const message = "returns negative of that number.  Your function  Should return 110";
//         const expected = 110;
//         const actual = getArea(10, 11);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 3 :  getArea", assert => {
//         const message = "returns negative of that number.  Your function  Should return -1";
//         const expected = -1;
//         const actual = getArea(-1, 5);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 4 :  getArea", assert => {
//         const message = "returns negative of that number. Your function  Should return -1";
//         const expected = -1;
//         const actual = getArea(0, 2);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // -----------------------------------------------Two Makes Ten-----------------------------------------
// test("---------Two Makes Ten---------", t => {
//     t.test("TEST 1 :  makesTen", assert => {
//         const message = "Your function  Should return true";
//         const expected = true;
//         const actual = makesTen(9, 10);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 :  makesTen", assert => {
//         const message = "Your function  Should return false";
//         const expected = false;
//         const actual = makesTen(9, 9);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 3 :  makesTen", assert => {
//         const message = "Your function  Should return true";
//         const expected = true;
//         const actual = makesTen(1, 9);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // ----------------------------------Add up the Numbers from a Single Number------------------------------------------------------
// test("---------Add up the Numbers from a Single Number---------", t => {
//     t.test("TEST 1 : addUp", assert => {
//         const message = "Your function  Should return 10";
//         const expected = 10;
//         const actual = addUp(4);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 : addUp", assert => {
//         const message = "Your function  Should return 91";
//         const expected = 91;
//         const actual = addUp(13);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 3 : addUp", assert => {
//         const message = "Your function  Should return 180300";
//         const expected = 180300;
//         const actual = addUp(600);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

// // ----------------------------------Matchstick Houses------------------------------------------------------
// test("---------Matchstick Houses---------", t => {
//     t.test("TEST 1 : matchHouses", assert => {
//         const message = "Your function  Should return 6";
//         const expected = 6;
//         const actual = matchHouses(1);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 2 : matchHouses", assert => {
//         const message = "Your function  Should return 21";
//         const expected = 21;
//         const actual = matchHouses(4);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test(" TEST 3 : matchHouses", assert => {
//         const message = "Your function  Should return 31";
//         const expected = 31;
//         const actual = matchHouses(6);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
//     t.test("TEST 4 : matchHouses", assert => {
//         const message = "Your function  Should return 436";
//         const expected = 436;
//         const actual = matchHouses(87);

//         assert.equal(actual, expected, message);
//         assert.end();
//     });
// });

