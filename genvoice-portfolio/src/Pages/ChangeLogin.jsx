import React, { useState } from 'react';
import "../css/ChangeLogin.css";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { FaLock } from "react-icons/fa";
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { setLoading } from '../redux/appSlice';
import changeLoginService from '../Services/ChangeLoginService';
import { toast } from 'react-toastify';
import { newPasswordSchema } from '../Schemas/NewPasswordSchema';
import { useNavigate } from 'react-router-dom';

function ChangeLogin() {
    const [userId, setUserId] = useState("f711");
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const submit = async (values, actions) => {
        try {
            dispatch(setLoading(true));
            const response = await changeLoginService.changeLogin(userId, values.newPassword);
            if (response) {
                toast.success("Password successfully changed!");
                navigate("/login");
            }

        } catch (error) {
            toast.error("An error occurred wihle changing the password.");
        } finally {
            dispatch(setLoading(false));
        }
    }



    const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
        initialValues: {
            username: '',
            newPassword: '', //old password GenVoice123!
        },
        onSubmit: submit,
        validationSchema: newPasswordSchema
    });

    const clearForm = () => {
        resetForm();
    }


    return (
        <div className='change-login'>
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <div className="form-div">
                        <h3 className='login-title'> Password Change Page</h3>
                        <TextField
                            id="username"
                            value={values.username || ''}
                            onChange={handleChange}
                            sx={{ width: "350px", marginBottom: "25px" }}
                            placeholder='user name'
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="standard"
                            helperText={errors.username && <span style={{ color: "brown" }}>{errors.username}</span>}

                        />
                        <TextField
                            id="newPassword"
                            value={values.newPassword || ''}
                            onChange={handleChange}
                            sx={{ width: "350px", marginBottom: "25px" }}
                            placeholder='new password'
                            type='password'
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FaLock />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="standard"
                            helperText={errors.newPassword && <span style={{ color: 'brown' }}>{errors.newPassword}</span>}
                        />
                        <div className="btns">
                            <Button onClick={() => navigate("/")} size='small' variant="contained" sx={{ textTransform: "none", marginRight: "10px", backgroundColor: "#23d5ab" }} >Back to Home</Button>

                            <Button type='submit' size='small' variant="contained" sx={{ textTransform: "none", marginRight: "10px", backgroundColor: "#ee7752" }} >Change Password</Button>

                            <Button onClick={clearForm} size='small' variant="contained" sx={{ textTransform: "none", backgroundColor: "#23a6d5" }}>Reset</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangeLogin;
