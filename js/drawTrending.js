//原本放在index.js裡面 原本的程式碼   目前最新的都用GPT做優化
import { judgeTrendingAndHistoryAPI } from "../api/api.js";

//統計資料的假格式
let statistics = [];

//用來設置背景標註的開關
let ballsBackGroundState = [];

//抓取API資料塞進去  倒敘排行
let vanillaData = [];

//是否顯示遺漏表的開關
let isMissMap = true;

//是否顯示背景標註的開關
let isBackGroundNumber = false;

//是否顯示遺漏表的開關
let isShowLine = true;

//所有顯示的期數列表 固定值
let period = [10, 30, 50];

//當前期數
let nowPeriod = 30;

//用來表示第幾球
let balls = [];

//用來設置總共球數區間
let mainRange = [];

//球數的顯示名稱陣列
let showName = ["st", "nd", "rd", "th", "th", "th"];

//球數顯示名稱陣列
let showNameChinese = ["1st", "2nd", "3rd", "4th", "5th", "6th"];

//標題第幾球顏色
let titleColor = ["one", "two", "three", "four", "five", "six"];

//用來表示數據統計的標題
let statisticsName = [
  "Occurrences",
  "Max Omission",
  "Average Omission",
  "Max Continuous",
];

//線的顏色
let lineColor = [
  "#FDC12D",
  "#E84D2A",
  "#9C5DF4",
  "#23C882",
  "#F56F63",
  "#2BB7F3",
];


function judgeBallAreaWidth(balls) {
  
  if (balls.length === 0) {
    return ""
  }
  if (balls.length === 2) {
    return "width:86px"
  }
  if (balls.length === 3) {
    return "width:129px"
  }
  if (balls.length === 4) {
    return "width:172px"
  }
  if (balls.length === 5) {
    return "width:188px"
  }
  if (balls.length === 6) {
    return "width:258px"
  }
}

//先抓取API然後塞進 vanillaData
async function getApi() {
  const pageMainTitle = document.querySelector(".pageMainTitle");
  try {
    const res = await fetch(judgeTrendingAndHistoryAPI(pageMainTitle.id));
    // const res = await fetch(API_FULL_REGIV6DG);
    const data = await res.json();
    const { results } = data[0];
    const { occurrences, maxOmission, averageOmission, maxContinuous } =
      data[0];
    statistics = [occurrences, maxOmission, averageOmission, maxContinuous];
    let ball = await results[0]?.keys;
    vanillaData = results?.reverse();
    for (let i = 0; i < ball.length; i++) {
      balls.push(1);
    }
    ballsRanger(vanillaData);
    // 先給備註標記的陣列 設置初始值
    setVanillaBackGroundState(ball);
  } catch (error) {
    console.log(error.message);
  }
}

//處理所有球的開獎區間
function ballsRanger(vanillaData) {
  if (!vanillaData.length) return;
  let range = vanillaData[0]?.range;
  for (let x = range[0]; x <= range[1]; x++) {
    mainRange.push(Number(x));
  }
}

//設置 ballsBackGroundState 的初始值
function setVanillaBackGroundState(ball) {
  if (!ball || ball.length === 0) return;
  let rangeLength = mainRange.length;
  ballsBackGroundState = []; //先清空
  for (let i = 0; i < ball.length; i++) {
    let arr = [];
    for (let x = 0; x < rangeLength; x++) {
      arr.push(0);
    }
    ballsBackGroundState.push(arr);
  }
}

//用來清掉所有標題的邏輯
function clearAllTitle() {
  let titleDiv = document.querySelector(".titleDiv");
  titleDiv?.remove();
}

//用來清掉所有數據標題的表
function clearAllStatisticsTitle() {
  let statisticsTitleDiv = document.querySelector(".statisticsTitleDiv");
  statisticsTitleDiv?.remove();
}

//用來清掉所有開獎資料的邏輯
function clearAllData() {
  let box = document.querySelectorAll(".box");
  for (let x = 0; x < nowPeriod; x++) {
    box[x]?.remove();
  }
}

//用來清掉所有數據統計資料的邏輯
function clearAllStatistics() {
  let statisticsBox = document.querySelectorAll(".statisticsBox");
  //固定只有4筆紀錄
  for (let x = 0; x <= 4; x++) {
    statisticsBox[x]?.remove();
  }
}

//用來清掉所有的線
function clearLine() {
  let canvas = document.querySelector("canvas");
  canvas?.remove();
}

function clearAllDataAndTitle() {
  clearAllData();
  clearAllStatisticsTitle();
  clearAllStatistics();
}

function statisticsTitleAndDataRander() {
  statisticsTitle();
  mainStatisticsRander(statistics);
}

//清除所有的資料
function clearAll() {
  clearAllData(); //清除所有開獎資料
  clearAllTitle(); //清除所有標題
  clearAllStatisticsTitle(); //清除所有數據標題
  clearLine(); //清除所有線
  clearAllStatistics(); //清除所有數據統計的資料
}

//是否顯示遺漏數字表的邏輯
let missBtn = document.querySelector("#missBtn");
let showMissMap = document.querySelector("#showMissMap");
missBtn.addEventListener("click", () => {
  let img = missBtn.getElementsByTagName("img")[0];
  showMissMap.classList.toggle("btnCheckActive");
  clearAllDataAndTitle();
  isMissMap = !isMissMap;
  img.style.display = isMissMap ? "block" : "none";
  mainDataRander(vanillaData, nowPeriod);
  statisticsTitleAndDataRander();
});

//是否顯示背景標註的邏輯
const backGroundBtn = document.querySelector("#backGroundBtn");
const showBackground = document.querySelector("#showBackground");
const img = backGroundBtn.querySelector("img");
img.style.display = "none";
backGroundBtn.addEventListener("click", function () {
  clearAllData();
  clearAllStatisticsTitle();
  clearAllStatistics();
  showBackground.classList.toggle("btnCheckActive");
  isBackGroundNumber = !isBackGroundNumber;
  img.style.display = isBackGroundNumber ? "block" : "none";
  mainDataRander(vanillaData, nowPeriod);
  statisticsTitle();
  mainStatisticsRander(statistics);
});

//用來顯示標題第幾球的邏輯
function mainTitle() {
  let result = balls.map((_, i) => {
    if (balls[i] === 1) {
      let res = mainRange.map((num, x) => {
        return `<div class="number-area">${num}</div>`;
      });
      return `<th class="color-set-title-${titleColor[i]}">
      <div class="rightTitle">
      ${showNameChinese[i]}
       Digit
       </div>
      <div class="rightContent">${res.join("")}</div>
      </th>`;
    }
  });
  let newTitle = document.createElement("thead");
  newTitle.className = "titleDiv";
  document.getElementById("main").appendChild(newTitle);
  let newTitleInfo = `<tr>
                          <th class="left"><div class="titleNo">
                            No.
                            </div>
                          <div class="titleDate" id="reverseBtn">
                            Draw No.
                            <img class="titleIcon" src="../../images/trending/two-way-arrow.png"/>
                            </div>
                          </th>
                          <th>
                            <div class="resultTitle" style=${judgeBallAreaWidth(balls)}>Results</div>
                          </th>
                            ${result.join("")}
                          </tr>`;
  newTitle.innerHTML = newTitleInfo;
}

//用來顯示數據統計標題的邏輯
function statisticsTitle() {
  let result = balls.map((_, i) => {
    if (balls[i] === 1) {
      let res = mainRange.map((num) => {
        return `<div class="number-area">${num}</div>`;
      });
      return `<td class="color-set-title-${titleColor[i]}">
      <div class="rightTitle">${showNameChinese[i]} Digit</div>
        <div class="rightContent">${res.join("")}</div>
        </td>`;
    }
  });
  let statistics = document.createElement("tr");
  statistics.className = "statisticsTitleDiv";
  document.getElementById("main").appendChild(statistics);
  let newStatisticsTitleInfo = `<td class="left">
                                <div class="toDataTotalArea" 
                                >
                                Data Statistics
                                </div>
                                </td>
                                <td class="resultTitle" style=${judgeBallAreaWidth(balls)}>
                                </td>
                                ${result.join("")}
                                `;
  statistics.innerHTML = newStatisticsTitleInfo;
}

//抓取總共要顯示幾顆球與是否中獎的邏輯
function ballsTotal(data) {
  let win = data.winNumber.split(",");
  let total = data.keys;
  const result = total.map((num, luckyIndex) => {
    // 先判斷是否要顯示這顆球
    if (balls[luckyIndex] === 1) {
      const firstData = data[num].map((content, numIndex) => {
        //這裡要先判斷如果沒有數字0的球 陣列位置要+1 0再處理是否為中獎號碼
        if (
          Number(win[luckyIndex]) ===
          (mainRange[0] !== 0 ? numIndex + 1 : numIndex)
        ) {
          ballsBackGroundState[luckyIndex][numIndex] = 1;
          return `<div class="color-set-${
            titleColor[luckyIndex]
          } bodyLuckyNumber" id="line-0${luckyIndex + 1}">${content}</div>`;
        }
        // 設置線的顏色與背景的顏色
        return `<div class="number-area ${
          ballsBackGroundState[luckyIndex][numIndex] !== 1 &&
          isBackGroundNumber &&
          `color-set-${titleColor[luckyIndex]}`
        }">${isMissMap ? content : ""}</div>`;
      });
      return `<td class="rightBoxContent color-set-backGround-${
        titleColor[luckyIndex]
      }">${firstData.join("")}</td>`;
    }
  });
  return result.join("");
}

//抓取總共要顯示幾顆球與數據統計的邏輯
function ballsStatistics(data) {
  return data.keys
    .map((num, luckyIndex) => {
      if (balls[luckyIndex] === 1) {
        const down = data[num]
          ?.map((content) => `<span class="number-area">${content}</span>`)
          .join("");
        return `<td class="rightBoxContent color-set-backGround-${titleColor[luckyIndex]}">${down}</td>`;
      }
      return "";
    })
    .join("");
}

//用來顯示中獎號碼區域
function ballsLotteryAera(win) {
  let result = "";
  for (let i = 0; i < balls.length; i++) {
    const cssClass = balls[i] === 1 ? "luckyNumber" : "unLuckyNumber";
    result += `<span class="${cssClass}">${win[i]}</span>`;
  }
  return `<div class="toLuckyArea">${result}</div>`;
}

//用來控制顯示期數
function btnChange() {
  const btnAll = document.querySelectorAll(".periodBtn");
  btnAll.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      if (period[i] === nowPeriod) {
        return;
      }
      btnAll.forEach((btn) => {
        btn.className = "periodBtn";
      });
      btn.className = "periodBtn optionBtnActive";
      clearAllData(); //清除所有資料
      clearLine(); //清除所有線
      clearAllStatistics(); //清除所有統計資料
      clearAllStatisticsTitle(); //清除所有數據標題
      nowPeriod = period[i];
      mainDataRander(vanillaData, nowPeriod);
      if (isShowLine) {
        drawLines();
      }
      statisticsTitle();
      mainStatisticsRander(statistics);
    });
  });
}

//用來顯示總共要有幾個球數按鈕
function mainDataBallsBtn() {
  balls.forEach((_, i) => {
    let ballsBtn = document.createElement("div");
    ballsBtn.className = "optionBtn";
    ballsBtn.id = "show";
    document.querySelector(".allbtnNumberBox").appendChild(ballsBtn);
    let newBallsBtnInfo = `<div class="mainBtn btnCheckActive" id="showNumber"></div>
    <img class="check" id="check" src="/images/check.svg"/>
    <span>${i + 1}${showName[i]}</span>`;
    ballsBtn.innerHTML = newBallsBtnInfo;
  });
}
//顯示所有開獎資料的邏輯
function mainDataRander(vanillaData, nowPeriod) {
  // 重新設置初始值
  let ball = vanillaData[0]?.keys;
  setVanillaBackGroundState(ball);

  //根據資料顯示
  vanillaData.slice(0, nowPeriod).forEach((data, i) => {
    let win = data.winNumber.split(",");
    let newCard = document.createElement("tr");
    newCard.className = "box";
    document.getElementById("main").appendChild(newCard);
    let newCardInfo = `<td class="leftBox">
                            <div class="toSortArea">${i + 1}</div>
                            <div class="toDateArea">${data.issue} </div>
                            
                        </td>
                        <td class="resultLuckyArea">
                          ${ballsLotteryAera(win)}
                        </td>
                          ${ballsTotal(data)}`;
    newCard.innerHTML = newCardInfo;
  });
}

//顯示所有開獎資料順序顛倒的邏輯
function mainDataReverseRander(vanillaData, nowPeriod) {
  // 重新設置初始值
  let ball = vanillaData[0]?.keys;
  setVanillaBackGroundState(ball);

  //根據資料顯示
  vanillaData
    .reverse()
    .slice(0, nowPeriod)
    .forEach((data, i) => {
      let win = data.winNumber.split(",");
      let newCard = document.createElement("tr");
      newCard.className = "box";
      document.getElementById("main").appendChild(newCard);
      let newCardInfo = `<td class="leftBox">
                              <div class="toSortArea">${i + 1}</div>
                              <div class="toDateArea">${data.issue} </div>
                          </td>
                          <td class="resultLuckyArea">
                            ${ballsLotteryAera(win)}
                          </td>
                            ${ballsTotal(data)}`;
      newCard.innerHTML = newCardInfo;
    });
}

//顯示所有數據統計的邏輯
function mainStatisticsRander(statistics) {
  const main = document.getElementById("main");
  let html = statistics
    .map(
      (data, i) => `
    <tr class="statisticsBox">
      <td class="leftBox">
        <div class="toDataTotalArea" 
        >${statisticsName[i]}</div>
      </td>
        <td class="statisticsTitleDivResult" 
        style=${judgeBallAreaWidth(balls)}>
        </td>
      ${ballsStatistics(data)}
    </tr>
  `
    )
    .join("");

  main.insertAdjacentHTML("beforeend", html);
}

//處理要顯示幾球的邏輯
function handleBallsNumberBtn() {
  const show = document.querySelectorAll("#show");
  const showBtn = document.querySelectorAll("#showNumber");

  function toggleBallsNumber(i) {
    const img = show[i].getElementsByTagName("img")[0];
    if (balls[i] === 1) {
      balls[i] = 0;
      img.style.display = "none";
    } else {
      balls[i] = 1;
      img.style.display = "block";
    }
  }

  function clearAndRenderData() {
    clearAll();
    mainTitle();
    mainDataRander(vanillaData, nowPeriod);
    statisticsTitle();
    mainStatisticsRander(statistics);
    if (isShowLine) {
      drawLines();
    }
  }

  for (let i = 0; i < show.length; i++) {
    show[i].addEventListener("click", function () {
      showBtn[i].classList.toggle("btnCheckActive");
      toggleBallsNumber(i);
      clearAndRenderData();
      handleReverse();
    });
  }
}

//畫線的邏輯
function drawLines() {
  let canvas = null;
  let context = null;
  const main = document.getElementById("main");
  const width = main.scrollWidth;
  const height = main.scrollHeight;
  const panelpx = 15;

  canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.style.position = "absolute";
  main.appendChild(canvas);
  context = canvas.getContext("2d");

  const parentRect = main.getBoundingClientRect();

  canvas.style.top = 0 + "px";
  canvas.style.left = 0 + "px";
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < balls.length; i++) {
    const line = document.querySelectorAll(`#line-0${i + 1}`);
    const color = lineColor[i];

    for (let j = 0; j < line.length - 1; j++) {
      const childRect1 = line[j].getBoundingClientRect();
      const childRect2 = line[j + 1].getBoundingClientRect();

      const x1 = childRect1.x - parentRect.x + panelpx;
      const y1 = childRect1.y - parentRect.y + panelpx;
      const x2 = childRect2.x - parentRect.x + panelpx;
      const y2 = childRect2.y - parentRect.y + panelpx;

      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.lineWidth = 2;
      context.strokeStyle = color;
      context.stroke();
    }
  }
}

//處理畫線按鈕
function handleDrawLineBtn() {
  let lineBtn = document.querySelector("#lineBtn");
  let showLine = document.querySelector("#showLine");
  let img = lineBtn.getElementsByTagName("img");
  lineBtn.addEventListener("click", function () {
    if (isShowLine) {
      clearLine();
    } else {
      drawLines();
    }
    img[0].style.display = isShowLine ? "none" : "block";
    isShowLine = !isShowLine;
    showLine.classList.toggle("btnCheckActive");
  });
}

function loadOver() {
  let load = document.querySelector(".load");
  load.style.display = "none";
}

// 變更順序的邏輯
function handleReverse() {
  const reverseBtn = document.getElementById("reverseBtn");
  reverseBtn.addEventListener("click", () => {
    console.log(1);
    clearAllData(); //清除所有資料
    clearLine(); //清除所有線
    clearAllStatistics(); //清除所有統計資料
    clearAllStatisticsTitle(); //清除所有數據標題
    mainDataReverseRander(vanillaData, nowPeriod);
    if (isShowLine) {
      drawLines();
    }
    statisticsTitle();
    mainStatisticsRander(statistics);
  });
}

window.onload = function () {
  getApi().then(() => {
    mainTitle();
    mainDataBallsBtn();
    handleBallsNumberBtn();
    btnChange();
    mainDataRander(vanillaData, nowPeriod);
    handleDrawLineBtn();
    statisticsTitle();
    mainStatisticsRander(statistics);
    drawLines();
    loadOver();
    handleReverse();
  });
};
