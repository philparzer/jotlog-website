

import LazyVideo from "./LazyVideo";
import Phone from "./Phone";

interface SpeedComparisonProps {}

const SpeedComparison = ({}: SpeedComparisonProps) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Phone>
          <LazyVideo src="jotlog-spd.mp4" height={99.5} restartAfter={20}/>
        </Phone>
        <div className="">jotlog</div>
      </div>
      <div className="flex flex-col items-center">
        <Phone>
          <LazyVideo src="notion-spd.mp4" height={99.5} restartAfter={20}/>
        </Phone>
        <span className="opacity-70">notion</span>
      </div>
      <div className="flex flex-col items-center">
        <Phone>
          <LazyVideo src="google-spd.mp4" height={99.5} restartAfter={20}/>
        </Phone>
        <span className="opacity-70">google keep</span>
      </div>
    </>
  );
};

export default SpeedComparison;
