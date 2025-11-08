import {
    Box,
    Button,
    makeStyles,
    TextField,
    Typography,
    IconButton,
    InputAdornment,
    Paper,
    FormHelperText,
    Divider,
    DialogContent,
    Dialog,
} from "@material-ui/core";
import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Form, Formik } from "formik";
import * as yep from "yup";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import { toast } from "react-hot-toast";
import ButtonCircularProgress from 'src/component/ButtonCircularProgress';

const useStyles = makeStyles((theme) => ({
    mainBoxContainer: {
        "& .paragraph": {
            width: "100%",
            maxWidth: "808px",
            color: "rgba(99, 104, 128, 1)",
            fontSize: "14px"
        },
        "& .headingBox": {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
        }
    },
    loginBox: {
        maxWidth: " 95%",
        width: "487px",
        "& .mainBox": {
            padding: "50px 40px 50px",

            [theme.breakpoints.down("xs")]: {
                padding: "20px 10px 50px",
            },
            "& h2": {
                textAlign: "center",
                paddingBottom: "50px",
            },
        },
        // "& .buttonBox": {
        //     padding: "15px 0px",
        // },

        "& .iconsclass": {
            color: "#585757",
            fontSize: "20px",
        },
    },
    dialogPaper: {
        width: '100%',
        maxWidth: '520px',
        "& .passDialogBox": {
            padding: "30px 50px 50px"
        },
        "& .image1": {
            mixBlendMode: "hard-light"
        },
        "& .subTypoChangePass": {
            fontSize: "14px",
        },
        "& .btnOKsubmit": {
            width: '100%',
            maxWidth: '245px',
        },
    },
}));

const Changepassword = () => {
    const classes = useStyles();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    }
    const formInitialSchema = {
        password: '',
        newPassword: '',
        confirmPassword: '',
    };
    const formValidationSchema = Yup.object().shape({
        password: Yup.string()
            .required('password is required'),
        newPassword: Yup.string()
            .required('New password is required')
            .min(6, 'Password must be at least 6 characters long'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'New password and confirm password does not match.')
            .required('Please confirm your password'),
    });

    const handleFormSubmit = (values, actions) => {
        handleModalOpen();
    };
    const handleOkButtonClick = () => {
        handleModalClose();
    };

    const changePaswordHandler = async (values) => {
        setIsLoading(true);
        try {
            const res = await axios({
                method: "PUT",
                url: apiConfig.changePassword,
                headers: {
                    token: localStorage.getItem("token"),
                },
                data: {
                    password: values.password,
                    newPassword: values.newPassword,
                    confirmPassword: values.confirmPassword,

                },
            });

            if (res.data.responseCode === 200) {
                // toast.success(res.data.responseMessage);
                handleModalOpen();
                setIsLoading(false);
            } else if (res.data.responseCode === 401) {
                toast.error(res.data.responseMessage)
            }
            else if (res.data.responseCode === 404) {
                toast.error(res.data.responseMessage)
                setIsLoading(false);
            }
            else {
                toast.error(res.data.responseMessage);
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.responseMessage);
            } else {
                toast.error(error.message);
            }
            setIsLoading(false);
        }
    };


    return (
        <Box className={classes.mainBoxContainer}>
            <Box >
                <Box className="headingBox">
                    <Typography variant="h4" >Change The Password</Typography>
                    <Typography className="paragraph" variant="body2">Maintain the security of your account by choosing a strong, unique password to fortify your account against potential breaches. Your security is our Top priority, and we take full measures to protect your data from any threats.</Typography>
                </Box>
            </Box>
            <Divider style={{ margin: "20px 0px" }} />
            <Box className='displayCenter'>
                <Box className={classes.loginBox}>
                    <Paper className="mainBox" elevation={1}>
                        <Formik
                            initialValues={formInitialSchema}
                            initialStatus={{
                                success: false,
                                successMsg: "",
                            }}
                            validationSchema={formValidationSchema}
                            onSubmit={(values) => changePaswordHandler(values)}
                        >
                            {({
                                errors,
                                handleBlur,
                                handleChange,
                                touched,
                                values,
                            }) => (
                                <Form>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Old Password"
                                            value={values.password}
                                            type={showPassword2 ? "text" : "password"}
                                            name="password"
                                            error={Boolean(touched.password && errors.password)}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={() => setShowPassword2(!showPassword2)}
                                                            edge="end"
                                                        >
                                                            <Box>
                                                                {showPassword2 ? (
                                                                    <HiEye className="iconsclass" />
                                                                ) : (
                                                                    <HiEyeOff className="iconsclass" />
                                                                )}
                                                            </Box>
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <FormHelperText error className={classes.helperText}>
                                            {touched.password && errors.password}
                                        </FormHelperText>
                                    </Box>
                                    <Box mt={3} mb={1}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            placeholder="New Password"
                                            value={values.newPassword}
                                            type={showPassword ? "text" : "password"}
                                            name="newPassword"
                                            error={Boolean(touched.newPassword && errors.newPassword)}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            edge="end"
                                                        >
                                                            <Box>
                                                                {showPassword ? (
                                                                    <HiEye className="iconsclass" />
                                                                ) : (
                                                                    <HiEyeOff className="iconsclass" />
                                                                )}
                                                            </Box>
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <FormHelperText error className={classes.helperText}>
                                            {touched.newPassword && errors.newPassword}
                                        </FormHelperText>
                                    </Box>
                                    <Box mt={3} mb={1}>
                                        {/* <Box mt={2} mb={1}>
                                            <Typography variant="body2" color="secondary">
                                                Confirm password
                                            </Typography>
                                        </Box> */}
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Confirm password"
                                            value={values.confirmPassword}
                                            type={showPassword1 ? "text" : "password"}
                                            name="confirmPassword"
                                            error={Boolean(
                                                touched.confirmPassword && errors.confirmPassword
                                            )}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={() => setShowPassword1(!showPassword1)}
                                                            edge="end"
                                                        >
                                                            <Box>
                                                                {showPassword1 ? (
                                                                    <HiEye className="iconsclass" />
                                                                ) : (
                                                                    <HiEyeOff className="iconsclass" />
                                                                )}
                                                            </Box>
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <FormHelperText error className={classes.helperText}>
                                            {touched.confirmPassword && errors.confirmPassword}
                                        </FormHelperText>
                                    </Box>
                                    <Box mt={3}>
                                        <Box>
                                            <Button
                                                variant="containedPrimary"
                                                fullWidth
                                                type="submit"
                                            >
                                                Continue
                                                {isLoading && <ButtonCircularProgress />}
                                            </Button>
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Paper>
                </Box>
            </Box>
            <Dialog open={isModalOpen} onClose={handleModalClose} classes={{ paper: classes.dialogPaper }}>
                <Box className="passDialogBox">
                    <Box className="displayCenter">
                        <img
                            src="/images/emailVerified.png"
                            alt=""
                            className="image1"
                        />
                    </Box>
                    <Box mt={3} mb={2}>
                        <Typography variant="h4" className="typoChangePass displayCenter">
                            Password Changed!
                        </Typography>
                    </Box>
                    <Box mt={3} className="displayCenter" >
                        <Typography variant="body2" className="subTypoChangePass"> Your password has been changed successfully.</Typography>
                    </Box>
                    <Box className="displayCenter" pt={3}>
                        <Button variant="containedPrimary" className="btnOKsubmit" onClick={handleOkButtonClick}> OK </Button>
                    </Box>
                </Box>
            </Dialog>

        </Box>
    );
}

export default Changepassword



