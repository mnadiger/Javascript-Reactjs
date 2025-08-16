function findMajorityInArray(nums) {
      let majarotyCandidate = nums[0];
      let majorityCount = 1;
      
      for(let i=1; i < nums.length; i++) {
        
        if(nums[i] == majarotyCandidate) {
          majorityCount +=1;
        } else {
          majorityCount -=1;
          
          if(majorityCount == 0) {
            majarotyCandidate = nums[i];
            majorityCount = 1;
          }
        }
      }
      return majarotyCandidate;
    }

const nums= [ 2, 2, 3,3,3,3,3,3, 2, 2,1]

console.log(findMajorityInArray(nums))
