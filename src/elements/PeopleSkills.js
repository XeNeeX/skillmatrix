import React, {useState} from 'react';
import '../style/Stats.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal} from 'react-bootstrap'
import {Formik} from 'formik'
import * as Yup from 'yup'
import DisplayFormikState from './Helper'


const initialValues = { email: "1", email2: "2" };

const PeopleSkills = () =>{

    let [formValues, setFormValues] = useState(initialValues);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        let names = [
            'Jan Kowalski',
            'Jarosław Nos'
        ]

        const nameList = names.map(name=>(
            <div className="name"><b>{name}</b></div>
        ))
    return (
        <> 
    <Button variant="primary" onClick={handleShow} style={{ marginTop: "5%", width: "200px",  }}>
        Add User
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Title>Add new user</Modal.Title>
        <Modal.Body>
        <Formik
        initialValues={{ email: "1", email2: "2" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Required"),
          email2: Yup.string()
            .email()
            .required("Required")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          const onChange = e => {
            const targetEl = e.target;
            const fieldName = targetEl.name;
            setFormValues({
              ...formValues,
              [fieldName]: targetEl.value
            });
            return handleChange(e);
          };

          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label>
              <input
                name="email"
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={onChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label htmlFor="email" style={{ display: "block" }}>
                Email 2
              </label>
              <input
                name="email2"
                id="email2"
                placeholder="Enter your email 2"
                type="text"
                value={values.email2}
                onChange={onChange}
                onBlur={handleBlur}
                className={
                  errors.email2 && touched.email2
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email2 && touched.email2 && (
                <div className="input-feedback">{errors.email2}</div>
              )}

              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>

              <DisplayFormikState {...props} />
            </form>
        
          );
              }}
      </Formik>
        </Modal.Body>
        <Modal.Footer style={{textAlign:"center"}}>This name is going to appear on the people list of the matrix</Modal.Footer>
    </Modal>
        {nameList}
    

    
    </>
    )

}
export default PeopleSkills;
