export const Time = () => {
  const time = new Date().toLocaleTimeString();
  return time.slice(0, -3);
};
