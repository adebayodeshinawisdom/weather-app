// console.log("Start");

// setTimeout(() => {
//     console.log("First task done");

//     setTimeout(() => {
//         console.log("Second task done");

//         setTimeout(() => {
//             console.log("Third task done");

//             setTimeout(() => {
//                 console.log("Fourth task done");
//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);

// console.log("End");


// console.log("Start")


// setTimeout(() => {
//     console.log("First Task done");

//     setTimeout(() => {
//         console.log("second Task done");
        
//         setTimeout(() => {
//             console.log("Third Task done")

//             setTimeout(() => {
//                 console.log("Fouth Task done")
//                 console.log("End")
//             })
//         })
//     })
// })


const myPromise = new Promise((resolve, reject) => {
    const error = true;
    if(!error){
        resolve("Yes! promise has been resolved")
    }else{
        reject("No! Promise is not resolved")
    }
    
})

console.log(myPromise)

myPromise.then(value => {
    return value + " with great progress ";
})
.then(newValue => {
    console.log(newValue)
})
.catch(err => {
    console.error(err)
})

async function fetchWeather() {

     // Your OpenWeatherMap API key
    const city = 'London';
    // Corrected URL without single quotes around the API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
   
  }

  fetchWeather()


  