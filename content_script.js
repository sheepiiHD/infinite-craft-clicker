let clicking = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "start") {
        clicking = true;
        console.log("clicking")
        startClicking();
    } else if (request.action == "stop") {
        clicking = false;
        console.log("stop clicking")
    }
});
function startClicking() {
    // Check if the current page is not the intended URL
    if (window.location.href !== "https://neal.fun/infinite-craft/") {
        alert("Navigate to https://neal.fun/infinite-craft/, then start");
        clicking = false; // Optionally stop clicking if on the wrong page
        return; // Exit the function if not on the correct page
    }

    if (!clicking) return;

    const items = document.querySelectorAll('.mobile-item .item');
    if (items.length > 0) {
        const itemToClick = items[Math.floor(Math.random() * items.length)];
        itemToClick.click();

        setTimeout(startClicking, 10); // Adjust time as needed
    }
}
