import { checkBirthday } from './birthday';
import Party from '../scripts/party';
import { greetings } from '../scripts/greetingsList';

const greetingContainer = document.getElementById("greeting");
const greetingText = document.getElementById("greetText");
const countdownContainer = document.getElementById("countdown");
const countText = document.getElementById("countText");

let intervalId = null;
export default function App(){  
    let isBirthday = false;

    intervalId = setInterval(() => {
        const resultObj = checkBirthday({day: 4, month: 1,year:2021});

        if (resultObj.isBirthday == true) {
           onBirthday();
        }
        else {
            onCountdownUpdate(resultObj);
        }
    }, 1000);
    console.log("running from app");    
}

function onBirthday() {
    clearInterval(intervalId);
    greetingContainer.classList.remove("hidden");
    countdownContainer.classList.add("hidden");
    Party();

    for (let i = 0; i < greetings.length; i+=1){
        setTimeout(()=>{
            greetingText.innerHTML = greetings[i];
        }, 1500*(i+1));
    }
    updateTitle("❤ HBD Noor! ❤");
}

function updateTitle(newTitle) {
    document.title = newTitle;
    console.log(newTitle);
}

function onCountdownUpdate(respObj) {    
    updateTitle(respObj.text);

    const dur = respObj.duration;
    const durInSecond = dur.as("second");
    const hours = durInSecond/3600;
    const minutes = (durInSecond%3600)/60;
    const seconds = durInSecond % 60;
    let durStr = `Time left: ${hours.toFixed(0)}:${minutes.toFixed(0)}:${seconds.toFixed(0)}`;
    
    countText.textContent = durStr;
}