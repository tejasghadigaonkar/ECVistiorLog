import { useState, useEffect } from 'react';

const useForm = (validate,callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [showErrorAfterPageLoad, setshowErrorAfterPageLoad] = useState(false);
  const [submittedOnce, setSubmittedOnce] = useState(false);

  useEffect(() => {
    if (showErrorAfterPageLoad && submittedOnce) {
      setErrors(validate(values));
    }
    setshowErrorAfterPageLoad(true);
  }, [values]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if(Object.keys(validate(values)).length > 0){
      setErrors(validate(values));
    }else{
      callback();
    }  
    setSubmittedOnce(true);
  };

  const resetForm = () => {
    setValues(values => ({}));
    setSubmittedOnce(false);
  }

  const handleChange = (event) => {
    event.persist();
    if(event.target.type == 'file'){
      setValues(values => ({ ...values, [event.target.name]: event.target.files[0] }));
    }else{
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }
    
  }

  return {
    handleChange,
    handleSubmit,
    resetForm,
    values,
    errors
  }
};

export default useForm;