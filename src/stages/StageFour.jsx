
import  './StageFour.css'
import { useDispatch, useSelector } from "react-redux";
import GoBack from "../reusableComponents/GoBack";
import { stageAction } from '../store/stage-slice';



function StageFour() {

    const dispatch = useDispatch();
    let addons = useSelector((state) => state.checkedItems.checkedItems )
    let plan = useSelector((state) => state.plan.plan )
    const toggle = useSelector((state)=> state.toggle);
    const isToggled = toggle.currentToggle
    
    let duration = isToggled? 'yr': 'mo';
    
    let keys = Object.keys(addons);
 
    
    let total = 0

   const retrivePlan =()=>{
  
    if(plan === '') return 
    let name = plan.name
    let price = plan.price

    total = total + price
    return <div>
                <li className="displayList"><p className='nameTag'>{name}</p> <p>+${price}/ {duration}</p></li>
                <button
                className='change'
                onClick={() => dispatch(stageAction.setStage(2))}
                >change</button>
            </div>
   }
    const retriveAddOn = (key) =>{
        let value = addons[key]
        
        let name = value.name;
        let price = value.price;
        
        total = total + price
        return  <li key={value.id} className="displayList"><p className='nameTag'>{name}</p> <p>+${price}/ {duration}</p></li>
    }
    
    const vary =()=>{
        return duration === 'yr'? 'Year' : 'Month'
    }
    return (
        <div>
            <h1>Finishing up</h1>
            <p className='double-check'>Double-check everything looks Ok before confirming.</p>
            <div className='preview-display-div'>
                <div className="plan">
                    {retrivePlan()}
                    <hr/>
                </div>
                <div className="add-ons">  
                {keys.map((key) =>(
                    retriveAddOn(key)
                )
            )}
              </div>
            </div>
              <li className="displayTotal"><p className='totalPer'>Total (per {vary()})</p> <p className='total'>+${isNaN(total)? 0 : total}/ {duration}</p></li>
            <div className="buttonLine">
                <GoBack /> 
                
                <button
            className='nextStep'
            onClick={()=>   dispatch(stageAction.setStage(5))}
                >confirm</button>
            </div>
        </div>
    )
}

export default StageFour;