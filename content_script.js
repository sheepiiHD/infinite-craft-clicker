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
        clicking = false;
        return;
    }

    if (!clicking) return;

    const items = document.querySelectorAll('.mobile-item .item');
    if (items.length > 0) {
        const itemToClick = items[Math.floor(Math.random() * items.length)];
        itemToClick.click();

        // Updated delay to 250ms to comply with Cloudflare's 1200 requests per 5 minutes limit
        setTimeout(startClicking, 250);
    }
}
