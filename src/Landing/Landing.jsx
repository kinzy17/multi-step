import { useSelector } from "react-redux"
import StageTracker from "../stageTracker/StageTracker"
import StageFour from "../stages/StageFour"
import StageOne from "../stages/StageOne"
import StageThree from "../stages/StageThree"
import StageTwo from "../stages/StageTwo"
import './Landing.css'
import Success from "../stages/Success"

const Landing = () => {
    let currentStage = useSelector((state) => state.stage.stage)


    const currentStageDisplay = () => {
        switch (currentStage) {
            case 1: return <StageOne />
            case 2: return <StageTwo />
            case 3: return <StageThree />
            case 4: return <StageFour />
            case 5: return <Success/>
            default : return
        }
    }

    const landingStyle = {
        height:  window.innerHeight - window.innerHeight/4.5,
        width: window.innerWidth - window.innerWidth /2.5,
        paddingTop: '1.5%',
    }

    // flex flex-wrap
    // grid gap-8 md:grid-cols-2
    return (
        <div 
        className="landing "
        style={landingStyle}
        >
            <div className="form-main-div ">
                <div className="stageTracter">
                    <StageTracker />
                </div>
                <div className="stageDetail">{currentStageDisplay()}</div>
            </div>
        </div>
    )

}

export default Landing