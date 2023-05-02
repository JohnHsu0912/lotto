import { intervalToDuration } from 'https://esm.run/date-fns';

const getDurationText = (nextDate) => {
  const duration = intervalToDuration({
    start: new Date(),
    end: nextDate,
  })
  return `${duration.hours.toString().padStart(2, '0')}:${duration.minutes.toString().padStart(2, '0')}:${duration.seconds.toString().padStart(2, '0')}`
}

export {
  getDurationText
}

//RWD 下拉選單 防止點擊按鈕收合所有選單
// window.addEventListener('load', () => {
//   let navItem = document.querySelectorAll(".nav-item")
//   navItem.forEach((_,i)=>{
//     navItem[i].addEventListener("click",(e)=>{
//       // e.stopPropagation()
//     })
//   })
// })