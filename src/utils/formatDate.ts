const formatDate = (value: Date): string => {
  const dt = new Date(value);
  const year = dt.getFullYear();
  const month = `00${dt.getMonth() + 1}`.slice(-2);
  const day = `00${dt.getDate()}`.slice(-2);
  return `${day}/${month}/${year}`;
};

export default formatDate;
