import React from 'react';
import google from '../../../Images/google/Flat-design-Google-logo-design-Vector-PNG.png'
import facebook from '../../../Images/google/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import github from '../../../Images/google/computer-icons-github-icon-design-logo-png-favpng-k5T4PbVkQcj95MdEmqdw9hhk7.jpg'
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loding from '../../Shared/Loding/Loding';
const SocailLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error || error1) {
        errorElement= <p className='text-danger'>Error: {error?.message}{error1?.message} </p>
    

    }
if(loading1||loading){
    return  <Loding></Loding>
}
    
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex  align-items-center'>

                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div className=' '>
                <button onClick={()=>signInWithGoogle()} className='btn btn-primary d-block w-50  mx-auto my-2 '>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                { errorElement}
                <button className='btn btn-primary w-50 d-block mx-auto'>

                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sing In</span>
                </button>
                <button onClick={()=>signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto my-2'>

                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>GitHub Sing In</span>
                </button>
            </div>

        </div>
    );
};

export default SocailLogin;