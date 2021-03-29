let closedFullAds = 0
let closedOverlayAds = 0
const checkMe = () => {
  try {
    document.querySelector('.ytp-ad-overlay-close-button').click()
    closedOverlayAds += 1
  } catch (e) { }
  try {

    document.querySelector('.ytp-ad-skip-button').click()
    closedFullAds += 1
  } catch (e) { }
}

(async () => {
  setInterval(() => checkMe(), 500)
})()