import { DateTime } from 'luxon';

const defaultOpt = {
    day: 4, month: 1, year: 2021,
    testDate: null
};

function getNToGo(num, text) {
    let str = num < 2 ? text : text.concat("s");
    return `${Math.round(num)} ${str} to go!`;
}

export function checkBirthday(opt = defaultOpt) {
    const respObj = {
        text: null,
        isBirthday: null,
        duration: null
    };

    const birthdate = DateTime.fromObject({ year: opt.year, day: opt.day, month: opt.month, hour: 0, minute: 0, second: 0 });

    // initialize with current local time when called not called for testing purpose
    const targetDate = opt.testDate == null ? DateTime.local() : DateTime.fromObject(opt.testDate);
    const dateDiff = birthdate.diff(targetDate);

    if (dateDiff.as("second") <= 0) {
        console.log("Happy Birthday!");
        respObj.isBirthday = true;
        return respObj;
    }

    respObj.isBirthday=false;
    respObj.duration = dateDiff;

    const diffDay = dateDiff.as("days");
    const diffHour = dateDiff.as("hours");
    const diffMin = dateDiff.as("minutes");
    const diffSecond = dateDiff.as("seconds");

    if (diffHour >= 24) {
        respObj.text = getNToGo(diffDay, "day");
    }
    else if (diffHour >= 1) {
        respObj.text = getNToGo(diffHour, "hour");
    }
    else if (diffMin >= 1) {
        respObj.text = getNToGo(diffMin, "minute");
    }
    else {
        respObj.text = `${diffSecond.toFixed(0)}!`;
    }
    
    return respObj;
}
