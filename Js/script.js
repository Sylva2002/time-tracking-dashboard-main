let time_data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

function periodDetec(period) {
  switch (period) {
    case "daily":
      return "Yesterday";
      break;
    case "weekly":
      return "Last Week";
      break;
    case "monthly":
      return "Last Month";
      break;
    default:
      return "Error";
      break;
  }
}

// ------ button active -------------
const menuBtn = document.querySelectorAll(".menu-btn");

let btnActiveValue = btninit(); // bouton initial
// recherche du bouton inital
function btninit() {
  let result;
  menuBtn.forEach((btn) => {
    if (btn.classList.contains("active")) {
      result = btn.value;
    }
  });
  return result;
}

const currentHours = document.querySelectorAll(".current");
const previousHours = document.querySelectorAll(".previous");
const period = document.querySelectorAll(".period");
UpdateElements();

function btnDesativated() {
  menuBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
}

menuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnDesativated();
    btn.classList.add("active");
    btnActiveValue = btn.value;

    UpdateElements();
  });
});

// ------ button active end -------------

function UpdateElements() {
  currentHours.forEach((element, index) => {
    element.textContent = time_data[index].timeframes[btnActiveValue].current;
  });

  previousHours.forEach((element, index) => {
    element.textContent = time_data[index].timeframes[btnActiveValue].previous;
  });
  period.forEach((element) => {
    element.textContent = periodDetec(btnActiveValue);
  });
}

// text echouer

// creation des elements qui sont dans activity-info
/* activityInfoContainer.forEach((element, index) => {
  let activityInfoContent = document.createElement("div");
  activityInfoContent.innerHTML = `<div class="title"> <h2> ${
    time_data[index].title
  } </h2> <button><ion-icon name="ellipsis-horizontal"></ion-icon></button> </div> <div class="infos"> <p> <strong> <span> ${
    time_data[index].timeframes[btnActiveValue].current
  }</span>hrs </strong> </p> <p> <span> ${periodDetec(
    btnActiveValue
  )} </span> - <span> ${
    time_data[index].timeframes[btnActiveValue].previous
  } </span>hrs</p> </div>`;

  element.appendChild(activityInfoContent);
}); */
