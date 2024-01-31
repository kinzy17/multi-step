
import NextStep from '../reusableComponents/NextStep';
import './StageOne.css';


import { useDispatch, useSelector } from 'react-redux';
import { stageAction } from '../store/stage-slice';
import { userAction } from '../store/user-slice';
import { useState } from 'react';


function StageOne() {
    const storeUser = useSelector(state => state.user.user)
    const dispatch = useDispatch();
        const [user, setUser] = useState({
            userName: "",
            email: "",
            phoneNumber: "",
        });
        const[error, setError] = useState({
            nameError : false,
            nameErrorMessage : '',
            emailError: false,
            emailErrorMessage : '',
            phoneNumberError: false,
            phoneNumberErrorMessage: '',
            hasError: false,
        })

    let foundStoreUser = {}
 
    if(Object.entries(storeUser).length !== 0){
        foundStoreUser = storeUser;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => {
            return { ...prev, [name]: value };
        });

    };
    const handleSetError = (name, value) =>{
        setError((prev)=> {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit =(e) =>{
        // e.preventDefault()

        let isCorrectEmail = true
        let isCorrctNumber = true ;
        let isNotCorrectNumber = user.phoneNumber === ""
        let isEmptyEmail = user.email === "";
        let isEmptyName = user.userName === "";
        
        let requiredField = 'This field is required!';
        if (isEmptyName){
            handleSetError("nameError", true)
            handleSetError('hasError', true)
            handleSetError("nameErrorMessage", requiredField )
            
        }
        if(isEmptyEmail){
            handleSetError("emailError", true)
            handleSetError('hasError', true)
            handleSetError("emailErrorMessage", requiredField )
            
        }
        else if(!isCorrectEmail){
            handleSetError("emailError", true)
            handleSetError('hasError', true)
            handleSetError("emailErrorMessage", 'Email incorrect!')
        }
        if(isNotCorrectNumber){
            handleSetError("phoneNumberError", true)
            handleSetError('hasError', true)
            handleSetError("phoneNumberErrorMessage", requiredField)
           
        }
        if (isCorrectEmail && isCorrctNumber && !isEmptyEmail && !isEmptyName){
            handleSetError("emailError", false)
            handleSetError("phoneNumberError", false)

            dispatch(userAction.setUserDetails(user))
            dispatch(stageAction.nextStage())
        }
    }
    const reverseAllError = () => {
        handleSetError("emailError", false)
        handleSetError("phoneNumberError", false)
        handleSetError("nameError", false)
    }
    if (error.hasError) {
        setTimeout (()=>{
            reverseAllError()
        }, 8000)
    }
    return (
        <div className='stage-one-main-div'>
            <h1>Personal info</h1>
            <p className='please-provide'>Please provide your name, email address, and phone number</p>
            {/* <form onSubmit={handleSubmit}> */}
            <div>
                <div className='labelError'>
                    <label>Name</label>
                    {error.nameError &&<p className='errorTag'>{ error.nameErrorMessage}</p>}
                </div>
                <input
                    type="text"
                    name="userName"
                    placeholder='  e.g Stephen King'
                    // value={foundStoreUser.userName}
                    onChange={handleChange}
                />
                {/* <div className='label-input-div'> */}
                    <label>Email Address</label>
                    {error.emailError && <p className='errorTag'>{ error.emailErrorMessage}</p>}
                {/* </div> */}

                <input
                    type="email"
                    placeholder="  e.g example@email.com"
                    name="email"
                    // value={foundStoreUser.email}
                    onChange={handleChange}
                    />
               
                <label>Phone Number</label>
                {error.phoneNumberError && <p className='errorTag'>{ error.phoneNumberErrorMessage}</p>}
                <input
                    type="text"
                    placeholder="  e.g +1 234 567 890"
                    name="phoneNumber"
                    // value={foundStoreUser.phoneNumber}
                    onChange={handleChange}
                />
                <NextStep
                 callBackFunction={handleSubmit} useCallBack={true} 
                  />
            </div>
            {/* </form> */}
        </div>
    )
}

export default StageOne;