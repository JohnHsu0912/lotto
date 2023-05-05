import { judgeTrendingAndHistoryAPI } from "../api/api.js";

//測試假單一筆資料的api
let testData = [
  {
    gameCode: "REGIV6DG",
    date: "2023-04-17",
    time: null,
    issue: "20230417-04",
    winNumber: "1,4,7,6,5,0",
  },
];

//搜尋期數
let searchPeriod = "";

//用來設置背景標註的開關
let ballsBackGroundState = [];

//先保留背景標註的初始值 用來回歸第一次

//抓取API資料塞進去
let vanillaData = [];

//所有顯示的期數列表 固定值
let period = [10, 30, 50, 100];

//當前期數
let nowPeriod = 10;

//用來表示第幾球
let balls = [];

//用來設置總共球數區間
let mainRange = [];

//先抓取API然後塞進 vanillaData
async function getApi() {
  const pageMainTitle = document.querySelector(".pageMainTitle");
  try {
    const res = await fetch(judgeTrendingAndHistoryAPI(pageMainTitle.id));
    const data = await res.json();
    const { results } = data[0];
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
  if (vanillaData.length === 0) {
    return;
  }
  let range = vanillaData[0]?.range;
  for (let x = range[0]; x <= range[1]; x++) {
    mainRange.push(x);
  }
}

//設置 ballsBackGroundState 的初始值
function setVanillaBackGroundState(ball) {
  ballsBackGroundState = []; //先清空
  for (let i = 0; i < ball.length; i++) {
    let arr = [];
    for (let x = 0; x < mainRange.length; x++) {
      arr.push(0);
    }
    ballsBackGroundState.push(arr);
  }
}

//用來清掉所有開獎資料的邏輯
function clearAllData() {
  let historyBox = document.querySelectorAll(".historyBox");
  for (let x = 0; x < nowPeriod; x++) {
    historyBox[x]?.remove();
  }
}

//用來顯示標題第幾球的邏輯
function mainTitle() {
  let newTitle = document.createElement("div");
  newTitle.className = "historyTitle";
  document.querySelector(".historyMain").appendChild(newTitle);
  let newTitleInfo = `
    <div class="titleNo">No.</div>
    <div class="titleDate">DRAW DATE</div>
    <div class="titleDate">LOTTERY DRAW NO.</div>
    <div class="titleNumber">Result</div>
    <div class="mobileTitle">DATE, DRAW NO & RESULTS<div>`;
  newTitle.innerHTML = newTitleInfo;
}

//用來顯示中獎號碼區域
function ballsLotteryAera(win) {
  const ballsWin = win.map((num, i) => {
    return `<div class=${
      balls[i] === 1 ? "historyLuckyNumber" : "unLuckyNumber"
    }>${num}</div>`;
  });
  return `<div class="toHistoryLuckyArea">${ballsWin.join("")}</div>`;
}

//用來顯示單一筆的中獎號碼區域
function SingleBallsLotteryAera(win) {
  const ballsWin = win.map((num) => {
    return `<span class="luckyNumber"
    }>${num}</span>`;
  });
  return `<div class="singleData">${ballsWin.join("")}</div>`;
}

//用來控制顯示期數
function btnChange() {
  let btnAll = document.querySelectorAll("#btn");
  for (let i = 0; i < btnAll.length; i++) {
    btnAll[i].addEventListener("click", function () {
      let historyBoxNoResult = document.querySelectorAll(".historyBoxNoResult");
      for (let x = 0; x < historyBoxNoResult.length; x++) {
        historyBoxNoResult[x]?.remove();
      }
      for (let j = 0; j < btnAll.length; j++) {
        btnAll[j].className = "periodBtn";
      }
      btnAll[i].className = "periodBtn optionBtnActive";
      clearAllData(); //清除所有資料
      nowPeriod = period[i]; //改變期數
      mainDataRander(vanillaData, nowPeriod);
    });
  }
}

//顯示所有開獎資料的邏輯
function mainDataRander(vanillaData, nowPeriod) {
  // 重新設置初始值
  let ball = vanillaData[0]?.keys;
  setVanillaBackGroundState(ball);
  //根據資料顯示
  vanillaData.slice(0, nowPeriod).forEach((data, i) => {
    let win = data.winNumber.split(",");
    let newCard = document.createElement("div");
    newCard.className = "historyBox";
    // newCard.setAttribute("data-bs-toggle", "modal");
    // newCard.setAttribute("data-bs-target", "#exampleModal");
    document.querySelector(".historyMain").appendChild(newCard);
    let newCardInfo = `
                <div class="historyBoxContent">
                  <div class="toHistorySortArea">${i + 1}</div>
                  <div class="toHistoryDateArea">
                    <div class="dateCard">
                    <div class="dateCardBackGroundColor"></div>
                      ${data.date.slice(5).replace(/-/, "/")}</div>
                  </div>
                  <div class="toHistoryDateArea">${data.issue} </div>
                  ${ballsLotteryAera(win)}
                </div>`;

    newCard.innerHTML = newCardInfo;
  });
  // historyDetail();
}

//顯示所有搜尋歷史資料的邏輯
function mainSearchDataRander(vanillaData) {
  let searchData = [];
  let historyBoxNoResult = document.querySelectorAll(".historyBoxNoResult");
  for (let x = 0; x < historyBoxNoResult.length; x++) {
    historyBoxNoResult[x]?.remove();
  }
  vanillaData.forEach((data) => {
    if (data.issue === searchPeriod) {
      searchData.push(data);
    }
  });
  if (searchData.length !== 0) {
    searchData.forEach((data, i) => {
      let win = data.winNumber.split(",");
      let newCard = document.createElement("div");
      newCard.className = "historyBox";
      // newCard.setAttribute("data-bs-toggle", "modal");
      // newCard.setAttribute("data-bs-target", "#exampleModal");
      document.querySelector(".historyMain").appendChild(newCard);
      let newCardInfo = `
                <div class="historyBoxContent">
                <div class="toHistorySortArea">${i + 1}</div>
                <div class="toHistoryDateArea">${data.date} </div>
                <div class="toHistoryDateArea">${data.issue} </div>
                ${ballsLotteryAera(win)}
                <div>
                `;
      newCard.innerHTML = newCardInfo;
    });
  } else {
    let newCard = document.createElement("div");
    newCard.className = "historyBoxNoResult";
    // newCard.setAttribute("data-bs-toggle", "modal");
    // newCard.setAttribute("data-bs-target", "#exampleModal");
    document.querySelector(".historyMain").appendChild(newCard);
    let newCardInfo = `
                <div class="historyBoxNoResultContent">
                <div class="toHistoryNotResultDateArea">No results found.</div>
                <div>
                `;
    newCard.innerHTML = newCardInfo;
  }
  input.value = "";
  //根據資料顯示
  // historyDetail();
}

//抓取詳細頁面的單一筆資料
function historyDetail() {
  let detail = document.getElementById("showHistoryDetail");
  let btn = document.querySelectorAll(".historyBox");
  btn.forEach((_, i) => {
    btn[i].addEventListener("click", () => {
      //先把資料全部清空  在抓取最新一筆
      detail.replaceChildren();
      testData.forEach((data) => {
        let card = document.createElement("div");
        detail.appendChild(card);
        let newCard = `
                    <div class="singleData">${data.date} </div>
                    <div class="singleData">${data.issue} </div>
                    <div class="singleData">
                    ${SingleBallsLotteryAera(data.winNumber.split(","))}
                    </div>
                    `;
        card.innerHTML = newCard;
      });
    });
  });
}

let input = document.getElementById("searchInput");
let submitBtn = document.querySelector(".submitBtn");

function fsubmitBtn(event) {
  // if (input.value.length === 0) {

  //   return;
  // }
  event.preventDefault();
  let str = "";
  let submitValue = input.value;
  str = submitValue;
  searchPeriod = input.value;
  clearAllData(); //清除所有資料
  mainSearchDataRander(vanillaData);
}
submitBtn.addEventListener("click", fsubmitBtn);

function loadOver() {
  let load = document.querySelector(".load");
  load.style.display = "none";
}

window.onload = function () {
  getApi().then(() => {
    mainTitle();
    btnChange();
    mainDataRander(vanillaData, nowPeriod);
    loadOver();
  });
};
