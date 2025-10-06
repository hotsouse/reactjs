import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    fullName:Yup.string().required("Full name is required"),
    email:Yup.string() .email("Invalid email address").required("Email is required"),
    password:Yup.string().min(6,"Password must be at least 6 characters").required("Password is required"),
    course:Yup.string().required("Please select a course"),
    gender:Yup.string().required("Please select a gender"),
    dob:Yup.string().required("Date of birth is required"),
    city:Yup.string().required("City is required"),
    country:Yup.string().required("Country is required"),
    phone:Yup.string(),
    education:Yup.string(),
    address:Yup.string(),
    state:Yup.string(),
    zip:Yup.string().matches(/^[0-9]*$/,"Zip Code must be numbers only"),
});

export default function CourseApplicationForm() {
    const formik = useFormik({
        initialValues:{
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
    }, 
validationSchema:validationSchema,onSubmit:(values)=>{alert(JSON.stringify(values,null,2));

},
});

return (
    <div style={styles.container}>
        <h1 style={styles.title}>Course Application</h1>
        <form onSubmit={formik.handleSubmit} style={styles.form}>
        {/* Full Name */}
        <div style={styles.field}>
            <label style={styles.label}>Full Name*</label>
            <input 
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            style={styles.input}
            />
            {formik.touched.fullName && formik.errors.fullName&& (
                <div style={styles.error}>{formik.errors.fullName}</div>
            )}
            </div>

            {/*email*/}
            <div style={styles.field}>
                <label style={styles.label}>Email*</label>
                <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                style={styles.input}
                />
                {formik.touched.email&&formik.errors.email&&(
                    <div style={styles.error}>{formik.errors.email}</div>
                )}
                </div>

                {/*Password*/}
                <div style={styles.field}>
                    <label style={styles.label}>Password*</label>
                    <input 
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    style={styles.input}
                    />
                    {formik.touched.password&&formik.errors.password&&(
                        <div style={styles.error}>{formik.errors.password}</div>
                    )}
                    </div>

                    {/*Course*/}
                    <div style={styles.radioGroup}>
                        <label style={styles.label}>Course*</label>
                        <div>
                            {["Course A", "Course B", "Course C"].map((c)=>(
                                <label key={c} style={styles.radioLabel}>
                                    <input
                                    type="radio" 
                                    name="course"
                                    value={c} 
                                    
                                    onChange={formik.handleChange}
                                    checked={formik.values.course===c}
                                    />
                                    {c}
                                    </label>
                            ))}
                        </div>
                        {formik.touched.course&&formik.errors.course&& (
                            <div style={styles.error}>{formik.errors.course}</div>
                        )}
                        </div>

                        {/*Gender*/}

                        <div style={styles.field}>
                            <label style={styles.label}>Gender*</label>
                            <div>
                                {["Female","Male",].map((g)=>(
                                    <label key={g} style={styles.radioLabel}>
                                    <input
                                    type="radio"
                                    name="gender"
                                    value={g}
                                    onChange={formik.handleChange}
                                    checked={formik.values.gender===g}
                                    />
                                    {g}
                                    </label>
                                ))}
                            </div>
                            {formik.touched.gender&& formik.errors.gender&&(
                                <div style={styles.error}>{formik.errors.gender}</div>
                            )}</div>
                            

                            {/*DOB*/}
                            <div style={styles.field}>
                                <label style={styles.label}>Date of Birth*</label>
                                <input
                                name="dob"
                                type="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dob}
                                style={styles.input}
                                />
                                {formik.touched.dob&&formik.errors.dob&&(
                                    <div style={styles.error}>{formik.errors.dob}</div>
                                )}
                                </div>
                                {/*City*/}
                                <div style={styles.field}>
                                    <label style={styles.label}>City*</label>
                                    <input 
                                    name="city"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.city}
                                    style={styles.input}
                                    />
                                    {formik.touched.city&&formik.errors.city&&(
                                        <div style={styles.error}>{formik.errors.city}</div>
                                    )}
                                    </div>

                                    {/*Country*/}

                                    <div style={styles.field}>
                                        <label style={styles.label}>Country*</label>
                                        <select 
                                        name="country"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.country}
                                        style={styles.input}
                                        >
                                            <option value="">Select Country</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            </select>
                                            {formik.touched.country&&formik.errors.country&&(
                                                <div style={styles.error}>{formik.errors.country}</div>
                                            )}
                                            </div>

                                            {/*Optional*/}
                                            <div style={styles.field}>
                                                <label style={styles.label}>Phone</label>
                                                <input
                                                name="phone"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.phone}
                                                style={styles.input}
                                                />
                                            </div>

                                            

                                            <div style={styles.field}>
                                                <label style={styles.label}>Education</label>
                                                <select
                                                name="education"
                                                onChange={formik.handleChange}
                                                value={formik.values.education}
                                                style={styles.input}>
                                                    <option value="">Select</option>
                                                    <option value="School">School</option>
                                                    <option value="College">College</option>
                                                    <option value="University">University</option>
                                                </select>
                                            </div>

                                            <div style={styles.field}>
                                                <label style={styles.label}>Address</label>
                                                <textarea
                                                name="address"
                                                onChange={formik.handleChange}
                                                value={formik.values.address}
                                                style={{...styles.input,height:"60px"}}
                                                />
                                            </div>

                                            <div style={styles.field}>
                                                <label style={styles.label}>State</label>
                                                <input
                                                name="state"
                                                onChange={formik.handleChange}
                                                value={formik.values.state}
                                                style={styles.input}
                                                />
                                            </div>

                                            <div style={styles.field}>
                                                <label style={styles.label}>ZIP Code</label>
                                                <input
                                                name="zip"
                                                onChange={formik.handleChange}
                                                value={formik.values.zip}
                                                style={styles.input}
                                                />
                                                {formik.errors.zip&&<div style={styles.error}>{formik.errors.zip}</div>}
                                            </div>

                                            <button type="submit"
                                            style={styles.button}>
                                                Submit
                                            </button>
                                            </form>
                                            </div>

);
}
const styles={
    container:{
        maxWidth:"500px",
        margin:"40px auto",
        padding:"20px",
        border:"1px solid #ccc",
        borderRadius:"10px",
        backgroundColor:"#fff",
        fontFamily:"Arial,sans-serif",
    },
    title:{
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:"20px",
    },
    form:{
        display:"flex",
        flexDirection:"column",
    },
    field:{
        marginBottom:"15px",
    },
    label:{
        fontWeight:"bold",
        display:"block",
        marginBottom:"5px",
    },
    input:{
        width:"100%",
        padding:"8px",
        borderRadius:"5px",
        border:"1px solid #ccc",
    },
    radioLabel:{
        marginRight:"15px",
    },
    error:{
        color:"red",
        fontSize:"13px",
        marginTop:"3px",
    },
    button:{
        backgroundColor:"green",
        color:"white",
        border:"none",
        padding:"10px",
        borderRadius:"5px",
        fontWeight:"bold",
        cursor:"pointer",
        width:"100%"
    },

};