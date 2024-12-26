import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField, Typography, Container, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff} from '@mui/icons-material';
import { RadioGroup, Radio } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';

import '../css/CreateAccount.css';

const CreateAccount = () => {
    const navigate = useNavigate(); 
    const [isRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: null,
        gender: false,
        address: '',
        phoneNumber: '',
        role: 1,
        confirmed: true
    });

    const [passwordError, setPasswordError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

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
            document.body.classList.remove('create-acount-body');
        };
    }, [isRegister]);

    useEffect(() => {
        const savedUser = localStorage.getItem('rememberedUser');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            setFormData(prevData => ({
                ...prevData,
                username: userData.username,
                password: userData.password
            }));
            setRememberMe(true);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        
        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword || !formData.dateOfBirth || !formData.address || !formData.phoneNumber) {
            toast.warning("Vui lòng điền đầy đủ thông tin");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setPasswordError("Mật khẩu không đúng");
            return;
        } else {
            setPasswordError('');
        }

        const existingUsersResponse = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/users`);
        if (!existingUsersResponse.ok) {
            throw new Error('Không thể kiểm tra tài khoản');
        }
        const existingUsers = await existingUsersResponse.json();

        const userExists = existingUsers.some(user => user.username === formData.username);
        if (userExists) {
            toast.error("Tên đăng nhập đã tồn tại");
            return;
        }

        const formattedData = {
            ...formData,
            dateOfBirth: dayjs(formData.dateOfBirth).format('YYYY-MM-DD')
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formattedData)
            });
            const result = await response.json();
            if (response.ok) {
                localStorage.setItem('userId', result.id);
                localStorage.setItem('username', formData.username);
                navigate("/home");
                setTimeout(() => {
                    toast.success("Đăng ký thành công");
                }, 100);
            } else {
                toast.error(result.message || "Đăng ký thất bại");
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("Đăng ký thất bại");
        }
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        if (validate()) {
            const loginData = {
                identifier: formData.username, // 'identifier' có thể là username hoặc email
                password: formData.password,
            };
    
            try {
                const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/auth/local`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loginData),
                });
    
                if (!res.ok) {
                    // Kiểm tra mã lỗi và hiển thị thông báo phù hợp
                    const errorData = await res.json();
                    if (errorData?.error?.message === 'Invalid identifier or password') {
                        toast.error('Tên đăng nhập hoặc mật khẩu không đúng');
                    } else {
                        toast.error('Đăng nhập thất bại. Vui lòng thử lại');
                    }
                    return;
                }
    
                const resp = await res.json();
    
                // Lưu thông tin người dùng và token
                const { jwt, user } = resp;
    
                if (rememberMe) {
                    localStorage.setItem(
                        'rememberedUser',
                        JSON.stringify({
                            id: user.id,
                            username: user.username,
                            password: formData.password,
                        })
                    );
                } else {
                    localStorage.removeItem('rememberedUser');
                }
    
                localStorage.setItem('username', user.username);
                localStorage.setItem('userId', user.id);
                localStorage.setItem('token', jwt); // Lưu token để sử dụng cho các API khác
    
                navigate('/home');
                setTimeout(() => {
                    toast.success('Đăng nhập thành công');
                }, 100);
            } catch (err) {
                console.error(err);
                toast.error('Đăng nhập thất bại. Vui lòng thử lại');
            }
        }
    };

    const validate = () => {
        let result = true;
        if (!formData.username || !formData.password) {
            toast.warning("Vui lòng điền đầy đủ thông tin");
            result = false;
        }
        return result;
    }

    const handleGoHome = () => {
        navigate('/home');
    };

    return (
        <Container className='form-container' style={{ paddingLeft: '0px', paddingRight: '0px' }}> 
            <ToastContainer />
            
            <Box className='col-1'>
                <img src="/img/start-illustration.png" alt="Illustration" style={{ width: '90%'}} className='img'/>
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
                        <Box component="form" noValidate onSubmit={handleSubmitRegister} sx={{ mt: 1, marginLeft: 10, marginRight: 10}}>
                        <TextField 
                            className="red-asterisk"
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="username"
                            label="Tên đăng nhập"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <TextField 
                            className="red-asterisk"
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Ngày sinh"
                                value={formData.dateOfBirth}
                                onChange={(newValue) => setFormData({ ...formData, dateOfBirth: newValue })}
                                sx={{ width: '100%', marginBottom: '10px' }}
                                format="DD/MM/YYYY"
                            />
                        </LocalizationProvider>

                        <RadioGroup
                            row
                            aria-labelledby="gender-radio-buttons-group-label"
                            name="gender"
                            value={formData.gender ? 'true' : 'false'}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value === 'true' })}
                            sx={{ marginBottom: '10px' }}
                        >
                            <FormControlLabel value="false" control={<Radio />} label="Nam" />
                            <FormControlLabel value="true" control={<Radio />} label="Nữ" />
                        </RadioGroup>

                        <TextField
                            className="red-asterisk"
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="address"
                            label="Địa chỉ"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />

                        <TextField
                            className="red-asterisk"
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            id="phoneNumber"
                            label="Số điện thoại"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />

                        <TextField
                            className="red-asterisk"
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            name="password"
                            label="Mật khẩu"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
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
                            className="red-asterisk"
                            sx={{ marginBottom: '10px'}}
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Nhập lại mật khẩu"
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
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
                        {passwordError && <Typography color="error">{passwordError}</Typography>}

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
                        <Box component="form" noValidate onSubmit={handleSubmitLogin} sx={{ mt: 1, marginLeft: 9, marginRight: 9 }}>
                            <TextField 
                                className="red-asterisk"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Tên đăng nhập"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <TextField 
                                className="red-asterisk"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mật khẩu"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={handleChange}
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
                                <FormControlLabel style={{marginLeft: '-9px', marginTop: '-10px'}}
                                    control={
                                        <Checkbox
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            color="primary" 
                                        />
                                    }
                                    label="Nhớ mật khẩu"
                                    sx={{ flexGrow: 1 }}
                                />
            
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

                            <Button style={{marginLeft: "7rem", color: '#393d72', fontWeight: 'bold'}}
                                onClick={handleGoHome}>
                                <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
                                Quay về trang chủ
                            </Button>

                        </Box>
                    </Box>
                </Box>
        </Container>
    );
};

export default CreateAccount;