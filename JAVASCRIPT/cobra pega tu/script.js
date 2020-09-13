let moveNextHorizontal = 0;
let moveNextVertical = 0;
const MAXCOL = 6;

const getScenario = () => {
    const scenario = document.getElementById("scenario")
    .getElementsByClassName("row")[2]
    .getElementsByClassName("column")[5]
    .style.background = "#C8E6C9";

    console.log(scenario);
};

getScenario();

const moveHorizontal = (pos) => {
    const scenario = document.getElementById("scenario");
    const scenarioRow = scenario.getElementsByClassName("row")[moveNextVertical];
    const scenarioColumns = scenarioRow.getElementsByClassName("column");

    if(moveNextHorizontal > -1) {
        scenarioColumns[moveNextHorizontal].style.background = "#FFFFFF";
    }
    

    if(pos === "right" && moveNextHorizontal < 6) {
        moveNextHorizontal += 1;
    } else if(pos === "right") {
        moveNextHorizontal = 0;
    }

    if(pos === "left" && moveNextHorizontal > 0) {
        moveNextHorizontal -= 1;
    } else if(pos === "left") {
        moveNextHorizontal = 6;
    }

    scenarioColumns[moveNextHorizontal].style.background = "#C8E6C9";
    console.log(scenario, moveNextHorizontal);
};

const moveVertical = (pos) => {
    const scenario = document.getElementById("scenario");
    let scenarioRow = scenario.getElementsByClassName("row")[moveNextVertical];
    let scenarioColumns = scenarioRow.getElementsByClassName("column");

    if(moveNextVertical > 0) {
        scenarioColumns[moveNextHorizontal].style.background = "#FFFFFF";
    }
    

    if(pos === "up" && moveNextVertical > 0) {
        moveNextVertical -= 1;
    } else if(pos === "up") {
        moveNextVertical = 6;
    }

    if(pos === "down" && moveNextVertical < 6) {
        moveNextVertical += 1;
    } else if(pos === "down") {
        moveNextVertical = 0;
    }

    scenarioRow = scenario.getElementsByClassName("row")[moveNextVertical];
    scenarioColumns = scenarioRow.getElementsByClassName("column");

    scenarioColumns[moveNextHorizontal].style.background = "#C8E6C9";
    console.log(scenario, moveNextHorizontal);
};


const pressedKey = () => {
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return; // Do nothing if the event was already processed
        }
      
        switch (event.key) {
          case "Down": // IE/Edge specific value
          case "ArrowDown":
            moveVertical("down")
            break;
          case "Up": // IE/Edge specific value
          case "ArrowUp":
            moveVertical("up")
            break;
          case "Left": // IE/Edge specific value
          case "ArrowLeft":
            moveHorizontal("left");
            break;
          case "Right": // IE/Edge specific value
          case "ArrowRight":
            moveHorizontal("right");
            break;
          case "Enter":
            // Do something for "enter" or "return" key press.
            break;
          case "Esc": // IE/Edge specific value
          case "Escape":
            // Do something for "esc" key press.
            break;
          default:
            return; // Quit when this doesn't handle the key event.
        }
      
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
      }, true);
};

pressedKey();