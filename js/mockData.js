import {
  API_Future_API_Lotto_2D,
  API_Future_API_REGI3DG_3D,
  API_FutureL_API_NCR4DG_4D,
  API_Future_API_TL6DG_6D,
} from "../api/api.js";

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
        winTime: "2023-04-24 17:25:00",
        gameCode: "TL2DG",
        bizDate: "2023-04-24 00:00:00",
        numeroNo: "20230424-1",
      },
      {
        winTime: "2023-04-24 17:00:00",
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
        winTime: "2023-04-24 14:00:00",
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
        winTime: "2023-04-24 14:00:00",
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
        winTime: "2023-04-24 14:00:00",
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

let MockData = [];

async function api(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function callMutiApi() {
  const promises = [
    api(API_Future_API_Lotto_2D),
    api(API_Future_API_REGI3DG_3D),
    api(API_FutureL_API_NCR4DG_4D),
    api(API_Future_API_TL6DG_6D),
  ];
  Promise.all(promises).then((value) => {
    // console.log([val1,val2,val3,val4]);
    const output = {};
    value.forEach((item) => {
      const gameCode = item[0].recent[0].gameCode;
      output[gameCode] = {
        recent: item[0].recent,
        future: item[0].future,
      };
    });
  });
}
callMutiApi();
