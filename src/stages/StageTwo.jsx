import GoBack from "../reusableComponents/GoBack";
import NextStep from "../reusableComponents/NextStep";
import PlainCard from "../reusableComponents/PlainCard";
import './StageTwo.css'

import { doubleBolt, joyStick, gamePad } from '../images/allImage'
import Toggle from "../reusableComponents/Toggle";
import { useSelector } from "react-redux";


function StageTwo() {
   
    let toggle = useSelector((state)=> state.toggle);
    let isChecked = toggle.currentToggle;
    let stateHasChanged = toggle.stateChange
    
    return (
        <div>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div className="cards">
                <PlainCard imageSource={joyStick} stateHasChanged={stateHasChanged? stateHasChanged: false} gameType={"Arcade"} duration={isChecked? "yr": "mo"} price={isChecked? 90: 9}/>
                <PlainCard imageSource={doubleBolt} stateHasChanged={stateHasChanged? stateHasChanged: false} gameType={"Advanced"} duration={isChecked? "yr": "mo"} price={isChecked? 120: 12} />
                <PlainCard imageSource={gamePad} stateHasChanged={stateHasChanged? stateHasChanged: false} gameType={"Pro"} duration={isChecked? "yr": "mo"} price={isChecked? 150: 15} />
           
            </div>
            <div className="toggle">
              
               <p> Monthly</p> <Toggle/> <p>Yearly</p>
            </div>

            <div className="buttonLine">
                <GoBack /> <NextStep />
            </div>
        </div>
    )
}

export default StageTwo;