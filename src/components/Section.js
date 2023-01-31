import data from "./data.json";
const Section = () => {
  return (
    <div>
      {data.map((item) => {
        console.log(item);
      })}
    </div>
  );
};

export default Section;
