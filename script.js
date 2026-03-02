
import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"

const app = TubesCursor(document.getElementById('canvas'), {
  tubes: {
    colors: ["#f11b1b", "#139f40", "870b54", "#000000"],
    lights: {
      intensity: 100,
      colors: ["#f11b1b", "#139f40", "#870b54", "#2b4f11", "#000000"]
    }
  }
})

document.body.addEventListener('click', () => {
  const colors = randomColors(4)
  const lightsColors = randomColors(5)
  console.log(colors, lightsColors)
  app.tubes.setColors(colors)
  app.tubes.setLightsColors(lightsColors)
})

function randomColors (count) {
    return new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'))
}
