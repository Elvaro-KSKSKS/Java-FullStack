AOS.init({
    delay: 400,
    once: true,
});

const eventDate = new Date("Jan 12, 2026 19:00:00");
const eventTimeStamp = eventDate.getTime();

const hourCounter = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const remainingTimeToEvent = eventTimeStamp - currentTimeStamp;

    const daysInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;

    const remainingDaysToEvent = Math.floor(remainingTimeToEvent / daysInMs);
    const remainingHoursToEvent = Math.floor((remainingTimeToEvent % daysInMs) / hourInMs);
    const remainingMinutesToEvent = Math.floor((remainingTimeToEvent % hourInMs) / minuteInMs);
    const remainingSecondsToEvent = Math.floor((remainingTimeToEvent % minuteInMs) / 1000);

    document.getElementById('counter').innerHTML = `${remainingDaysToEvent}d ${remainingHoursToEvent}h ${remainingMinutesToEvent}m ${remainingSecondsToEvent}s`;

    if(remainingTimeToEvent < 0) {
        clearInterval(hourCounter);
        document.getElementById('counter').innerHTML = '(Evento expirado)';
    }

}, 1000);