import React from 'react';
import "../css/Login.css";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { FaLock } from "react-icons/fa";
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { loginPageSchema } from '../Schemas/LoginPageSchema';
import { useDispatch } from "react-redux";
import { setCurrentUser, setLoading } from '../redux/appSlice';
import { toast } from 'react-toastify';
import loginPageService from '../Services/LoginPageService';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const checkUser = (userList, username, password) => {
        const response = { result: false, currentUser: null }

        userList.forEach((user) => {
            if (user.username === username && user.password === password) {
                response.result = true;
                response.currentUser = user;
            }
        })
        return response;
    }


    const submit = async (values, actions) => {
        try {
            dispatch(setLoading(true));
            const response = await loginPageService.login();
            if (response) {
                const checkUserResponse = checkUser(response, values.username, values.password);
                if (checkUserResponse.result && checkUserResponse.currentUser) {
                    dispatch(setCurrentUser(checkUserResponse.currentUser));
                    toast.success("You have been successfully logged in.");
                    localStorage.setItem("currentUser", JSON.stringify(checkUserResponse.currentUser));
                    navigate("/");
                } else {
                    toast.error("User name or password is incorrect or missing.");
                }
            }
        } catch (error) {
            toast.error("An error occurred while log in." + error);
        } finally {
            dispatch(setLoading(false));
        }
    }

    const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: submit,
        validationSchema: loginPageSchema
    });

    const clearForm = () => {
        resetForm();
    }

    return (
        <div className='login'>
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <div className="form-div">
                        <h3 className='login-title'>Login Page</h3>
                        <TextField
                            id="username"
                            value={values.username}
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
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            sx={{ width: "350px", marginBottom: "25px" }}
                            placeholder='password'
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
                            helperText={errors.password && <span style={{ color: "brown" }}>{errors.password}</span>}
                        />
                        <div className="btns">
                            <Button onClick={() => navigate("/change-login")} size='small' variant="contained" sx={{ textTransform: "none", marginRight: "10px", backgroundColor: "#23d5ab" }} >Change password</Button>

                            <Button type='submit' size='small' variant="contained" sx={{ textTransform: "none", marginRight: "10px", backgroundColor: "#ee7752" }} >Submit</Button>

                            <Button onClick={clearForm} size='small' variant="contained" sx={{ textTransform: "none", backgroundColor: "#23a6d5" }}>Reset</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
