// Trigger the automation when clicking the button in the popup


document.getElementById('startButton').addEventListener('click', () => {
  // Send a message to the content script to start automation
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { command: "startAutomation" }, (response) => {
      console.log(response.status);
    });
  });
});
