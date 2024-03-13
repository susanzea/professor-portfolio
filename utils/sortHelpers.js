export const compare = (a, b, order = "asc") => {
  if (a < b) return order === "asc" ? -1 : 1;
  if (a > b) return order === "asc" ? 1 : -1;

  return 0;
};
