
import AddonsDescription from "../reusableComponents/AddonsDescription";
import GoBack from "../reusableComponents/GoBack";
import NextStep from "../reusableComponents/NextStep";
import "./StageThree.css"
import { useSelector } from "react-redux";

function StageThree() {
    const toggle = useSelector((state)=> state.toggle);
    const isToggled = toggle.currentToggle
    let serviceHasChanged = toggle.serviceToggle
    let storageHasChanged = toggle.storageToggle
    let profileHasChanged = toggle.profileToggle

    return (
        <div>
            <h1 >Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className="addons-description-main-div">
                <AddonsDescription header={"Online service"} stateHasChanged={serviceHasChanged? serviceHasChanged: false} pTag={"Access to multiplayer games"} price={isToggled? 10 : 1} itemId={1} />
                <AddonsDescription header={"Larger storage"} stateHasChanged={storageHasChanged? storageHasChanged: false} pTag={"Extra 1TB of cloud save"} price={isToggled? 20 : 2} itemId={2}/>
                <AddonsDescription header={"Customizable Profile"} stateHasChanged={profileHasChanged? profileHasChanged: false} pTag={"Custom theme on your profile"} price={isToggled? 20 : 2} itemId={3} />

            </div>
            <div className="buttonLine">
                <GoBack /> <NextStep />
            </div>
        </div>
    )
}

export default StageThree;