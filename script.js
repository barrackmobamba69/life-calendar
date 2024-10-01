// function calculateWeeks() {
//     const birthdate = new Date(document.getElementById('birthdate').value);
//     const today = new Date();
//     const lifeExpectancy = parseInt(document.getElementById('lifeExpectancy').value);

//     const totalWeeks = lifeExpectancy * 52; // 52 weeks in a year

//     const timeDiff = today - birthdate;

//     const passedWeeks = Math.floor(timeDiff / (7 * 24 * 60 * 60 * 1000));

//     const passedYears = Math.floor(passedWeeks / 52);

//     console.log(`Passed weeks: ${passedWeeks}, Passed years: ${passedYears}`);

//     const container = document.getElementById('weeks-container');
//     container.innerHTML = '';

//     for (let i = 0; i < totalWeeks; i++) {
//         const week = document.createElement('div');
//         week.className = 'week';
//         if (i < passedWeeks) {
//             week.classList.add('passed');
//         }
//         if (i === passedWeeks) {
//             week.classList.add('current-week');
//         }
//         container.appendChild(week);
//     }
// }


function calculateWeeks() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    let lifeExpectancy = parseInt(document.getElementById('lifeExpectancy').value);

    // Ensure life expectancy doesn't exceed 101 years
    lifeExpectancy = Math.min(lifeExpectancy, 100);

    const weeksPerYear = 52;
    const totalWeeks = lifeExpectancy * weeksPerYear;
    const passedWeeks = Math.floor((today - birthdate) / (7 * 24 * 60 * 60 * 1000));

    const lifeGrid = document.getElementById('life-grid');
    lifeGrid.innerHTML = '';

    for (let year = 0; year < lifeExpectancy; year++) {
        const yearRow = document.createElement('div');
        yearRow.className = 'year-row';

        if (year % 10 === 0) {
            const ageMarker = document.createElement('div');
            ageMarker.className = 'age-marker';
            ageMarker.textContent = year;
            yearRow.appendChild(ageMarker);
        } else {
            const smallAgeMarker = document.createElement('div');
            smallAgeMarker.className = 'small-age-marker';
            smallAgeMarker.textContent = year;
            yearRow.appendChild(smallAgeMarker);
            // yearRow.appendChild(document.createElement('div'));
        }

        for (let week = 0; week < weeksPerYear; week++) {
            const weekElement = document.createElement('div');
            weekElement.className = 'week';
            const currentWeek = year * weeksPerYear + week;
            if (currentWeek < passedWeeks) {
                weekElement.classList.add('passed');
            }
            if (currentWeek === passedWeeks) {
                weekElement.classList.add('current-week');
            }
            yearRow.appendChild(weekElement);
        }

        lifeGrid.appendChild(yearRow);
    }

    console.log(`Passed weeks: ${passedWeeks}, Passed years: ${Math.floor(passedWeeks / 52)}`);
    console.log(`Life expectancy used: ${lifeExpectancy} years`);
}