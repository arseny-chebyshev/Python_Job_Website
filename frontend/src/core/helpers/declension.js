export const declension = (count) => {
  count = count % 100;
  let num = count % 10;
  if (count > 10 && count < 20) return "вакансий";
  if (num > 1 && num < 5) return "вакансии";
  if (num === 1) return "вакансия";
  return "вакансий";
};

export const declensionStack = (count) => {
  count = count % 100;
  let num = count % 10;
  if (count > 10 && count < 20) return "требований";
  if (num > 1 && num < 5) return "требования";
  if (num === 1) return "требование";
  return "требований";
};
