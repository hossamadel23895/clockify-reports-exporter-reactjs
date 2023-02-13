export const formatDateClockify = (obj) => {
  let year = obj.$y;
  let month = ("0" + (obj.$M + 1)).slice(-2);
  let day = ("0" + obj.$D).slice(-2);
  let hour = ("0" + obj.$H).slice(-2);
  let min = ("0" + obj.$m).slice(-2);
  return `${year}-${month}-${day}T${hour}:${min}:00.000Z`;
};

export const formatDateLib = (obj) => {
  return `${obj.$y}-${obj.$M + 1}-${obj.$D} ${obj.$H}:${obj.$m}`;
};
