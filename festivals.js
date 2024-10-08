function countdown(dateString, elementId) {
    const eventDate = new Date(dateString).getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(elementId).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(elementId).innerHTML = "Event Started!";
        }
    }, 1000);
}

// Example for a countdown to Diwali
countdown("Nov 4, 2024 00:00:00", "diwali-countdown");
