import { checkBirthday } from '../scripts/birthday';

export default function testApp() {
    // Day
    for (let dy = 3; dy <= 5; dy += 1) {
        const testDate = new Object();
        testDate.day = dy;
        testDate.month = 1;
        
        // Hours
        for(let hr = 22; hr <= 23; hr += 1){
            testDate.hour = hr;
            
            // Minutes
            for (let min = 0; min < 59; min += 1){
                testDate.minute = min;
                
                // Seconds
                for (let sec = 0; sec < 59; sec += 1){
                    testDate.second = sec;

                    if ((sec > 50 || sec <= 10) && (min > 50 || min <= 10)) {
                        console.log("Current Test Object Date: ", testDate);
                        checkBirthday({day:4,month: 1,year:2021, testDate});
                        console.log("\n");
                    }
                }
            }
        }
    }
    
    // const testDate = { day: 2, month: 1, year: 2021, hour: 2, minute: 5 };
    // console.log("Current Test Object Date: ", testDate);
    // checkBirthday({ day: 4, month: 1, testDate });
    // console.log("\n");
}