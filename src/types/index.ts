//Define Iteface For Initial Form Values//
export interface InitialFormValues {
    firstName: string;
    lastName: string;
    email:  string;
    password: string;
    profession:string;
    hobby:string;
    city:string;
    bio:string;
}

//Signup Form Values
export interface SingupFormValues {
    firstName: string;
    lastName: string, 
    email:  string, 
    password: string,
}

//Signup Props
export type SignupFormProps={
    formData:SingupFormValues,
    setFormData:Function,
    nextStep:Function
}

//Personal Details Form Values
export interface PersonalDFormValues{
    profession: string;
    hobby: string, 
    city:  string, 
    bio: string,
  }

//Personal Details Props 
export type PersonalDFormProps={
    formData:PersonalDFormValues
    setFormData:Function,
    nextStep:Function,
    prevStep:Function
}

//Confirm Page Props
export type ConfirmPageProps={
    formData:InitialFormValues,
    nextStep:Function,
    prevStep:Function,
    handleReset:Function,
}

//Success Page Props
export type SuccessPageProps = {
    handleReset:Function
}