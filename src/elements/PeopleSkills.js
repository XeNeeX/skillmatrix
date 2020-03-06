import React, {useState, useReducer} from 'react';
import '../style/Stats.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal} from 'react-bootstrap'
import {Formik} from 'formik'
import * as Yup from 'yup'
import DisplayFormikState from './Helper'


const initialValues = { name: "" };

const PeopleSkills = () =>{

  const initialState = {names: ['Jan Kowalski', 'Jarosław Nos'], value: ""}
  const [state, dispatch] = useReducer(reducer, initialState)
  let value_helper = "test";
  state.value = value_helper;

    let [formValues, setFormValues] = useState(initialValues);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    function reducer(state, action) {
      switch (action.type) {
        case "add" : 
        return {names: [...state.names, state.value]};
        default:
          throw new Error();
      }
    }

    const names = state.names.map(name => (
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
        initialValues={{ name: ""}}
        onSubmit={() => {
          dispatch({type: 'add', value: value_helper})
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2)
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
              [fieldName]: targetEl.value,

            });
            return handleChange(e);
          };

          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={{ display: "block" }}>
                Name
              </label>
              <input
                name="name"
                id="name"
                placeholder="Enter your name"
                type="text"
                value_helper = {props.values.name}
                value={values.name}
                onChange={onChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
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
        {names}
    

    
    </>
    )

}
export default PeopleSkills;
