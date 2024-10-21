import { useState, useEffect } from 'react';
import * as Form from '@radix-ui/react-form';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { BeatLoader } from 'react-spinners';

// API Imports
import usersAPI from '../api/users';

// Hook imports
import useAuth from '../hooks/useAuth';
import useLog from "../hooks/useLog";

// Styling
import '../styles/form.css';


const Login = () => 
{
    const { loading, auth, setAuth } = useAuth();

    useEffect(() => 
    {
        console.log('triggering', auth)
        if ( auth?.id ) 
        {
            console.log('triggering 2')
            handleRedirect(auth)
        } 
    }, [auth])

    let navigate = useNavigate();

    const handleRedirect = (userAuthInfo) =>
    {
        let redirect;
        if ( userAuthInfo.role == 'ADMIN' )
        {
            redirect = '/select-creator'
        } else if ( userAuthInfo.role == 'CREATOR' )
        {
            redirect = '/edit-channel-content/null'
        } else
        {
            redirect = '/login'
        }
        navigate(redirect, { replace: true });
    }
    

    const { development } = useLog();

    
    const [loginLoading, setLoginLoading] = useState(false);
    const [loginApiError, setLoginApiError] = useState('');

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        setLoginLoading(true);
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const res = await usersAPI.login(data);
        if(development)
        {
            console.log(`LOGIN CALL ${res}`);
        }
        if(res['status'] !== 200)
        {
            let errors = await res['data'];
            if(development) console.error(errors);
            setLoginApiError(errors['detail']);
            setLoginLoading(false);
            return;
        }
        const userDetails = await res['data'];
        let userAuth = {
            'id': userDetails['user']['_id'],
            'name': userDetails['user']['name'],
            'profile_pic': userDetails['user']['profile_pic'],
            'email': userDetails['user']['email'],
            'email_verified': userDetails['user']['email_verified'],
            'role': userDetails['user']['role'],
            'accepted_terms': userDetails['user']['accepted_terms'],
            'your_creators': userDetails['user']['your_creators'],
            'google_sign_in': userDetails['user']['google_sign_in'],
            'has_password': true,
            'token': userDetails['token']
        }
        if ( userAuth['role'] === 'ADMIN' || userAuth['role'] === 'CREATOR' )
        { 
            Cookies.set('jwtToken', userDetails['token'], { expires: 365 });
            setAuth(userAuth);
            setLoginLoading(false);
            handleRedirect(userAuth);
        } else {
            setLoginApiError('You must be an Administrator or a Creator to log in.');
            setLoginLoading(false);
        }
    }

    return (
        <div className="form-section">
            { 
                !loading &&
                (
                    <Form.Root className="FormRoot form" onSubmit={handleSubmit}>
                        {
                            loginApiError && <div style={{ color: 'red', fontSize: '1rem', marginBottom: '1rem', textAlign: 'center' }}>
                                {loginApiError}
                            </div>
                        }
                        <Form.Field className="FormField" name="email">
                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                                <Form.Label className="FormLabel">Email:</Form.Label>
                                <Form.Message className="FormMessage" match="valueMissing">
                                    Please enter your email
                                </Form.Message>
                                <Form.Message className="FormMessage" match="typeMismatch">
                                    Please provide a valid email
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input className="Input" type="email" required />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field className="FormField" name="password">
                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                                <Form.Label className="FormLabel">Password:</Form.Label>
                                <Form.Message className="FormMessage" match="valueMissing">
                                    Enter your password
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input className="Input" type="password" required />                        
                            </Form.Control>
                        </Form.Field>
                        <Form.Submit asChild>
                            <div className='form-button-row'>
                                <button className="Button" style={{ marginTop: 10 }}>
                                    {
                                        loginLoading ? <><BeatLoader color="var(--clr-text)" size={16} /></> : <>Login</>
                                    }
                                </button>
                            </div>
                        </Form.Submit>
                    </Form.Root>
                )
            }
            {/* <div className='extra-links'>
                <Link to={'/password-reset'} className='sm-txt'>Forgot Password?</Link>
                <div className='sm-txt'>Don't have an account? - <Link to={'/register'} className='sm-txt'>Sign up</Link></div>
            </div> */}
        </div>
    )
}
export default Login;
