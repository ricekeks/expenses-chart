let container = document.getElementById("chartContainer");
const date = new Date();

fetch('data.json').then(function (res) {
    return res.json();
}).then(function (obj){

    for(let i = 0; i < obj.length; i++){ // For all entries in our JSON

        let col = document.createElement('div'); // Create col-Element
        col.classList.add('col'); // Give it the 'col'-class

        let barContainer = document.createElement('div'); // Create bar-container-Element
        barContainer.classList.add('bar-container'); // Give it the 'bar-container'-class

        let bar = document.createElement('div'); // Create bar-Element
        bar.classList.add('bar'); // Give it the 'bar'-class
        bar.classList.add('tooltip'); // Give it the 'tooltip'-class
        bar.style.height = obj[i].amount + '%'; // Give it the height-attribute acording to the JSON value

        let tooltipDisplay = document.createElement('span'); // Create tooltipDisplay-Elements
        tooltipDisplay.classList.add('tooltiptext'); // Give it the 'tooltiptext'-class
        tooltipDisplay.innerHTML = obj[i].amount + '$'; // Give it the amount spent

        curDay = date.getDay() - 1; // Get current day of the week 0-6, 0 = Sunday and translate it to 0 = Monday by substracting 1
        if(curDay < 0){  // If curDay is lower than 0
            curDay = 7; // Set curDay to Sunday
        }

        if(i == date.getDay() -1){ // Is the current iteration EQUAL to the current day of the week (0-6, 0 = Sunday)
            bar.classList.add('today') // Give it the 'today'-class
        }

        let day = document.createElement('p'); // Create day-Element
        day.innerHTML = obj[i].day; // Give it the name of day acording to the JSON value

        bar.appendChild(tooltipDisplay); // Append the tooltipDisplay to the bar
        barContainer.appendChild(bar); // Append the bar to the bar-container
        col.appendChild(barContainer); // Append the bar-container to the col
        col.appendChild(day); // Append the day to the col
        container.appendChild(col); // Append the col to the chart-container-Element

    }

}).catch(function (error){
    console.error('Something went wrong retrieving the JSON-data.');
    console.error(error);
});