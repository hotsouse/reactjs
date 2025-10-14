import {Formik,Field,ErrorMessage} from "formik";
import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
    fullName:Yup.string().min(2,"input At least two characters").required("Full name is required"),
    group:Yup.string().required("Group is required"),
    grade:Yup.number("write 1-100").required()
});

export default function StudentsList(){
    const formik=useFormik({
        initialValues:{
            fullName:"",
            group:"",
            grade:"",
        },
        validationSchema:validationSchema,onSubmit:(values)=>{alert(JSON.stringify(values,null,2));},

    });
    return (
        <div style={styles.container}>
        <h1 style={styles.title}>Students List</h1>
        <form onSubmit={formik.handleSubmit} style={styles.form}>
        
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

        
        
        <div style={styles.field}>
            <label style={styles.label}>Group*</label>
            <input 
            name="group"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            style={styles.input}
            />
            {formik.touched.group && formik.errors.group&& (
                <div style={styles.error}>{formik.errors.group}</div>
            )}
            </div>


        
        <div style={styles.field}>
            <label style={styles.label}>Grade*</label>
            <input 
            name="grade"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            style={styles.input}
            />
            {formik.touched.grade && formik.errors.grade&& (
                <div style={styles.error}>{formik.errors.grade}</div>
            )}
            </div>
            <button type="submit">Submit</button>
            </form>
            </div>
    );
}
