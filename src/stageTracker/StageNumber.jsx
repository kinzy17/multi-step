import { useDispatch, useSelector } from 'react-redux'
import { stageAction } from "../store/stage-slice";
import './StageNumber.css'

const StageNumber = ({ number }) => {
    const dispatch = useDispatch();
    const currentStage = useSelector((state) => state.stage.stage)

    let background = undefined;
    let color = undefined;

    if (currentStage === number) {
        background = '#00FFFF'
        color = '#000';
    }
    const buttonStyle = {
        backgroundColor: background || "#1772A7",

        // width: width || "100%",
        // height: height || "auto",
        // maxWidth: maxWidth || "100%",
        color: color || "white",
        // backgroundColor: backgroundColor || "#C92E81",
        // borderRadius: borderRadius || "5px",
        // border: border || "none",

    };

    const setStage = () => {
        dispatch(stageAction.setStage(Number(number)))
    };
    return (
        <div
            className="number-circle"
            style={buttonStyle}
        >
            <button
                className='stageNumberButton'
                onClick={setStage}
                id={number}
                style={buttonStyle}
            >
                {number}
            </button>
        </div>
    )
}

export default StageNumber