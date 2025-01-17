// background.js

// Listen for when a Gladiatus page is opened
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('gladiatus.gameforge.com')) {
      // Inject content script into the game page
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
      });
      console.log('Content script injected into Gladiatus page');
    }
  });
  