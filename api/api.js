const api = "https://phlottodev1.azurewebsites.net/";

async function fetchApi(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

//以下是趨勢圖還有歷史獎期API

export const API_FULL_TL2DG = `${api}Get2DLottoInfosFull/TL2DG`;

export const API_FULL_TL3DG = `${api}Get3DLottoInfosFull/TL3DG`;

export const API_FULL_TL4DG = `${api}Get4DLottoInfosFull/TL4DG`;

export const API_FULL_TL6DG = `${api}Get6DLottoInfosFull/TL6DG`;

export const API_FULL_NCR2DG = `${api}Get2DLottoInfosFull/NCR2DG`;

export const API_FULL_REGII2DG = `${api}Get2DLottoInfosFull/REGII2DG`;

export const API_FULL_REGV2DG = `${api}Get2DLottoInfosFull/REGV2DG`;

export const API_FULL_REGX2DG = `${api}Get2DLottoInfosFull/REGX2DG`;

export const API_FULL_NCR3DG = `${api}Get3DLottoInfosFull/NCR3DG`;

export const API_FULL_REGI3DG = `${api}Get3DLottoInfosFull/REGI3DG`;

export const API_FULL_REGVI3DG = `${api}Get3DLottoInfosFull/REGVI3DG`;

export const API_FULL_REGVIII3DG = `${api}Get3DLottoInfosFull/REGVIII3DG`;

export const API_FULL_REGXII3DG = `${api}Get3DLottoInfosFull/REGXII3DG`;

export const API_FULL_BARMM3DG = `${api}Get3DLottoInfosFull/BARMM3DG`;

export const API_FULL_NCR4DG = `${api}Get4DLottoInfosFull/NCR4DG`;

export const API_FULL_CAR4DG = `${api}Get4DLottoInfosFull/CAR4DG`;

export const API_FULL_REGIII4DG = `${api}Get4DLottoInfosFull/REGIII4DG`;

export const API_FULL_REGVII4DG = `${api}Get4DLottoInfosFull/REGVII4DG`;

export const API_FULL_REGIX4DG = `${api}Get4DLottoInfosFull/REGIX4DG`;

export const API_FULL_REGXIII4DG = `${api}Get4DLottoInfosFull/REGXIII4DG`;

export const API_FULL_NCR6DG = `${api}Get6DLottoInfosFull/NCR6DG`;

export const API_FULL_REGI6DG = `${api}Get6DLottoInfosFull/REGI6DG`;

export const API_FULL_REGIV6DG = `${api}Get6DLottoInfosFull/REGIV6DG`;

export const API_FULL_MMRP6DG = `${api}Get6DLottoInfosFull/MMRP6DG`;

export const API_FULL_REGXI6DG = `${api}Get6DLottoInfosFull/REGXI6DG`;

//以下是首頁獎期與下期API

export const API_Future_TL2DG = `${api}D2Future/TL2DG`;

export const API_Future_TL3DG = `${api}D3Future/TL3DG`;

export const API_Future_TL4DG = `${api}D4Future/TL4DG`;

export const API_Future_TL6DG = `${api}D6Future/TL6DG`;

export const API_Future_NCR2DG = `${api}D2Future/NCR2DG`;

export const API_Future_REGII2DG = `${api}D2Future/REGII2DG`;

export const API_Future_REGV2DG = `${api}D2Future/REGV2DG`;

export const API_Future_REGX2DG = `${api}D2Future/REGX2DG`;

export const API_Future_NCR3DG = `${api}D3Future/NCR3DG`;

export const API_Future_REGI3DG = `${api}D3Future/REGI3DG`;

export const API_Future_REGVI3DG = `${api}D3Future/REGVI3DG`;

export const API_Future_REGVIII3DG = `${api}D3Future/REGVIII3DG`;

export const API_Future_REGXII3DG = `${api}D3Future/REGXII3DG`;

export const API_Future_BARMM3DG = `${api}D3Future/BARMM3DG`;

export const API_Future_NCR4DG = `${api}D4Future/NCR4DG`;

export const API_Future_CAR4DG = `${api}D4Future/CAR4DG`;

export const API_Future_REGIII4DG = `${api}D4Future/REGIII4DG`;

export const API_Future_REGVII4DG = `${api}D4Future/REGVII4DG`;

export const API_Future_REGIX4DG = `${api}D4Future/REGIX4DG`;

export const API_Future_REGXIII4DG = `${api}D4Future/REGXIII4DG`;

export const API_Future_NCR6DG = `${api}D6Future/NCR6DG`;

export const API_Future_REGI6DG = `${api}D6Future/REGI6DG`;

export const API_Future_REGIV6DG = `${api}D6Future/REGIV6DG`;

export const API_Future_MMRP6DG = `${api}D6Future/MMRP6DG`;

export const API_Future_REGXI6DG = `${api}D6Future/REGXI6DG`;

export function judgeForHtml(gameCode) {
  if (gameCode === "TL2DG") return "pcso-2d";
  if (gameCode === "TL3DG") return "pcso-3d";
  if (gameCode === "TL4DG") return "pcso-4d";
  if (gameCode === "TL6DG") return "pcso-6d";
  if (gameCode === "NCR2DG") return "manila-2d";
  if (gameCode === "REGII2DG") return "cagayan-2d";
  if (gameCode === "REGV2DG") return "bicol-2d";
  if (gameCode === "REGX2DG") return "mindanao-2d";
  if (gameCode === "NCR3DG") return "manila-3d";
  if (gameCode === "REGI3DG") return "ilocos-3d";
  if (gameCode === "REGVI3DG") return "western-visayas-3d";
  if (gameCode === "REGVIII3DG") return "eastern-visayas-3d";
  if (gameCode === "REGXII3DG") return "soccsksargen-3d";
  if (gameCode === "BARMM3DG") return "bangsamoro-3d";
  if (gameCode === "NCR4DG") return "manila-4d";
  if (gameCode === "CAR4DG") return "cordillera-4d";
  if (gameCode === "REGIII4DG") return "luzon-4d";
  if (gameCode === "REGVII4DG") return "central-visayas-4d";
  if (gameCode === "REGIX4DG") return "zamboanga-4d";
  if (gameCode === "REGXIII4DG") return "caraga-4d";
  if (gameCode === "NCR6DG") return "manila-6d";
  if (gameCode === "REGI6DG") return "ilocos-6d";
  if (gameCode === "REGIV6DG") return "calabarzon-6d";
  if (gameCode === "MMRP6DG") return "mimaropa-6d";
  if (gameCode === "REGXI6DG") return "davao-6d";
}

export function judgeTrendingAndHistoryAPI(name) {
  if (name === "pcso-2d") return API_FULL_TL2DG;
  if (name === "pcso-3d") return API_FULL_TL3DG;
  if (name === "pcso-4d") return API_FULL_TL4DG;
  if (name === "pcso-6d") return API_FULL_TL6DG;
  if (name === "manila-2d") return API_FULL_NCR2DG;
  if (name === "cagayan-2d") return API_FULL_REGII2DG;
  if (name === "bicol-2d") return API_FULL_REGV2DG;
  if (name === "mindanao-2d") return API_FULL_REGX2DG;
  if (name === "manila-3d") return API_FULL_NCR3DG;
  if (name === "ilocos-3d") return API_FULL_REGI3DG;
  if (name === "western-visayas-3d") return API_FULL_REGVI3DG;
  if (name === "eastern-visayas-3d") return API_FULL_REGVIII3DG;
  if (name === "soccsksargen-3d") return API_FULL_REGXII3DG;
  if (name === "bangsamoro-3d") return API_FULL_BARMM3DG;
  if (name === "manila-4d") return API_FULL_NCR4DG;
  if (name === "cordillera-4d") return API_FULL_CAR4DG;
  if (name === "luzon-4d") return API_FULL_REGIII4DG;
  if (name === "central-visayas-4d") return API_FULL_REGVII4DG;
  if (name === "zamboanga-4d") return API_FULL_REGIX4DG;
  if (name === "caraga-4d") return API_FULL_REGXIII4DG;
  if (name === "manila-6d") return API_FULL_NCR6DG;
  if (name === "ilocos-6d") return API_FULL_REGI6DG;
  if (name === "calabarzon-6d") return API_FULL_REGIV6DG;
  if (name === "mimaropa-6d") return API_FULL_MMRP6DG;
  if (name === "davao-6d") return API_FULL_REGXI6DG;
}

export function judgeNextGameAPI(gameCode) {
  if (gameCode === "TL2DG") return `${api}D2Future/TL2DG`;
  if (gameCode === "TL3DG") return `${api}D3Future/TL3DG`;
  if (gameCode === "TL4DG") return `${api}D4Future/TL4DG`;
  if (gameCode === "TL6DG") return `${api}D6Future/TL6DG`;
  if (gameCode === "NCR2DG") return `${api}D2Future/NCR2DG`;
  if (gameCode === "REGII2DG") return `${api}D2Future/REGII2DG`;
  if (gameCode === "REGV2DG") return `${api}D2Future/REGV2DG`;
  if (gameCode === "REGX2DG") return `${api}D2Future/REGX2DG`;
  if (gameCode === "NCR3DG") return `${api}D3Future/NCR3DG`;
  if (gameCode === "REGI3DG") return `${api}D3Future/REGI3DG`;
  if (gameCode === "REGVI3DG") return `${api}D3Future/REGVI3DG`;
  if (gameCode === "REGVIII3DG") return `${api}D3Future/REGVIII3DG`;
  if (gameCode === "REGXII3DG") return `${api}D3Future/REGXII3DG`;
  if (gameCode === "BARMM3DG") return `${api}D3Future/BARMM3DG`;
  if (gameCode === "NCR4DG") return `${api}D4Future/NCR4DG`;
  if (gameCode === "CAR4DG") return `${api}D4Future/CAR4DG`;
  if (gameCode === "REGIII4DG") return `${api}D4Future/REGIII4DG`;
  if (gameCode === "REGVII4DG") return `${api}D4Future/REGVII4DG`;
  if (gameCode === "REGIX4DG") return `${api}D4Future/REGIX4DG`;
  if (gameCode === "REGXIII4DG") return `${api}D4Future/REGXIII4DG`;
  if (gameCode === "NCR6DG") return `${api}D6Future/NCR6DG`;
  if (gameCode === "REGI6DG") return `${api}D6Future/REGI6DG`;
  if (gameCode === "REGIV6DG") return `${api}D6Future/REGIV6DG`;
  if (gameCode === "MMRP6DG") return `${api}D6Future/MMRP6DG`;
  if (gameCode === "REGXI6DG") return `${api}D6Future/REGXI6DG`;
}

export const ALL_Future_API = [
  fetchApi(API_Future_TL2DG),
  fetchApi(API_Future_TL3DG),
  fetchApi(API_Future_TL4DG),
  fetchApi(API_Future_TL6DG),
  fetchApi(API_Future_NCR2DG),
  fetchApi(API_Future_REGII2DG),
  fetchApi(API_Future_REGV2DG),
  fetchApi(API_Future_REGX2DG),
  fetchApi(API_Future_NCR3DG),
  fetchApi(API_Future_REGI3DG),
  fetchApi(API_Future_REGVI3DG),
  fetchApi(API_Future_REGVIII3DG),
  fetchApi(API_Future_REGXII3DG),
  fetchApi(API_Future_BARMM3DG),
  fetchApi(API_Future_NCR4DG),
  fetchApi(API_Future_CAR4DG),
  fetchApi(API_Future_REGIII4DG),
  fetchApi(API_Future_REGVII4DG),
  fetchApi(API_Future_REGIX4DG),
  fetchApi(API_Future_REGXIII4DG),
  fetchApi(API_Future_NCR6DG),
  fetchApi(API_Future_REGI6DG),
  fetchApi(API_Future_REGIV6DG),
  fetchApi(API_Future_MMRP6DG),
  fetchApi(API_Future_REGXI6DG),
];
