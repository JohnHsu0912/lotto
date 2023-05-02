//-------
//PCSO卡片DOM
const drawDateAryPCSO = Array.from(
  document.querySelectorAll('#nav-PCSO .drawCardDrawDate'),
);
const nextNoAryPCSO = Array.from(
  document.querySelectorAll('#nav-PCSO .drawCardNextNo'),
);
const drawNoAryPCSO = Array.from(
  document.querySelectorAll('#nav-PCSO .drawCardDrawNo'),
);
const winBallAryPCSO = Array.from(
  document.querySelectorAll('#nav-PCSO .drawCardWinBall'),
);
const countDownTimerAryPCSO = Array.from(
  document.querySelectorAll('#nav-PCSO .drawCardCount'),
);
const dropdownMenuAryPCSO = Array.from(
  document.querySelectorAll('#nav-PCSO .dropdown-menu'),
);
//2D卡片DOM
const drawDateAry2D = Array.from(
  document.querySelectorAll('#nav-2D .drawCardDrawDate'),
);
const nextNoAry2D = Array.from(
  document.querySelectorAll('#nav-2D .drawCardNextNo'),
);
const drawNoAry2D = Array.from(
  document.querySelectorAll('#nav-2D .drawCardDrawNo'),
);
const winBallAry2D = Array.from(
  document.querySelectorAll('#nav-2D .drawCardWinBall'),
);
const countDownTimerAry2D = Array.from(
  document.querySelectorAll('#nav-2D .drawCardCount'),
);
const dropdownMenuAry2D = Array.from(
  document.querySelectorAll('#nav-2D .dropdown-menu'),
);

//3D卡片DOM
const drawDateAry3D = Array.from(
  document.querySelectorAll('#nav-3D .drawCardDrawDate'),
);
const nextNoAry3D = Array.from(
  document.querySelectorAll('#nav-3D .drawCardNextNo'),
);
const drawNoAry3D = Array.from(
  document.querySelectorAll('#nav-3D .drawCardDrawNo'),
);
const winBallAry3D = Array.from(
  document.querySelectorAll('#nav-3D .drawCardWinBall'),
);
const countDownTimerAry3D = Array.from(
  document.querySelectorAll('#nav-3D .drawCardCount'),
);
const dropdownMenuAry3D = Array.from(
  document.querySelectorAll('#nav-3D .dropdown-menu'),
);

//4D卡片DOM
const drawDateAry4D = Array.from(
  document.querySelectorAll('#nav-4D .drawCardDrawDate'),
);
const nextNoAry4D = Array.from(
  document.querySelectorAll('#nav-4D .drawCardNextNo'),
);
const drawNoAry4D = Array.from(
  document.querySelectorAll('#nav-4D .drawCardDrawNo'),
);
const winBallAry4D = Array.from(
  document.querySelectorAll('#nav-4D .drawCardWinBall'),
);
const countDownTimerAry4D = Array.from(
  document.querySelectorAll('#nav-4D .drawCardCount'),
);
const dropdownMenuAry4D = Array.from(
  document.querySelectorAll('#nav-4D .dropdown-menu'),
);

//6D卡片DOM
const drawDateAry6D = Array.from(
  document.querySelectorAll('#nav-6D .drawCardDrawDate'),
);
const nextNoAry6D = Array.from(
  document.querySelectorAll('#nav-6D .drawCardNextNo'),
);
const drawNoAry6D = Array.from(
  document.querySelectorAll('#nav-6D .drawCardDrawNo'),
);
const winBallAry6D = Array.from(
  document.querySelectorAll('#nav-6D .drawCardWinBall'),
);
const countDownTimerAry6D = Array.from(
  document.querySelectorAll('#nav-6D .drawCardCount'),
);
const dropdownMenuAry6D = Array.from(
  document.querySelectorAll('#nav-6D .dropdown-menu'),
);

//All卡片DOM
const drawDateAryAll = Array.from(
  document.querySelectorAll('#nav-All .drawCardDrawDate'),
);
const nextNoAryAll = Array.from(
  document.querySelectorAll('#nav-All .drawCardNextNo'),
);
const drawNoAryAll = Array.from(
  document.querySelectorAll('#nav-All .drawCardDrawNo'),
);
const winBallAryAll = Array.from(
  document.querySelectorAll('#nav-All .drawCardWinBall'),
);
const countDownTimerAryAll = Array.from(
  document.querySelectorAll('#nav-All .drawCardCount'),
);
const dropdownMenuAryAll = Array.from(
  document.querySelectorAll('#nav-All .dropdown-menu'),
);

//取得下一期開獎時間，並把格式改成"日/月/年(sun) - 04:15 PM" 的格式
function getWinTime(data) {
  const winTime = data.future[0].winTime;
  const dt = new Date(winTime);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const newFormat = `${dt.toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  })}(${weekdays[dt.getDay()]}) - ${dt.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })}`;
  return newFormat;
}
//取得下一期數
function getNextNo(data) {
  const nextNo = data.future[0].numeroNo;
  return nextNo;
}
//取得目前中獎期數
function getDrawNo(data) {
  const drawNo = data.recent[0].numeroNo;
  return drawNo;
}
//取得目前中獎號碼
function getWinBall(data) {
  const winBall = data.recent[0].winNo;
  let winNumberArr = winBall.split(',');
  let ballStr = '';
  winNumberArr.forEach(function (num) {
    let ballContent = `<span>${num}</span>`;
    ballStr += ballContent;
  });
  return ballStr;
}
//Draw no列表，取得前10筆期數
function getDropdownMenu(data) {
  let newAry = data.recent.slice(0, 10);
  let str = '';
  newAry.forEach(function (item, index) {
    let content = `<li class="dropdown-item" data-win-number="${item.winNo}">${item.numeroNo}</li>`;
    str += content;
  });
  return str;
}

//點擊Draw no列表會出現相對應的中獎號碼
function addClickEvent(dropdownMenuAry, drawNoAry, winBallAry) {
  dropdownMenuAry.forEach((item, index) => {
    const dropdownMenu = dropdownMenuAry[index];
    const drawNoBtn = drawNoAry[index];
    dropdownMenu.addEventListener('click', ({ target }) => {
      drawNoBtn.textContent = target.textContent;
      if (target.classList.contains('dropdown-item')) {
        const winNumberArr = target.dataset.winNumber.split(',');
        const ballStr = winNumberArr
          .map((num) => `<span>${num}</span>`)
          .join('');
        winBallAry[index].innerHTML = ballStr;
      }
    });
  });
}

addClickEvent(dropdownMenuAryPCSO, drawNoAryPCSO, winBallAryPCSO);
addClickEvent(dropdownMenuAry2D, drawNoAry2D, winBallAry2D);
addClickEvent(dropdownMenuAry3D, drawNoAry3D, winBallAry3D);
addClickEvent(dropdownMenuAry4D, drawNoAry4D, winBallAry4D);
addClickEvent(dropdownMenuAry6D, drawNoAry6D, winBallAry6D);
addClickEvent(dropdownMenuAryAll, drawNoAryAll, winBallAryAll);

//把PCSO的api值帶入卡片
function updatePCSOData(index, data) {
  drawDateAryPCSO[index].textContent = getWinTime(data);
  nextNoAryPCSO[index].textContent = getNextNo(data);
  drawNoAryPCSO[index].textContent = getDrawNo(data);
  winBallAryPCSO[index].innerHTML = getWinBall(data);
  dropdownMenuAryPCSO[index].innerHTML = getDropdownMenu(data);
}
updatePCSOData(0, TL2DG);
updatePCSOData(1, TL3DG);
updatePCSOData(2, TL4DG);
updatePCSOData(3, TL6DG);

//把2D的api值帶入卡片
function update2DData(index, data) {
  drawDateAry2D[index].textContent = getWinTime(data);
  nextNoAry2D[index].textContent = getNextNo(data);
  drawNoAry2D[index].textContent = getDrawNo(data);
  winBallAry2D[index].innerHTML = getWinBall(data);
  dropdownMenuAry2D[index].innerHTML = getDropdownMenu(data);
}
update2DData(0, TL2DG);
update2DData(1, NCR2DG);
update2DData(2, REGII2DG);
update2DData(3, REGV2DG);
update2DData(4, REGX2DG);

//把3D的api值帶入卡片
function update3DData(index, data) {
  drawDateAry3D[index].textContent = getWinTime(data);
  nextNoAry3D[index].textContent = getNextNo(data);
  drawNoAry3D[index].textContent = getDrawNo(data);
  winBallAry3D[index].innerHTML = getWinBall(data);
  dropdownMenuAry3D[index].innerHTML = getDropdownMenu(data);
}
update3DData(0, TL3DG);
update3DData(1, NCR3DG);
update3DData(2, REGI3DG);
update3DData(3, REGVI3DG);
update3DData(4, REGVIII3DG);
update3DData(5, REGXII3DG);
update3DData(6, BARMM3DG);

//把4D的api值帶入卡片
function update4DData(index, data) {
  drawDateAry4D[index].textContent = getWinTime(data);
  nextNoAry4D[index].textContent = getNextNo(data);
  drawNoAry4D[index].textContent = getDrawNo(data);
  winBallAry4D[index].innerHTML = getWinBall(data);
  dropdownMenuAry4D[index].innerHTML = getDropdownMenu(data);
}
update4DData(0, TL4DG);
update4DData(1, NCR4DG);
update4DData(2, CAR4DG);
update4DData(3, REGIII4DG);
update4DData(4, REGVII4DG);
update4DData(5, REGIX4DG);
update4DData(6, REGXIII4DG);

//把6D的api值帶入卡片
function update6DData(index, data) {
  drawDateAry6D[index].textContent = getWinTime(data);
  nextNoAry6D[index].textContent = getNextNo(data);
  drawNoAry6D[index].textContent = getDrawNo(data);
  winBallAry6D[index].innerHTML = getWinBall(data);
  dropdownMenuAry6D[index].innerHTML = getDropdownMenu(data);
}
update6DData(0, TL6DG);
update6DData(1, NCR6DG);
update6DData(2, REGI6DG);
update6DData(3, REGIV6DG);
update6DData(4, MMRP6DG);
update6DData(5, REGXI6DG);

//把All的api值帶入卡片
function updateAllData(index, data) {
  drawDateAryAll[index].textContent = getWinTime(data);
  nextNoAryAll[index].textContent = getNextNo(data);
  drawNoAryAll[index].textContent = getDrawNo(data);
  winBallAryAll[index].innerHTML = getWinBall(data);
  dropdownMenuAryAll[index].innerHTML = getDropdownMenu(data);
}
updateAllData(0, TL2DG);
updateAllData(1, NCR2DG);
updateAllData(2, REGII2DG);
updateAllData(3, REGV2DG);
updateAllData(4, REGX2DG);
updateAllData(5, TL3DG);
updateAllData(6, NCR3DG);
updateAllData(7, REGI3DG);
updateAllData(8, REGVI3DG);
updateAllData(9, REGVIII3DG);
updateAllData(10, REGXII3DG);
updateAllData(11, BARMM3DG);
updateAllData(12, TL4DG);
updateAllData(13, NCR4DG);
updateAllData(14, CAR4DG);
updateAllData(15, REGIII4DG);
updateAllData(16, REGVII4DG);
updateAllData(17, REGIX4DG);
updateAllData(18, REGXIII4DG);
updateAllData(19, TL6DG);
updateAllData(20, NCR6DG);
updateAllData(21, REGI6DG);
updateAllData(22, REGIV6DG);
updateAllData(23, MMRP6DG);
updateAllData(24, REGXI6DG);
