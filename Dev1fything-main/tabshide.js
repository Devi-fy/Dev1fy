// Get the value of the "tabiconhide" cookie
const tabIconHide = getCookie('tabiconhide');

function checktabiconhide() {
if (tabIconHide === 'true') {
    document.querySelector('link[rel="icon"]').href = 'https://www.google.com/favicon.ico';
    document.title = "Google";
  }
}

// Helper function to get a cookie
function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

checktabiconhide()
setTimeout(checktabiconhide(), 5000);