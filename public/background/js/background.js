/* global chrome */
const insPostRegex = new RegExp("(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/p\/([A-Za-z0-9-_]+)");
const storyRegex = new RegExp("(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/stories\/([A-Za-z0-9-_]+)\/[0-9]+");

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
    } else if (change.url.match(insPostRegex) === null && change.url.match(storyRegex) === null) {
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
  } else if (tab.url.match(insPostRegex) === null && tab.url.match(storyRegex) === null) {
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
