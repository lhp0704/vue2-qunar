let defaultCity = "北京"
try {
  if (localStorage.currentCity) {
    defaultCity = localStorage.currentCity
  }
} catch (e) {}

const state = {
  currentCity: defaultCity
}

export default state
