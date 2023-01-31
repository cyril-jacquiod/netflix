
import data from "../data.json";

const Section = () => {
  return (
  {data.map((list) =>{
    return (
      <DataList
      category={list.category}
      images={list.images}
      />
    );
    })}
  )};

export default Section;
