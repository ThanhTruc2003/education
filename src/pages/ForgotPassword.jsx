import { Link } from 'react-router-dom';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { useEffect } from 'react';
import '../css/ForgotPassword.css';

const ForgotPassword = () => {
    useEffect(() => {
        document.title = "Quên mật khẩu";
    }, []);

    document.body.classList.add('forgotpassword-body');

    const handleForgotPassword = (event) => {
        event.preventDefault();
        // Handle forgot password logic here
        console.log('Forgot password form submitted');
    };

    return (
        <Container className='form-container' style={{ paddingLeft: '0px', paddingRight: '0px' }}>
             <Box className='col-1'>
                <img src="/public/img/start-illustration.png" alt="Illustration" style={{ width: '90%'}} className='img'/>
            </Box>

            <Box className='col-2'>
                <Box className='forgotpassword-form'>
                <Typography component="h1" variant="h3"
                    sx={{
                        fontFamily: 'system-ui',
                        fontWeight: 'bold',
                        fontSize: '35px',
                        textAlign: 'center',
                    }}>QUÊN MẬT KHẨU</Typography>
                <Box component="form" noValidate sx={{ mt: 1, marginLeft: 9, marginRight: 9}} onSubmit={handleForgotPassword}>
                    <Box textAlign="center" mt={1} mb={5}>
                        <span style={{ fontFamily: 'sans-serif' }}>Nhập địa chỉ email để lấy lại mật khẩu</span>
                    </Box>
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
                    />
                    <TextField 
                        className="red-asterisk"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Địa chỉ email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
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
                    > Lấy lại mật khẩu</Button>
                    <Box textAlign="center" mt={1}>
                        <span style={{ fontFamily: 'sans-serif' }}><Link to='/tao-tai-khoan' style={{ textDecoration: 'none', fontFamily: 'sans-serif' }} onClick={() => document.title = "Đăng nhập"}>Quay lại đăng nhập</Link></span>
                    </Box>
                </Box>
            </Box>
            </Box>
        </Container>
    );
};

export default ForgotPassword;