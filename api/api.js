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

export function judgeTrendingAndHistoryAPI(name) {
  if (name === "2D Lotto") return API_FULL_TL2DG;
  if (name === "3D Lotto") return API_FULL_TL3DG;
  if (name === "4D Lotto") return API_FULL_TL4DG;
  if (name === "6D Lotto") return API_FULL_TL6DG;
  if (name === "Manila 2D") return API_FULL_NCR2DG;
  if (name === "Cagayan 2D") return API_FULL_REGII2DG;
  if (name === "Bicol 2D") return API_FULL_REGV2DG;
  if (name === "Mindanao 2D") return API_FULL_REGX2DG;
  if (name === "Manila 3D") return API_FULL_NCR3DG;
  if (name === "Ilocos 3D") return API_FULL_REGI3DG;
  if (name === "Western Visayas 3D") return API_FULL_REGVI3DG;
  if (name === "Eastern Visayas 3D") return API_FULL_REGVIII3DG;
  if (name === "Soccsksargen 3D") return API_FULL_REGXII3DG;
  if (name === "Bangsamoro 3D") return API_FULL_BARMM3DG;
  if (name === "Manila 4D") return API_FULL_NCR4DG;
  if (name === "Cordillera 4D") return API_FULL_CAR4DG;
  if (name === "Luzon 4D") return API_FULL_REGIII4DG;
  if (name === "Central Visayas 4D") return API_FULL_REGVII4DG;
  if (name === "Zamboanga 4D") return API_FULL_REGIX4DG;
  if (name === "Caraga 4D") return API_FULL_REGXIII4DG;
  if (name === "Manila 6D") return API_FULL_NCR6DG;
  if (name === "Ilocos 6D") return API_FULL_REGI6DG;
  if (name === "Calabarzon 6D") return API_FULL_REGIV6DG;
  if (name === "Mimaropa 6D") return API_FULL_MMRP6DG;
  if (name === "Davao 6D") return API_FULL_REGXI6DG;
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
