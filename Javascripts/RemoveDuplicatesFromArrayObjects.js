// To remove duplicate objects from an array based on specific properties (like id and name in this case), 
// the filter() method combined with a Set or an object to track seen values is an effective approach.


    let arr = [
      { id: 1, name: "Geek1" },
      { id: 2, name: "Geek2" },
      { id: 1, name: "Geek1" },
      { id: 3, name: "Geek3" },
    ];


// Output: [
//       { id: 1, name: "Geek1" },
//       { id: 2, name: "Geek2" },
//       { id: 3, name: "Geek3" },
//     ];




// 1. Easy one:  

    function removeDuplicates(arr) {
      
      const uniqueArr = []
      
      return arr.filter(item => {
        
        const uniqueIdentifier = `${item.id}-${item.name}`; // Create a unique string for each object
        
        if (uniqueArr.includes(uniqueIdentifier)) {
          return false; // Duplicate found, filter it out
        } else {
          uniqueArr.push(uniqueIdentifier); // Add to seen set
          return true; // Unique, keep it
        }
      });
    }
    
    const uniqueArr = removeDuplicates(arr);
    console.log(uniqueArr);


// or 

    function removeDuplicates(arr) {
      
      const uniqueObjectKeys = []
      const filteredUniquArr = []
      
      arr.map(item => {
        const uniqueIdentifier = `${item.id}-${item.name}`; 
        
        if (!uniqueObjectKeys.includes(uniqueIdentifier)) {
          uniqueObjectKeys.push(uniqueIdentifier); 
          filteredUniquArr.push(item)
        }
      });
      return filteredUniquArr
    }
    
    const uniqueArr = removeDuplicates(arr);
    console.log(uniqueArr);


// or

    function removeDuplicates(arr) {
      
      const seen = new Set();
      
      console.log(typeof(seen))  
      // Set of Objects
      // Set(1) { '1-Geek1' }
      // Set(2) { '1-Geek1', '2-Geek2' }
      // Set(3) { '1-Geek1', '2-Geek2', '3-Geek3' }

      
            
      return arr.filter(item => {
        const uniqueIdentifier = `${item.id}-${item.name}`; // Create a unique string for each object
        if (seen.has(uniqueIdentifier)) {
          return false; // Duplicate found, filter it out
        } else {
          seen.add(uniqueIdentifier); // Add to seen set
          console.log(seen)
          return true; // Unique, keep it
        }
      });
    }
    
    const uniqueArr = removeDuplicates(arr);
    console.log(uniqueArr);


// or

 function removeDuplicates(arr) {
        let map = new Map();
        
        // Removing duplicate objects using map
        let uniqueArr = [];
        
        arr.forEach((obj) => {
            
            const key = JSON.stringify(obj);
            if (!map.has(key)) {
                map.set(key, true);
                uniqueArr.push(obj);
            }
        });
    }
    
    const uniqueArr = removeDuplicates(arr);
    console.log(uniqueArr);
