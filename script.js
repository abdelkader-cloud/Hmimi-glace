const hoursToggle = document.querySelector(".hours-toggle");
const hoursContent = document.querySelector("#hours-list");
const hoursCard = document.querySelector(".hours-card");
const shopStatus = document.querySelector("#shop-status");

hoursToggle.addEventListener("click", () => {
    const expanded = hoursToggle.getAttribute("aria-expanded") === "true";
    hoursToggle.setAttribute("aria-expanded", String(!expanded));
    hoursContent.hidden = expanded;
});

function updateShopStatus() {
    const timeParts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Algiers",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
    }).formatToParts(new Date());
    const hour = Number(timeParts.find(part => part.type === "hour").value);
    const minute = Number(timeParts.find(part => part.type === "minute").value);
    const isOpen = hour * 60 + minute >= 7 * 60 + 30;

    shopStatus.textContent = isOpen ? "Ouvert" : "Fermé";
    hoursCard.classList.toggle("is-open", isOpen);
}

updateShopStatus();
window.setInterval(updateShopStatus, 60_000);