const myChart = document.getElementById("mychart");

// fetch data
function fetchJsonData() {
  fetch("./data.json")
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      const jsonArray = data;
      // map the data
      myChart.innerHTML = jsonArray.map(generateData).join("");
    });
}

fetchJsonData();

function generateData(item) {
  const data = getCurrentDay(item.day);
  const currency = "$" + item.amount;

  return `
  <div class=" relative flex flex-col w-6 gap-2 items-center mx-auto text-xs">
  <span id="bar" class="${
    data == true ? "bg-Cyan" : "bg-Soft-red"
  }  w-6 cursor-pointer rounded-sm peer hover:opacity-70 transition-opacity sm:w-10" style="height: ${
    item.amount * 2.5
  }px"></span>
  <span
    id="amt"
    class="absolute -top-7 flex bg-Dark-brown text-Very-pale-orange p-1 w-fit rounded-sm opacity-0 peer-hover:opacity-100 transition-opacity delay-200"
    >${currency}</span>
  <span id="day" class="peer text-Medium-brown sm:text-base">${item.day}</span>
</div>
`;
}

// to get current day
function getCurrentDay(dayname) {
  const date = new Date().getDay();
  const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  return daysOfWeek[date] == dayname;
}
