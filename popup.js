document.getElementById('start').addEventListener('click', function() {
    console.log('Start button clicked');
    (async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const shouldMute = document.getElementById('muteTab').checked;
        if (shouldMute && !tab.mutedInfo.muted) {
            await chrome.tabs.update(tab.id, {muted: true});
        }
        const response = await chrome.tabs.sendMessage(tab.id, {action: "start"});
        console.log(response);
    })();
});

document.getElementById('stop').addEventListener('click', function() {
    console.log('Stop button clicked');
    (async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        if (tab.mutedInfo.muted) {
            await chrome.tabs.update(tab.id, {muted: false});
        }
        const response = await chrome.tabs.sendMessage(tab.id, {action: "stop"});
        console.log(response);
    })();
});
