import Config from "./config.js";
import Timer from "./timer.js";
import { createTabItem } from "./components.js";
import { getDurationText } from "./utils.js";
import { format } from "https://esm.run/date-fns";
import { ALL_Future_API } from "../api/api.js";
import { judgeNextGameAPI } from "../api/api.js";

let data = [];
const test = {
  TL2DG: {
    recent: [
      {
        winTime: "2023-04-23 21:00:00",
        gameCode: "TL2DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "28,03",
        encodeTime: "2023-04-23 21:12:03",
        numeroNo: "20230423-3",
      },
      {
        winTime: "2023-04-23 17:00:00",
        gameCode: "TL2DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "11,09",
        encodeTime: "2023-04-23 17:06:12",
        numeroNo: "20230423-2",
      },
      {
        winTime: "2023-04-23 14:00:00",
        gameCode: "TL2DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "13,29",
        encodeTime: "2023-04-23 14:06:21",
        numeroNo: "20230423-1",
      },
    ],
    future: [
      {
        winTime: "2023-04-25 18:26:00",
        gameCode: "TL2DG",
        bizDate: "2023-04-24 00:00:00",
        numeroNo: "20230424-1",
      },
      {
        winTime: "2023-04-28 17:00:00",
        gameCode: "TL2DG",
        bizDate: "2023-04-24 00:00:00",
        numeroNo: "20230424-2",
      },
    ],
  },
  TL3DG: {
    recent: [
      {
        winTime: "2023-04-23 21:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "4,3,5",
        encodeTime: "2023-04-23 21:11:06",
        numeroNo: "20230423-3",
      },
      {
        winTime: "2023-04-23 17:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "5,6,1",
        encodeTime: "2023-04-23 17:04:50",
        numeroNo: "20230423-2",
      },
      {
        winTime: "2023-04-23 14:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "3,7,6",
        encodeTime: "2023-04-23 14:05:03",
        numeroNo: "20230423-1",
      },
    ],
    future: [
      {
        winTime: "2023-04-28 17:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-24 00:00:00",
        numeroNo: "20230424-1",
      },
      {
        winTime: "2023-04-24 17:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-24 00:00:00",
        numeroNo: "20230424-2",
      },
    ],
  },
  TL4DG: {
    recent: [
      {
        winTime: "2023-04-23 21:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "4,3,5",
        encodeTime: "2023-04-23 21:11:06",
        numeroNo: "20230423-3",
      },
      {
        winTime: "2023-04-23 17:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "5,6,1",
        encodeTime: "2023-04-23 17:04:50",
        numeroNo: "20230423-2",
      },
      {
        winTime: "2023-04-23 14:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "3,7,6",
        encodeTime: "2023-04-23 14:05:03",
        numeroNo: "20230423-1",
      },
    ],
    future: [
      {
        winTime: "2023-04-28 17:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-24 00:00:00",
        numeroNo: "20230424-1",
      },
      {
        winTime: "2023-04-24 17:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-24 00:00:00",
        numeroNo: "20230424-2",
      },
    ],
  },
  TL6DG: {
    recent: [
      {
        winTime: "2023-04-23 21:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "4,3,5",
        encodeTime: "2023-04-23 21:11:06",
        numeroNo: "20230423-3",
      },
      {
        winTime: "2023-04-23 17:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "5,6,1",
        encodeTime: "2023-04-23 17:04:50",
        numeroNo: "20230423-2",
      },
      {
        winTime: "2023-04-23 14:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-23 00:00:00",
        winNo: "3,7,6",
        encodeTime: "2023-04-23 14:05:03",
        numeroNo: "20230423-1",
      },
    ],
    future: [
      {
        winTime: "2023-04-28 17:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-24 00:00:00",
        numeroNo: "20230424-1",
      },
      {
        winTime: "2023-04-24 17:00:00",
        gameCode: "TL3DG",
        bizDate: "2023-04-24 00:00:00",
        numeroNo: "20230424-2",
      },
    ],
  },
};

const getDataByGameCode = (data, gameCode) =>
  new Promise((resolve) => {
    const gameData = {
      recent: data[gameCode]?.recent,
      future: data[gameCode]?.future,
    };
    resolve(gameData);
  });

//載入下一期api畫面的div
function loadGameCode(gameCode) {
  let code = document.getElementById(gameCode);
  if (code === null) {
    return;
  }
  let html = `<div class="apiLoad">Loading...</div>`;
  code.innerHTML = html;
}

function loadOver() {
  let load = document.querySelector(".load");
  load.style.display = "none";
}

function callMutiApi() {
  const promises = ALL_Future_API;
  Promise.all(promises)
    .then((values) => {
      const output = {};
      values.forEach((item) => {
        const gameCode = item[0]?.recent[0]?.gameCode;
        output[gameCode] = {
          recent: item[0]?.recent,
          future: item[0]?.future,
        };
      });
      data = output;
      loadOver();
    })
    .then(() => {
      (() => {
        const timer = new Timer();

        init();

        function init() {
          timer.start();

          buildNav();
        }

        function buildNav() {
          const $nav = $("#nav-tab");
          const categoryNames = Object.keys(Config.categories);

          // Bind events
          $nav.on("show.bs.tab", (e) =>
            buildGameCards($(e.target).data("category"))
          );

          // Append nav tabs
          if (categoryNames.length) {
            const $tabs = categoryNames.map((categoryName) => {
              const category = Config.categories[categoryName];
              return createTabItem(category);
            });
            $nav.prepend($tabs);
            $tabs[0].get(0).click();
          }
        }

        function buildGameCards(categoryName) {
          const $gameCardsContainer = $(
            ".drawCardList > .tab-pane .draw-cards"
          );

          // 根據 category 取得 Games
          let gameCodes = [];

          if (categoryName === "ALL") {
            gameCodes = Object.values(Config.categories)
              .map((category) => category.gameCodes)
              .flat();
          } else {
            const category = Config.categories[categoryName];
            gameCodes = category ? category.gameCodes : [];
          }

          // 全部都處理完畢才會顯示
          Promise.all(
            gameCodes.map((gameCode) => getGameDataAndBuildGameCard(gameCode))
          ).then(($cards) => $gameCardsContainer.html($cards));
        }

        function getGameDataAndBuildGameCard(gameCode) {
          let currentGameData = null;
          let $card = null;

          //這裡處理要過多久拿取API的邏輯
          function delayFetch(gameCode) {
            function getRandom(x) {
              return (Math.floor(Math.random() * x) + 5) * 1000;
            }
            loadGameCode(gameCode);
            if (
              gameCode === "TL2DG" ||
              gameCode === "TL3DG" ||
              gameCode === "TL4DG" ||
              gameCode === "TL6DG"
            ) {
              currentGameData = null;
              setTimeout(function () {
                fetch(judgeNextGameAPI(gameCode))
                  .then((res) => {
                    return res.json();
                  })
                  .then((apiData) => {
                    data[gameCode] = apiData[0];
                    getDataByGameCode(data, gameCode).then((nextGameData) => {
                      currentGameData = nextGameData;
                      const $nextCard = buildGameCard(gameCode, nextGameData);
                      $card.replaceWith($nextCard);
                      $card = $nextCard;
                    });
                  });
              }, 1200000);
            } else {
              currentGameData = null;
              setTimeout(function () {
                fetch(judgeNextGameAPI(gameCode))
                  .then((res) => {
                    return res.json();
                  })
                  .then((apiData) => {
                    data[gameCode] = apiData[0];
                    getDataByGameCode(data, gameCode).then((nextGameData) => {
                      currentGameData = nextGameData;
                      const $nextCard = buildGameCard(gameCode, nextGameData);
                      $card.replaceWith($nextCard);
                      $card = $nextCard;
                    });
                  });
              }, getRandom(10));
            }
          }

          //每秒都在執行的callback
          function countdownCallback() {
            if ($card && currentGameData) {
              const $countdown = $card.find(".drawCardCount");
              const { future } = currentGameData;
              const nextData = future[0];
              const start = new Date();
              const end = new Date(nextData.winTime);
              //如果拿到的時間比當前的時間少  就在拿一次API
              if (end.getTime() < start.getTime()) {
                delayFetch(gameCode);
                return;
              }
              let lefttime = parseInt((end.getTime() - start.getTime()) / 1000);
              $countdown.html(getDurationText(end));
              //時間倒數完再發一次gameCode的API
              if (lefttime === 0) {
                delayFetch(gameCode);
              }
            }
          }

          timer.register(gameCode, countdownCallback);

          return getDataByGameCode(data, gameCode).then((gameData) => {
            currentGameData = gameData;
            $card = buildGameCard(gameCode, gameData);
            return $card;
          });
        }

        function buildGameCard(gameCode, gameData) {
          const game = Config.games[gameCode];
          const { recent, future } = gameData;
          const currentData = recent[0];
          const nextData = future[0];
          const startTime = new Date();

          // 開獎時間
          const drawDate = format(
            new Date(currentData.winTime),
            "dd/MM/yyyy(EEE)-hh:mmaa"
          );
          // 開獎號碼
          const $winNo = currentData.winNo
            .split(",")
            .map((no) => $(`<span>${no}</span>`));
          // 開獎號碼
          const $drawNo = recent.map((item) =>
            $(`<li><a class="dropdown-item">${item.numeroNo}</a></li>`)
          );

          const $card = $(`
          <div class="col-md col-lg-6 col-xl-4">
            <div class="card">
              <div class="card-header">
                <h3>${game.name}</h3>
                <div class="countdown">
                  <img src="/images/index/icon/clock-history.svg" />
                  <div id="${gameCode}" class="drawCardCount"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="draw-info d-flex justify-content-between">
                  <div>
                    <p class="mb-1">Draw Date :</p>
                    <p class="drawCardDrawDate fw-bold">
                      ${drawDate}
                    </p>
                  </div>
                  <div>
                    <p class="mb-1">
                      Next No :
                      <span class="drawCardNextNo fw-bold"
                        >${nextData.numeroNo}</span
                      >
                    </p>
                    <div>
                      Draw No :
                      <div class="btn-group">
                        <button
                          class="drawCardDrawNo btn btn-secondary btn-sm dropdown-toggle fw-bold"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ${currentData.numeroNo}
                        </button>
                        <ul class="dropdown-menu drawNoList"></ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="win-number">
                  <p class="win-number-title fw-bold mt-2">
                    Wining Numbers:
                  </p>
                  <div
                    class="drawCardWinBall d-flex justify-content-center"
                  >
                  </div>
                </div>
                <div class="draw-links mt-4 d-flex justify-content-end">
                  <a href="../pages/drawTrending/${currentData.gameCode}.html" class="trend-btn p-1 px-2 me-3">
                    <img src="/images/index/icon/share-fill.svg" />
                    <span>Draw Trending</span>
                  </a>
                  <a href="../pages/history/${currentData.gameCode}.html" class="history-btn d-flex align-items-center">
                    <img src="/images/index/icon/calendar4-week.svg" />
                    <span>View History</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `);
          const $winBalls = $card.find(".drawCardWinBall");
          const $drawNoButton = $card.find(".drawCardDrawNo");
          const $countdown = $card.find(".drawCardCount");
          const end = new Date(nextData.winTime);
          if (end.getTime() > startTime.getTime()) {
            $countdown.html(getDurationText(end));
          }

          $winBalls.append($winNo);
          $card.find(".drawNoList").append($drawNo);

          $drawNo.forEach(($no) =>
            $no.on("click", (e) => {
              // 找到對應的 data
              const item = recent.find(
                (item) => item.numeroNo === e.target.textContent
              );
              // 修改 dropdown 顯示文字
              $drawNoButton.html(e.target.textContent);
              // 修改開獎號碼
              $winBalls.html(
                item.winNo.split(",").map((no) => $(`<span>${no}</span>`))
              );
            })
          );

          return $card;
        }
      })();
    });
}

callMutiApi();
