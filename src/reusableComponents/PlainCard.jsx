
import { useDispatch, useSelector } from 'react-redux';
import { planAction } from '../store/plan-slice';
import './PlainCard.css';
import { toggleAction } from '../store/toggle-slice';

const PlainCard = ({ imageSource,gameType , stateHasChanged, duration , price }) => {
    const plan = useSelector((state) => state.plan.plan)
 
    const dispatch = useDispatch();
    let background = undefined;
    let color = undefined;
    let isCurrentPlan = plan.name === gameType;

    if(isCurrentPlan){
        background = "#2372B7";
        color = "#fff"
    }

    const divStyle = {
        backgroundColor:  "#2372B7",
    }
    const buttonStyle = {
        backgroundColor : background || "#fff",
        color: color || "#000",
    }
    const setPlan = () => {
       
        dispatch(planAction.setPlan( {
            name: gameType,
            price: price
        })
        )
      
    };
    if (stateHasChanged && isCurrentPlan) {
        setPlan()
        dispatch(toggleAction.handleStateChange(false))
    }

    return (
        <div 
        className="card-main-body"
        style={divStyle}
        >
            <button
            style={buttonStyle}
                className="card-main-body-button"
                onClick={setPlan}
            >
                <div className="plain-card-image-div">
                    <img src={imageSource} alt="" />
                </div>

                <h3>{gameType}</h3>
                <p>${price}/{duration}</p>
                {duration==='yr' && <p>2 months free</p>}
            </button>
        </div>
    )
}

export default PlainCard