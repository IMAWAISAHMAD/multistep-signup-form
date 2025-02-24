import React,{FC} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import {SignupFormProps} from '../types';


let SignupSchema = yup.object().shape({
    firstName: yup.string().required('This field is required.'), 
    lastName: yup.string().required('This field is required.'), 
    email: yup.string().email().required('This field is required.'), 
    password: yup.string()
        .min(6, 'Password is too short.')
        .max(20, 'Password is too long.')
        .required('This field is required.')
});

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const Signup:FC<SignupFormProps>= ({formData,setFormData,nextStep}) => {

    const classes = useStyles();

return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        <Formik
        initialValues={formData}
        validationSchema={SignupSchema}
        onSubmit={values => {
        console.log(values);
        setFormData(values);
        nextStep();
        }}
        > 
        {({errors, handleChange, touched,values}) => (
        <Form className={classes.form}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
            error={errors.firstName && touched.firstName?true:false}
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            id="firstName"
            label="First Name"
            autoFocus
            helperText={errors.firstName && touched.firstName ? errors.firstName : null}
            value={values.firstName}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            error={errors.lastName && touched.lastName?true:false}
            variant="outlined"
            fullWidth
            onChange={handleChange}
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            helperText={errors.lastName && touched.lastName ? errors.lastName : null}
            value={values.lastName}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            error={errors.email && touched.email?true:false}
            variant="outlined"
            fullWidth
            onChange={handleChange}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={errors.email && touched.email ? errors.email : null}
            value={values.email}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            error={errors.password && touched.password?true:false}
            variant="outlined"
            fullWidth
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={errors.password && touched.password ? errors.password : null}
            value={values.password}
            />
            </Grid>
            <Grid item xs={12}>
            <Button
            type='submit'
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Continue
            </Button>
            </Grid>
            </Grid>
        </Form>
        )}
        </Formik>                       
    </div>
</Container>
);
};

export default Signup;
