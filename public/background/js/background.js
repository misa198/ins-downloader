/* global chrome */
chrome.tabs.onActivated.addListener(function (info) {
  chrome.tabs.get(info.tabId, function (change) {
    if (change.url === undefined) {
      // Url is null
      chrome.browserAction.setPopup({
        tabId: info.tabId,
        popup: "background/template/index.html",
      });
      chrome.browserAction.setIcon({
        path: "logo64-disabled.png",
        tabId: info.tabId,
      });
    } else if (change.url.match(/https:\/\/www.instagram\.com\/*/) === null) {
      // Url not match
      chrome.browserAction.setPopup({
        tabId: info.tabId,
        popup: "background/template/index.html",
      });
      chrome.browserAction.setIcon({
        path: "logo64-disabled.png",
        tabId: info.tabId,
      });
    } else {
      // Url match
      chrome.browserAction.setPopup({
        tabId: info.tabId,
        popup: "index.html",
      });
      chrome.browserAction.setIcon({
        path: "logo64.png",
        tabId: info.tabId,
      });
    }
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, change, tab) {
  if (tab.url === undefined) {
    return;
  } else if (tab.url.match(/https:\/\/www.instagram\.com\/*/) === null) {
    chrome.browserAction.setPopup({ tabId: tabId, popup: "" });
    chrome.browserAction.setIcon({
      path: "logo64-disabled.png",
      tabId: tabId,
    });
  } else {
    chrome.browserAction.setPopup({
      tabId: tabId,
      popup: "index.html",
    });
    chrome.browserAction.setIcon({ path: "logo64.png", tabId: tabId });
  }
});
