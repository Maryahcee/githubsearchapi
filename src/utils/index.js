const formatDate = (rawDate) => {
  // 25 Jan 2022
  const d = new Date(rawDate);
  const monthNames = [
    "Jan",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
};

export default formatDate;
