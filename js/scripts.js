function date() {
    const datePlace = document.querySelector('.data-info');
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';
    
    setInterval(t=> {
        const date = new Date()
        datePlace.innerHTML = date.toLocaleString(options);
        
    
    }, 1000)
}

date()