
import { useDispatch, useSelector } from "react-redux";
import { toggleAction } from "../store/toggle-slice";


function Toggle (){
    // bg-gray-900 h-screen flex justify-center items-center
    // let toggleClassCheck = btnState? 'active': null
    let toggle = useSelector((state)=> state.toggle);
    let dispatch = useDispatch();

    let currentToggle = toggle.currentToggle
    let previousToggle = toggle.previousToggle
    let isPreviouslyChecked = false;


    const handleUpdateStates = () =>{
        dispatch(toggleAction.handleStateChange(true))
        dispatch(toggleAction.balanceState(currentToggle))

        dispatch(toggleAction.handleServiceChange(true))
        dispatch(toggleAction.handleStorageChange(true))
        dispatch(toggleAction.handleProfileChange(true))

       
    }
    
    
    if(previousToggle !== currentToggle ){
        handleUpdateStates()
    }
    

    
   if(currentToggle){
    isPreviouslyChecked = currentToggle
   }
    const checkBoxHandler = (e) => {
        
        let isChecked = e.target.checked;
        dispatch(toggleAction.setToggle(isChecked))
             
    }
    
    const toggleStyle = {
        margin : '0 3% 0 3%'
    }
    return (
        <div className="" style={toggleStyle}>
            <label htmlFor="togle-switch">
                <input 
                type="checkbox" 
                id="toggle-switch"
                checked ={isPreviouslyChecked}
                onChange={checkBoxHandler}
                 className="cursor-pointer h-12 w-36 rounded-full appearance-none bg-white bg-opacity-5  border-2 border-neon checked:bg-gray-600 transition duration-500 relative"/>
            </label>

        </div>
    )
}

export default Toggle;