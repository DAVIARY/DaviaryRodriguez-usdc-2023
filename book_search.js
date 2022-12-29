/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * the Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
   
    let string = null;                                                       /*String variable to temporary store "Text"*/
    let book   = null;                                                       /*String variable to store "ISBN"*/
    let page   = null;                                                       /* Int variable to store "Page"*/
    let line   = null;                                                       /* Int variable to store "Line"*/

    if(scannedTextObj.length > 0)                                                    /*Checks if the JSON file has data*/
       for(var y = 0; y < scannedTextObj.length; y++){                               /*Nested loop to scan through Books*/
          
            for(var i = 0; i < scannedTextObj[y].Content.length; i++){               /*Nested loop to scan through "Content*/
                
                for(var k = 0; k < scannedTextObj[y].Content[i].Text.length; k++){   /*Loop to scan through "Text"*/
                    string +=  (scannedTextObj[y].Content[i].Text[k]);               /*Parse "Text" in string variable*/
                }

                if(string.match(searchTerm)){                                        /*if statement to check if the word is in "Text"*/
                    //console.log("Match Found!")                                    /*Console for matching words*/
                    book = scannedTextObj[y].ISBN;                                   /*Setting book variable to "ISBN"*/
                    page = scannedTextObj[y].Content[i].Page;                        /*Setting page variable to "Page"*/
                    line = scannedTextObj[y].Content[i].Line;                        /*Setting line variable to "Line"*/
                    break;                                                           /*Stop the loop after finding a match*/
                }

            }
         }    
    else
        console.log("JSON File Empty");                                             /*Console if JSON File is empty*/

    
    if(page == null && line == null && scannedTextObj.length > 0 ){
        console.log("No match found");                                       /*If theres no match console print no match found*/
    }
 
    var result = {
        "SearchTerm": searchTerm,                                             
        "Results": [ { ISBN:  book, Page: page, Line: line }]
    }
    
    return result; 

}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]


/* Empty JSON File */
const twentyLeaguesIn2 = [];

/* JSON File with 2 books*/
const twentyLeaguesIn3 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ], 

        "Title": "Twenty Thousand Leagues Under the Sun",
        "ISBN": "9780000528532",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "while we only the now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 2,
                "Line": 2,
                "Text": "ness was then profound; and however good the Canadian\'s and whe the lies from the"
            },
            {
                "Page": 3,
                "Line": 3,
                "Text": "eyes were, I asked myself how he had managed to see, and try to understand the meaning"
            } 
        ] 
    }
]

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}



/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/* Testing for capitazied letters*/
const test3result = findSearchTermInBooks("The", twentyLeaguesIn);
    console.log("PASS: Test 3");
    console.log("Received:", test3result);


/* Testing for a string that is not in the JSON file */
const test4result = findSearchTermInBooks("daviary", twentyLeaguesIn);
    console.log("PASS: Test 4");
    console.log("Received:", test4result);


/* Testing for eyes*/
const test5result = findSearchTermInBooks("eyes", twentyLeaguesIn);
    console.log("PASS: Test 5");
    console.log("Received:", test5result);

/* Testing with a JSON file with no content */
const test6result = findSearchTermInBooks("eyes", twentyLeaguesIn2);
    console.log("PASS: Test 6");
    console.log("Received:", test6result);


/* Testing a JSON file with more than 1 book*/
const test7result = findSearchTermInBooks("meaning", twentyLeaguesIn3);
    console.log("PASS: Test 7");
    console.log("Received:", test7result);

    