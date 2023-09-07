// Set up a function to run at regular intervals (every 1000 milliseconds, or 1 second)
setInterval(() => {
    // Get the current date and time
    d = new Date();
    
    // Extract hours, minutes, and seconds from the current time
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    
    // Calculate the rotation angles for the clock hands
    // Hour hand rotates 30 degrees per hour plus half a degree for each minute
    hroatation = 30 * htime + mtime / 2;
    // Minute hand rotates 6 degrees per minute
    mroatation = 6 * mtime;
    // Second hand also rotates 6 degrees per second
    sroatation = 6 * stime;

    // Apply the rotation angles to the clock hands using CSS transforms
    hour.style.transform = `rotate(${hroatation}deg)`;
    minute.style.transform = `rotate(${mroatation}deg)`;
    second.style.transform = `rotate(${sroatation}deg)`;
}, 1000); // Run this code every 1000 milliseconds (1 second)
