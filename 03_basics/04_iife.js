//  Immediately Invoked Function Expression (IIFE)

(function chai() { 
    // named iife (chai)
    console.log("DB one connected");
    
})();

((name) => {  // simple iife or un-named iife
    console.log(`DB two connected by ${name}`);
    
})("akash")