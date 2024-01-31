import { useEffect, useState } from "react";
import StageNumber from "./StageNumber"
import "./StageTracker.css"
import { gameRoom } from '../images/allImage'

const StageTracker = () => {

    const mainDivStyle = {
        backgroundImage: `url(${gameRoom})`,
    }
    
    return (
        <div className="stageTrackerLeftMainDiv" style={mainDivStyle}>
            <div className="differentStages">
                <StageNumber number={1} />
                <StageNumberAndStageName pTag={"STEP 1"} h5tag={"YOUR INFO"} />
            </div>
            <div className="differentStages">
                <StageNumber number={2} />
                <StageNumberAndStageName pTag={"STEP 2"} h5tag={"SELECT PLAN"} />
            </div>
            <div className="differentStages">
                <StageNumber number={3} />
                <StageNumberAndStageName pTag={"STEP 3"} h5tag={"ADD-ONS"} />

            </div>
            <div className="differentStages">

                <StageNumber number={4} />
                <StageNumberAndStageName pTag={"STEP 4"} h5tag={"SUMMARY"} />
            </div>
        </div>
    )
}

const StageNumberAndStageName = ({ pTag, h5tag }) => {
    const [isPhoneScreen, setPhoneScreen] = useState(window.innerWidth <= 460);

    useEffect(() => {
        const handleResize = () => {
            setPhoneScreen(window.innerWidth <= 450);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    if (!isPhoneScreen)
        return (
            <div className="stageDescription">
                <p>{pTag}</p>
                <h5>{h5tag}</h5>
            </div>
        )

}

export default StageTracker