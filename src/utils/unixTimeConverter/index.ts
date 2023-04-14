export const unixTimeConverter = (unixTime: Date | undefined) => {
  let time;

  if (unixTime !== undefined) {
    time = new Date(unixTime.valueOf() * 1000);
    const hours = time.getHours();
    const minutes = "0" + time.getMinutes();
    const formattedTime = hours + ":" + minutes.substr(-2);
    return formattedTime;
  }

  return null;
};
