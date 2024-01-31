
import { useDispatch, useSelector } from "react-redux";
import { checkedAction } from "../store/checked-slice";
import './AddonsDescription.css'
import { toggleAction } from "../store/toggle-slice";

const AddonsDescription = ({ header, stateHasChanged, pTag, price, itemId }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.checkedItems.checkedItems)
    const toggle = useSelector((state)=> state.toggle);
    const isToggled = toggle.currentToggle
    
    let isPreviouslyChecked = items.hasOwnProperty(itemId)
    
    let duration = isToggled? 'yr': 'mo';
    let backgroundColor = ''
    
    if(isPreviouslyChecked){
        backgroundColor = 'rgb(244, 248, 252)'
    }

    const cardStyle = {
        backgroundColor : backgroundColor,
        // border: '1px solid blue'
    
    } 
    const checkBoxHandler = (e) => {
        
        let isSelected = e.target.checked;
        let id = e.target.value
        handleUpdate(isSelected, id)
    
    }
    const handleUpdate = (isSelected, id) =>{
        
        if (stateHasChanged || isSelected) {
         
            dispatch(checkedAction.addToCheckedItems(   {
                id: itemId,
                name: header,
                description: pTag,
                price: price

            }))
        }else{
            dispatch(checkedAction.removeFromCheckedItems(id))
            
        }
    }
    if (stateHasChanged && isPreviouslyChecked) {
        handleUpdate()
        if (itemId === 1) {
            dispatch(toggleAction.handleServiceChange(false))
        }
        if (itemId === 2) {
            dispatch(toggleAction.handleStorageChange(false))
        }
        if (itemId === 3) {
            dispatch(toggleAction.handleProfileChange(false))
        }
    }

    return (

        <div 
        className="addons-checkbox-div"
        style={cardStyle}
        >
            <input type="checkbox" checked={isPreviouslyChecked} value={itemId} onChange={checkBoxHandler} />
            <div className="addons-description">
                <h3>{header}</h3>
                <p className="pTagEnhance">{pTag}</p>
            </div>
            <p className="addons-price">+${price} / {duration}</p>
        </div>

    )
}

export default AddonsDescription