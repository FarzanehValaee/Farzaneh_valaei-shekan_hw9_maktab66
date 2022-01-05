function timeToEat(str){
          const habitualEat = ["breakfast","lunch","dinner"]
          const habitualEatHoures = ["7.00","12.00","19.00"]
          let seprate = str.split(" ")
          let time = seprate[0].split(":")
          time[0]=Number(time[0])
          time[1]=Number(time[1])
          let meat 
          if(seprate[1]==="p.m."){
                    time[0]+=12;
          }
          const allTimes = habitualEatHoures.map(
                    (value) =>{
                      if((Number(value) - time[0])>0){
                                if(time[1]=== 0){
                                        return Number(value) - time[0]
                                }
                                else{
                                          time[1]=60 -time[1]
                                          return Number(value) - time[0]-1
                                          
                                          
                                }
                      }
                      else{
                                return Infinity
                      }
                    }
                    );
          let minHour=Math.min(...allTimes)
          let index = allTimes.findIndex(value => value ===minHour);
          meat = habitualEat[index]


          
          
          switch(true) {
                    case ((minHour===0)&&(time[1]===0)):
                      return`time to eat ${meat}`
                    case ((minHour===0)&&(time[1]>1)):
                      return `${time[1]} minutes until the next meal, ${meat}`
                    case ((minHour===0)&&(time[1]===1)):
                              return `${time[1]} minute until the next meal, ${meat}`
                    case((minHour===1)&&(time[1]>1)):
                       return `${minHour} hour and ${time[1]} minutes until the next meal, ${meat}`
                    case((minHour===1)&&(time[1]===1)):
                       return `${minHour} hour and ${time[1]} minute until the next meal, ${meat}`
                    case(time[1]===0):
                      return `${minHour} hour until the next meal, ${meat}`
                    case((minHour>1)&&(time[1]===1)):
                      return `${minHour} hours and ${time[1]} minute until the next meal, ${meat}`
                   
                    default:
                      return `${minHour} hours and ${time[1]} minutes until the next meal, ${meat}`      
                      
          }                  
}
console.log(timeToEat("2:00 p.m."))
console.log(timeToEat("5:59 a.m."))