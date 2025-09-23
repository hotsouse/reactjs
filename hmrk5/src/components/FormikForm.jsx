import {Formik,Field,ErrorMessage} from "formik";


export const FormikForm = () => {
    return (
        <div>
            <Formik
            initialValues={{
                fullName:"",
                email:"",
                password:"",
                course:"",
                gender:"",
                dob:"",
                city:"",
                country:"",
                phone:"",
                education:"",
                address:"",
                state:"",
                zip:""
            }}
            validate={(values)=>{
                const errors={};
                if (!values.fullName) {errors.fullName="Full name is required";}
                if (!values.email) {errors.email="Email is required";}
                else if (
                    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
                )
                {errors.email="Invalid email address";}
                if (!values.password){
                    errors.password='Password is required';
                } else if (values.password.length<6) { errors.password="Password must be at least 6 characters.";}
                if (!values.course) {errors.course="Please select a course";}
                if (!values.gender) {errors.gender="Please select a gender";}
                if (!values.dob) {errors.dob="Date of birth is required";}
                if (!values.city){errors.city="City is required";}
                if (!values.country){errors.country="Country is required";}
                if (values.zip&& !/^\d+$/.test(values.zip)) {
                    errors.zip= "Zip Code must contain only numbers";
                }
                return errors;
            }}
            onSubmit={(values)=>{alert(JSON.stringify(values,null,2));
            }}
            >
                {({handleSubmit})=> (
                    <form
                    onSubmit={handleSubmit}
                    style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"10px",
                        width:"350px",
                        margin:"0 auto",
                    }}
                    >
                        <label>Full Name</label>
                        <Field name="fullName"/>
                        <ErrorMessage name="fullName" component="div" style={{color:"red"}}/>

                        <label>Email</label>
                        <Field name="email" type="email"/>
                        <ErrorMessage name="email" component="div" style={{color:"red"}}/>

                        <label>Password</label>
                        <Field name="password" type="password"/>
                        <ErrorMessage name="password" component="div" style={{color:"red"}}/>

                        <label>Course</label>
                        <div>
                            <label>
                                <Field type="radio" name="course" value="Course A" /> Course A
                            </label>
                            <label>
                                <Field type="radio" name="course" value="Course B"/> Course B
                            </label>
                            <label>
                                <Field type="radio" name="course" value="Course C"/> Course C 
                            </label>
                            </div>
                            <ErrorMessage name="course" component="div" style={{color:"red"}}/>
                            <label>Gender</label>
                            <div>
                                <label>
                                    <Field type="radio" name="gender" value="Female"/> Female
                                </label>
                                <label>
                                    <Field type="radio" name="gender" value="Male"/> Male
                                </label>
                                </div>
                                <ErrorMessage name="gender" component="div" style={{color:'red'}}/>
                                <label>Date of birth</label>
                                <Field name="dob" type="date"/>
                                <ErrorMessage name="dob" component="div" style={{color:"red"}}/>

                                <label>City</label>
                                <Field name="city"/>
                                <ErrorMessage name="city" component="div" style={{color:"red"}}/>

                                <label>Country</label>
                                <Field as="select" name="country">
                                <option value="">Select country </option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                </Field>
                                <ErrorMessage name="country" component="div" style={{color:"red"}}/>
                                <label>Phone(optional)</label>
                                <Field  name="phone"/>
                                <label>Education(optional)</label>
                                <Field as="select" name="education">
                                    <option value="">Select education</option>
                                    <option value="School">School</option>
                                    <option value="College">College</option>
                                    <option value="University">University</option>
                                </Field>
                                <label>Address(optional)</label>
                                <Field as ="textarea" name="address"/>
                                <label>State(optional)</label>
                                <Field name="state"/>
                                <label>Zip Code(optional)</label>
                                <Field name="zip"/>
                                <ErrorMessage name="zip" component="div" style={{color:"red"}}/>
                                <button
                                type="submit"
                                style={{
                                    backgroundColor:"green",
                                    color:"white",
                                    padding:"10px",
                                    border:"none",
                                    borderRadius:"5px",
                                }}
                                >
                                    Submit
                                </button>
                                </form>
                )
                }
                </Formik>
        </div>
    );
};