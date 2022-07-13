export const getFirstDayOfCurrentMonth = () => {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), 1);
};
