import React, { useState } from 'react';
import { Box, TextField, Typography, makeStyles, Button, IconButton, InputAdornment, Divider } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { Dialog } from '@material-ui/core';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: "64px",
        padding: "15px 137px 76px 137px",
        "@media (max-width: 600px)":{
            paddingTop: '20px',
            padding: "0px 20px 39px 20px",
          },
        "& .logBox": {
            width: "100%",
            maxWidth: "419px",
            padding: "30px 80px 39px 80px",
            boxShadow: "2px 2px 45px rgba(0, 0, 0, 0.05)",
            background: "#fff",
            "@media (max-width: 600px)": {
                padding: "0px 20px 39px 20px",
              },
        },
        "& .subBox": {
            gap: "7px",
            fontWeight: 700,
            "& h5": {
                fontWeight: 700,
                color: "rgba(0, 0, 0, 0.87)",
            },
            "& p": {
                fontSize: "14px",
                textAlign: "center",
            },
        },
        "& .spanTag": {
            color: "#0856CC",
            fontWeight: 500,
            cursor: "pointer",
        },
        "& .termsBox": {
            color: "#3760F1",
            gap: "20px"
        },
        "& .paraTypo": {
            color: "#636880",
            textAlign: "center",
            fontWeight: 400,
        },
        "& .eyeIcon": {
            cursor: 'pointer',
        },
        "& .btnContinue": {
            height: "50px",
        },
        "& .forgetTypo": {
            color: "#0856CC",
            cursor: "pointer",
        },
        "& .customDivider": {
            height: '20px',
            background: "#B2B2B2",
        },
        "& .customDivider": {
            height: '20px',
            background: "#B2B2B2",
        },
        "& .editText": {
            color: "#0856CC",
            fontSize: "16px",
            paddingLeft: "20px",
            fontWeight: 400,
        },
        "& .logBox1": {
            width: "100%",
            maxWidth: "402px",
        },
        "& .paraTypo1": {
            color: "#636880",
            textAlign: "center",
            fontWeight: 400,
            width: "100%",
            maxWidth: "349px"
        },
        "& .btnContinue1": {
            height: "50px",
            width: "100%",
            maxWidth: "245px"
        },
        "& .image1": {
            mixBlendMode: "hard-light"
        }
    },

}))


const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .max(256, 'Email must be at most 256 characters')
        .required("Email is required.")
        .matches(/^[a-zA-Z0-9._%+$-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Please enter a valid email address."),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, "Invalid Password")
        .required('Password is required'),
});

const Password = () => {
    const classes = useStyles();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleSignUp = () => {
        history.push('/login');
    };

    const handleOpen = () => {
        setDialogOpen(true);
    };

    const handleClose = () => {
        setDialogOpen(false);
    };

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        formik.handleChange(event);
        setIsPasswordValid(password.length >= 8);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        history.push('/forgot');
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box className={classes.mainBox}>
            <Box className='logBox'>
                <Box className='subBox displayColumnCenter'>
                    <Typography variant='h5'>CREATE YOUR PASSWORD</Typography>
                    <Typography className='paraTypo' variant='body2'>Get ready to take control of your skills and career growth with Gyan Batua, your Skills' Matchmaking Wallet. It's time to build your unique Gyan Batua and connect to a world of opportunities.
                    </Typography>
                </Box>
                <form onSubmit={formik.handleSubmit}>
                    <Box mt={2.25}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="de-umair@mobiloitte.com"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button className='editText' >
                                            Edit
                                        </Button>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <Typography color="error">{formik.errors.email}</Typography>
                        ) : null}

                    </Box>

                    <Box mt={2.3}>
                        <TextField
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            variant="outlined"
                            placeholder="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={handlePasswordChange}
                            onBlur={formik.handleBlur}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            className='eyeIcon'
                                            onClick={handleClickShowPassword}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            className={`passwordInput ${isPasswordValid ? 'valid' : 'invalid'}`}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <Typography color="error">{formik.errors.password}</Typography>
                        ) : null}
                    </Box>
                    <Box mt={2}>
                        <Typography className='forgetTypo' variant='body2' onClick={handleLogin} >Forgot Password ?</Typography>
                    </Box>
                    <Box mt={2.5}>
                        <Button className='btnContinue' variant='containedPrimary' fullWidth type="submit" onClick={() => {
                            handleOpen();
                        }}> Continue </Button>
                    </Box>
                    <Dialog open={dialogOpen} onClose={handleClose} className={classes.dialog}>
                        <Box className={classes.mainBox}>
                            <Box className='logBox1'>
                                <Box className='displayColumnCenter'>
                                    <img src="/images/emailVerified.png" alt="" className='image1' />
                                </Box>
                                <Box mt={2.95} className='subBox displayColumnCenter'>
                                    <Typography variant='h5'>Password Changed!</Typography>
                                    <Typography className='paraTypo1' variant='body2'>Your password has been changed successfully.
                                    </Typography>
                                </Box>
                                <Box mt={4} className='displayColumnCenter' >
                                    <Button className='btnContinue1' variant='containedPrimary' fullWidth type="submit" onClick={handleLogin} > Back To Login </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Dialog>
                </form>
                <Box mt={4} className='displayColumnCenter'>
                    <Typography variant='body2'>Don't have an account? <span className='spanTag' onClick={handleSignUp}>Log in</span></Typography>
                </Box>
                <Box mt={6}>
                    <Box className='termsBox displayCenter'>
                        <Typography variant='body2'>Terms of Use</Typography>
                        <Divider orientation="vertical" className='customDivider' />
                        <Typography variant='body2'>Privacy Policy</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}
export default Password


