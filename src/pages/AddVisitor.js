import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import validate from "../component/HookValidation/FormValidationRules";
import useForm from "../component/HookValidation/UseForm";
import Notifications, { notify } from 'react-notify-toast';

export default function AddVisitor(props) {
    const [todaysDate ,setDate] = useState(new Date())
  const saveVistor =  () => {
    ImageToUrl(values).then(result => {
        var saveData = {
            name:values.name,
            email:values.email,
            selfieimage:result,
            meet:values.meet,
            personname:values.visitname,
            currentdate:new Date(),
            intime:values.inTime,
            outtime:values.outTime,
        }
        var visitor_json  = JSON.parse(localStorage.getItem('Visitor'))
        visitor_json.push(saveData);
        localStorage.setItem('Visitor',JSON.stringify(visitor_json))
        notify.show("Visitor Added Successfully !!", 'success', 5000);
        props.history.push('/visitorLog');
    }).catch(error => {
        console.log(error)
    }) 
    };

  const ImageToUrl = values => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(values.selfie);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    });

  const { values, errors, handleChange, handleSubmit } = useForm(
    validate,
    saveVistor
  );


  return (
    <div className="container white-box top-margin-2">
          <Notifications options={{ zIndex: 180 ,top: '50px'}} />
      <h1>Add Visitor</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className="bold-text">Name</Form.Label>
          <Form.Control
            type="text"
            className={errors.name ? 'is-invalid form-input-text' : 'form-input-text'}
            placeholder="Enter Your Name"
            name="name"
            id="name"
            onChange={handleChange}
            value={values.name || ""}
          />
          {errors.name && (<p className="invalid">{errors.name}</p>)}
        </Form.Group>
        <Form.Group>
          <Form.Label className="bold-text">Upload Selfie</Form.Label>
          <Form.File lassName={errors.selfie ? 'is-invalid form-input-text' : 'form-input-text'} name="selfie" id="custom-file" label={values.selfie ? values.selfie.name : ''} custom onChange={handleChange}/>
          {errors.selfie && (<p className="invalid">{errors.selfie}</p>)}
        </Form.Group>
        <Form.Group>
          <Form.Label className="bold-text">Email</Form.Label>
          <Form.Control
            type="email"
            className={errors.email ? 'is-invalid form-input-text' : 'form-input-text'}
            placeholder="Enter Your Email"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email || ""}
          />
          {errors.email && (<p className="invalid">{errors.email}</p>)}
        </Form.Group>
        <Form.Group>
          <Form.Label>Type Of Visit</Form.Label>
          <Form.Control
            as="select"
            className={errors.meet ? 'is-invalid form-input-text' : 'form-input-text'}
            name="meet"
            onChange={handleChange}
            value={values.meet || ""}
          >
            <option value="">Choose Purpose of Meet</option>
            <option value="Meeting">Meeting</option>
            <option value="Delivery">Delivery</option>
            <option value="Personal">Personal</option>
          </Form.Control>
          {errors.meet && (<p className="invalid">{errors.meet}</p>)}
        </Form.Group>
        <Form.Group>
          <Form.Label className="bold-text">Person To visit</Form.Label>
          <Form.Control
            type="text"
            className={errors.visitname ? 'is-invalid form-input-text' : 'form-input-text'}
            placeholder="Enter Name OF Person To Visit"
            name="visitname"
            id="visitname"
            onChange={handleChange}
            value={values.visitname || ""}
          />
          {errors.visitname && (<p className="invalid">{errors.visitname}</p>)}
        </Form.Group>
        <Form.Group>
          <Form.Label className="bold-text">Date of Entry</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="date"
            disabled
            id="date"
            value={todaysDate.getFullYear()+'-' + (todaysDate.getMonth()+1) + '-'+todaysDate.getDate()}
          />
          {errors.fullName && (<p className="invalid">{errors.fullName}</p>)}
        </Form.Group>
        <Form.Group>
          <Form.Label className="bold-text">Time Of Entry</Form.Label>
          <Form.Control
            type="time"
            placeholder="Please Enter Time of entry"
            className={errors.inTime ? 'is-invalid form-input-text' : 'form-input-text'}
            name="inTime"
            id="inTime"
            onChange={handleChange}
            value={values.inTime || ""}
          />
          {errors.inTime && (<p className="invalid">{errors.inTime}</p>)}
        </Form.Group>
        <Form.Group>
          <Form.Label className="bold-text">Time Of Exit</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter Time of Exit"
            className={errors.outTime ? 'is-invalid form-input-text' : 'form-input-text'}
            name="outTime"
            id="outTime"
            onChange={handleChange}
            value={values.outTime || ""}
          />
          {errors.outTime && (<p className="invalid">{errors.outTime}</p>)}
        </Form.Group>
        <Form.Group className="button-align">
          <Button variant="dark" type="submit">
            Save
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
