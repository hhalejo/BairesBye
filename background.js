chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    
    if (tab.url && tab.url.includes("computrabajo.com") && changeInfo.status === "complete") {
        
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content/DeleteArticles.js']
        });
    }
});

