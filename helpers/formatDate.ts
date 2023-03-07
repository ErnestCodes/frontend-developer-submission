import moment from "moment";

const formatDate = (time: string) => {
  const newTime = moment(time).format("LLLL");

  return { newTime };
};

export default formatDate;
