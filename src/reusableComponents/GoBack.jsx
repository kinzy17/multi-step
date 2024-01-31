
import { useDispatch } from 'react-redux';
import './GoBack.css'
import { stageAction } from '../store/stage-slice';
function GoBack() {

    const dispatch = useDispatch();
    const goBackButton = () => {
        dispatch(stageAction.goBack())
    };

    return (
        <button
            className='goBack'
            onClick={goBackButton}
        >Go Back</button>
    )

}
export default GoBack;