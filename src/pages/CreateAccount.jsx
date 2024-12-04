import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField, Typography, Container, Box } from '@mui/material';
import '../css/CreateAccount.css';

const CreateAccount = () => {
    const [isRegister] = useState(false);

    useEffect(() => {
        document.title = "Đăng nhập";

        document.body.classList.add('create-acount-body');

        const loginButton = document.querySelector('#login-button');
        const registerButton = document.querySelector('#register-button');
        const loginForm = document.querySelector('#login-form');
        const registerForm = document.querySelector('#register-form');

        const handleLoginClick = () => {
            document.title = "Đăng nhập";
            loginButton.style.background = 'rgba(255, 90, 66, 1)';
            loginButton.style.color = '#ffffff';
            registerButton.style.background = 'rgba(255, 174, 0, 0.2)';
            registerButton.style.color = '#ff6000';
            loginForm.style.left = '0%';
            registerForm.style.left= '-150%';
            loginForm.style.opacity = '1';
            registerForm.style.opacity = '0';
        };

        const handleRegisterClick = () => {
            document.title = "Đăng ký";
            registerButton.style.background = 'rgba(255, 90, 66, 1)';
            registerButton.style.color = '#ffffff';
            loginButton.style.background = 'rgba(255, 174, 0, 0.2)';
            loginButton.style.color = '#ff6000';
            loginForm.style.left = '150%';
            registerForm.style.left= '0%';
            loginForm.style.opacity = '0';
            registerForm.style.opacity = '1';
        };

        loginButton.addEventListener('click', handleLoginClick);
        registerButton.addEventListener('click', handleRegisterClick);

        return () => {
            loginButton.removeEventListener('click', handleLoginClick);
            registerButton.removeEventListener('click', handleRegisterClick);
        };
    }, [isRegister]);

    return (
        <Container className='form-container' style={{ paddingLeft: '0px', paddingRight: '0px' }}> 
            <Box className='col-1'>
                <img src="/public/img/start-illustration.png" alt="Illustration" style={{ width: '90%'}} className='img'/>
            </Box>

            <Box className='col-2'>
                <Box className='btn-box'>
                <Button id='login-button'
                        sx={{
                        fontWeight: '550',
                        padding: '5px 20px',
                        border: 'none',
                        borderRadius: '30px',
                        background: 'rgba(255, 90, 66, 1)',
                        color: '#ffffff',
                        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                        transition: '0.5s',
                        fontFamily: 'Arial',
                        marginRight: '15px',
                        marginLeft: '15px',
                        ":hover": {opacity: '0.7'}
                    }}>Đăng nhập</Button>

                <Button id='register-button'
                        sx={{
                            fontWeight: '550',
                            padding: '5px 20px',
                            border: 'none',
                            borderRadius: '30px',
                            background: 'rgba(255, 174, 0, 0.2)',
                            color: '#ff6000',
                            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                            transition: '0.5s',
                            fontFamily: 'Arial',
                            marginRight: '15px',
                            marginLeft: '15px',
                    }}>Đăng ký</Button>
                </Box>
                    <Box id="register-form" className='register-form'>
                        <Typography component="h1" variant="h3"  
                            sx={{ 
                                fontFamily: 'system-ui',  
                                fontWeight: 'bold',               
                                fontSize: '35px',
                                textAlign: 'center',  
                                marginBottom: '10px',   
                                marginTop: '10px',          
                            }}>ĐĂNG KÝ</Typography>
                        <Box component="form" noValidate sx={{ mt: 1, marginLeft: 10, marginRight: 10}}>
                        <TextField className='input' sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="username"
                            label="Tên đăng nhập"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField className='input' sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="dateOfBirth"
                            label="Ngày sinh"
                            name="dateOfBirth"
                            autoComplete="dateOfBirth"
                            autoFocus
                        />
                        <TextField className='input' sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="sex"
                            label="Giới tính"
                            name="sex"
                            autoComplete="sex"
                            autoFocus
                        />
                        <TextField className='input' sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="address"
                            label="Địa chỉ"
                            name="address"
                            autoComplete="address"
                            autoFocus
                        />
                        <TextField className='input' sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="phoneNumber"
                            label="Số điện thoại"
                            name="phoneNumber"
                            autoComplete="phoneNumber"
                            autoFocus
                        />
                        <TextField className='input' sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField className='input' sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Xác nhận mật khẩu"
                            type="password"
                            id="confirmPassword"
                            autoComplete="confirm-password"
                        />
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 2, mb: 2, 
                                    background: 'rgba(255, 121, 102, 1)',
                                    color: '#ffffff',
                                    borderRadius: '10px',
                                    border: 'none',
                                    fontweight: 'bold',
                                }}
                            >Đăng ký</Button>
                        </Box>
                    </Box>

                    <Box id="login-form" 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            marginTop: '50px',
                            position: 'relative',
                        }}>
                        <Typography component="h1" variant="h3"  
                            sx={{ 
                                fontFamily: 'system-ui',  
                                fontWeight: 'bold',               
                                fontSize: '35px',
                                textAlign: 'center',  
                                marginBottom: '25px',              
                            }}>ĐĂNG NHẬP</Typography>
                        <Box component="form" noValidate sx={{ mt: 1, marginLeft: 9, marginRight: 9 }}>
                            <TextField className='input'
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Tên đăng nhập"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField className='input'
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mật khẩu"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                mt: 2,  
                            }}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Tự động đăng nhập"
                                    sx={{ flexGrow: 1 }}
                                />
                                <Link to="/quen-mat-khau" style={{ textDecoration: 'none', fontFamily: 'sans-serif'}}>Quên mật khẩu?</Link>
                            </Box>                   
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, 
                                    background: 'rgba(255, 121, 102, 1)',
                                    color: '#ffffff',
                                    borderRadius: '10px',
                                    border: 'none',
                                    fontweight: 'bold',
                                }}
                            >Đăng nhập</Button>
                        </Box>
                    </Box>
                </Box>
        </Container>
    );
};

export default CreateAccount;