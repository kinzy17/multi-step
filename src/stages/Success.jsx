import './Success.css'

import { doubleBolt } from '../images/allImage'
const Success = ()=>{
    return(
        <div className='success'>
            <img src={doubleBolt} alt=''/>
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope yo have fun using our platform. If you ever need support, please feel free to email us at osisiogubenjamin1@gmail.com</p>
        </div>
    )
}

export default Success;