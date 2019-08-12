chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: details.url.replace('zoom.us/j/', 'zoom.us/wc/join/') };
  },
  {
    urls: [
      "*://zoom.us/j/*",
      "*://*.zoom.us/j/*"
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);
