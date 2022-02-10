import DatePicker from "sassy-datepicker";

export default function pickSign({ setStarField }) {
  const onChange = (date) => {
    let astro_sign = "";
    const currDate = date.toString().slice(4, 11).trim();
    const day = Number(currDate.toString().slice(5, 7).trim());
    const month = currDate.slice(0, 3);

    if (month == "Dec") {
      if (day < 22) astro_sign = "Sagittarius";
      else astro_sign = "capricorn";
    } else if (month == "Jan") {
      if (day < 20) astro_sign = "Capricorn";
      else astro_sign = "aquarius";
    } else if (month == "Feb") {
      if (day < 19) astro_sign = "Aquarius";
      else astro_sign = "pisces";
    } else if (month == "Mar") {
      if (day < 21) astro_sign = "Pisces";
      else astro_sign = "aries";
    } else if (month == "Apr") {
      if (day < 20) astro_sign = "Aries";
      else astro_sign = "taurus";
    } else if (month == "May") {
      if (day < 21) astro_sign = "Taurus";
      else astro_sign = "gemini";
    } else if (month == "Jun") {
      if (day < 21) astro_sign = "Gemini";
      else astro_sign = "cancer";
    } else if (month == "Jul") {
      if (day < 23) astro_sign = "Cancer";
      else astro_sign = "leo";
    } else if (month == "Aug") {
      if (day < 23) astro_sign = "Leo";
      else astro_sign = "virgo";
    } else if (month == "Sep") {
      if (day < 23) astro_sign = "Virgo";
      else astro_sign = "libra";
    } else if (month == "Oct") {
      if (day < 23) astro_sign = "Libra";
      else astro_sign = "scorpio";
    } else if (month == "Nov") {
      if (day < 22) astro_sign = "scorpio";
      else astro_sign = "sagittarius";
    }

    setStarField(astro_sign);
  };

  return <DatePicker onChange={onChange} />;
}
