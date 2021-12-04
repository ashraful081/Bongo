// Is two strings are an anagram?
function compare (a, b) {
     c = 0;
     y = a.split("").sort();
     z = b.split("").sort();
     for (i=0; i<y.length; i++) {
        if(y.length===z.length) {
           if(y[i]===z[i]){
             ++c;
           }
        }
     }

     if(c === y.length && c=== z.length)
     {
         console.log(a + " and " + b + " are anagrams");
     }
     else if(y.length !== z.length)
     {
         console.log(a + " has a different amount of letters than " + b);
     }
     else
     {
         console.log(a + " and " + b + " are not");
     }
}

compare("eat", "tar");