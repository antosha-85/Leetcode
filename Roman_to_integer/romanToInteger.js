var romanToInt = function(s) {
    const dic = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
    };
    const reverseArr = [...s].reverse();
    console.log('beforeForEach', reverseArr)
    let level = 0;
    let sum = 0;
    reverseArr.forEach(item => {
      const newLevel = dic[item];
        console.log('newLevel for each iterations', newLevel);
      if (newLevel >= level) {
        sum += newLevel;
          console.log('sum', sum)
        level = newLevel;
         console.log('level inside iterations', level)
      } else {
        sum -= newLevel;
          console.log('sum inside else', sum)
      }
    });
    return sum;
};

console.log(romanToInt("MCMXCIV"))