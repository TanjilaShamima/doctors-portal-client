import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Label } from 'reactstrap';
import { addLoggedinUser } from '../../Redux/Actions/PortalActions';
import { defaulftLoggingFramework, signInWithEmailAndPassword } from './LoginManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faUser  } from '@fortawesome/free-solid-svg-icons'

const LoginForm = ({user, addLoggedinUser}) => {
    defaulftLoggingFramework();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = event => {
        let isFormValid = true;
        if(event.target.name === 'email'){
          isFormValid = /\S+\@\S+\.\S+/.test(event.target.value);
        }
        else if(event.target.name === 'password'){
          isFormValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(event.target.value)
        }
        if(isFormValid){
          const newUserInfo = {...userInfo};
          newUserInfo[event.target.name] = event.target.value;
          setUserInfo(newUserInfo);
        }
    }

    const handleSubmit = event =>{
        event.preventDefault();
        if(userInfo.email && userInfo.password){
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
            .then(res => {
                setUserInfo(res);
                addLoggedinUser(res);
                history.replace(from);
            })
        }
    }
    return (
        <Container style={{height: '100vh'}} className="d-flex align-items-center justify-content-between">
            <Row>
                <Col md={6}>
                    <form style={{width: '400px', border : '1px solid #04020200', boxShadow : 'gray'}}  onSubmit={handleSubmit} className="rounded shadow p-2">
                        <h1 className="text-center">Login</h1>
                        <TextField name="email" type="email" onBlur={handleBlur} margin="normal" label="Enter email" fullWidth/>
                        <TextField name="password" onBlur={handleBlur} label="Enter password" margin="normal" type="Password" fullWidth/>
                        <Label className="text-danger">Forget Password?</Label>
                        <Button type="submit" className="btn-block mt-5" variant="info">Sign In</Button>
                    </form>
                </Col>
                <Col md={3}>
                    <div>
                        <Image width={200} src="/images/login.png" alt="login" fluid/>
                    </div>
                </Col>
                <Col md={3} style={{marginTop : '100px'}}>
                    <Button onClick={() => history.push('/doctorregistration')} variant="primary"> <FontAwesomeIcon  icon={faUser}/> Register As a Doctor</Button>
                    
                    <Button onClick={() => history.push('/patientregistration')} style={{marginTop : '20px'}} variant="success"> <FontAwesomeIcon  icon={faUser}/> Register As a Patient</Button>
                </Col>
            </Row>
        </Container>
        
    );
};

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);