export const unixTimeConverter = (unixTime: Date) => {
  //@ts-ignore
  const time = new Date(unixTime * 1000);
  const hours = time.getHours();
  const minutes = "0" + time.getMinutes();
  const formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};
