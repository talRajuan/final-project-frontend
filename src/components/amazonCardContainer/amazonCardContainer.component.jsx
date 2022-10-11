import AmazonCardItemComponent from "../amazonCardItem/amazonCardItem.component";

const initItemsArr = ["adfasdfsdf", "rthrthserer", "sregsrgsreg", "sdfgwgrgg"];

const AmazonCardContainerComponent = () => {
  return (
    <div className="row">
      {initItemsArr.map((item, idx) => (
        <div className="col">
          <AmazonCardItemComponent key={idx} title={item} />
        </div>
      ))}
    </div>
  );
};

export default AmazonCardContainerComponent;
