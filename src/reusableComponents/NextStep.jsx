
import { useDispatch } from 'react-redux';
import './NextStep.css'
import { stageAction } from '../store/stage-slice';

function NextStep({callBackFunction, useCallBack}) {
    const dispatch = useDispatch();
    const nextStepButton = () => {
        if(useCallBack){
            callBackFunction()
        }else{
        dispatch(stageAction.nextStage())
        }
    };

    return (

        <button
            className='nextStep'
            onClick={nextStepButton}
        >Next Step</button>
    )

}
export default NextStep;