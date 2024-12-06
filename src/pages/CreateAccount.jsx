import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField, Typography, Container, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { RadioGroup, Radio } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import '../css/CreateAccount.css';

const CreateAccount = () => {
    const [isRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    /*const [dateOfBirth, setDateOfBirth] = useState(null);*/
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: null,
        gender: false,
        address: '',
        phoneNumber: ''
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleGenderChange = (e) => {
        setFormData(prev => ({
            ...prev,
            gender: e.target.value === 'true'
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Mật khẩu xác nhận không khớp!');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Email không hợp lệ!');
            return;
        }

        try {
            const response = await fetch('http://localhost:1337/api/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    dateOfBirth: formData.dateOfBirth ? formData.dateOfBirth.format('YYYY-MM-DD') : null,
                    gender: formData.gender,
                    address: formData.address,
                    phoneNumber: formData.phoneNumber
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Đăng ký thành công!');
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    dateOfBirth: null,
                    gender: false,
                    address: '',
                    phoneNumber: ''
                });
            } else {
                alert('Đăng ký thất bại: ' + (data.error?.message || 'Đã có lỗi xảy ra'));
            }
        } catch (error) {
            console.error('Lỗi:', error);
            alert('Đã có lỗi xảy ra khi đăng ký');
        }
    };

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
                                marginTop: '10px',          
                            }}>ĐĂNG KÝ</Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, marginLeft: 10, marginRight: 10}}>
                        <TextField
                            className='input'
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="username"
                            label="Tên đăng nhập"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                        <TextField
                            className='input'
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Ngày sinh"
                                value={formData.dateOfBirth}
                                onChange={(newValue) => setFormData(prev => ({
                                    ...prev,
                                    dateOfBirth: newValue
                                }))}
                                sx={{ width: '100%', marginBottom: '10px' }}
                                format="DD/MM/YYYY"
                            />
                        </LocalizationProvider>

                        <RadioGroup
                            row
                            aria-labelledby="gender-radio-buttons-group-label"
                            name="gender"
                            value={formData.gender ? 'true' : 'false'}
                            onChange={handleGenderChange}
                            sx={{ marginBottom: '10px' }}
                        >
                            <FormControlLabel value="false" control={<Radio />} label="Nam" />
                            <FormControlLabel value="true" control={<Radio />} label="Nữ" />
                        </RadioGroup>

                        <TextField
                            className='input'
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="address"
                            label="Địa chỉ"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />

                        <TextField
                            className='input'
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="phoneNumber"
                            label="Số điện thoại"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />

                        <TextField
                            className='input'
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            name="password"
                            label="Mật khẩu"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} 
                        />
                        <TextField
                            className='input'
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Xác nhận mật khẩu"
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} 
                        />
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ margin: "0px", 
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
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }} 
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