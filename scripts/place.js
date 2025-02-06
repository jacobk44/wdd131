const footerElement = document.getElementById("year");
const currentYear = new Date().getFullYear();

footerElement.innerHTML = `<span> ©${currentYear} ❤ Jacob Amoah ❤ Greater Accra`;



function setLastModified(){
    const modifiedDate = document.lastModified;
    document.querySelector("#lastModified").textContent = `LastModified: ${modifiedDate}`;
}

setLastModified();


const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp,speed){
    return (
        13.12 + 
        0.6215 * temp - 11.37 * Math.pow(speed, 0.16)

    +  0.3965 * temp * Math.pow(speed, 0.16) 
    ).toFixed(1);
}

function displayWindChill(){
    const windChillElement = document.getElementById("wind-chill");

    if (temperature <= 10 && windSpeed > 4.8){
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} ℃`;

    }else{windChillElement.textContent = "N/A";

    }
}

window.onload = displayWindChill;