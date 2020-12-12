import React,{FC} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {PersonalDFormProps} from '../types';

let SignupSchema = yup.object().shape({
    profession: yup.string().required('This field is required.'), 
    hobby: yup.string().required('This field is required.'), 
    city: yup.string().required('This field is required.'), 
    bio: yup.string()
        .min(15, 'Bio is too short.')
        .max(100, 'Bio is too long.')
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


const PersonalDetails:FC<PersonalDFormProps>= ({formData,setFormData,nextStep,prevStep}) => {

    const classes = useStyles();

return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Personal Details
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
            <Grid item xs={12}>
            <TextField
            error={errors.profession && touched.profession}
            autoComplete="profession"
            name="profession"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            id="profession"
            label="Profession"
            autoFocus
            helperText={errors.profession && touched.profession ? errors.profession : null}
            value={values.profession}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            error={errors.hobby && touched.hobby}
            variant="outlined"
            fullWidth
            onChange={handleChange}
            id="hobby"
            label="Hobby"
            name="hobby"
            autoComplete="hobby"
            helperText={errors.hobby && touched.hobby ? errors.hobby : null}
            value={values.hobby}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            error={errors.city && touched.city}
            variant="outlined"
            fullWidth
            onChange={handleChange}
            id="city"
            label="City Name"
            name="city"
            autoComplete="city"
            helperText={errors.city && touched.city ? errors.city : null}
            value={values.city}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            error={errors.bio && touched.bio}
            variant="outlined"
            fullWidth
            onChange={handleChange}
            name="bio"
            label="Bio"
            type="bio"
            id="bio"
            autoComplete="bio"
            helperText={errors.bio && touched.bio ? errors.bio : null}
            value={values.bio}
            />
            </Grid>
            <Grid item xs={6}>
            <Button
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={()=>prevStep()}
            >
             Back
            </Button>
            </Grid>
            <Grid item xs={6}>
            <Button
            type="submit"
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

export default PersonalDetails;
;
