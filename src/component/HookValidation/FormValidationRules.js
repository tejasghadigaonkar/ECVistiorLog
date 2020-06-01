function validate(values) {

  const emailRegex = /\S+@\S+\.\S+/;
  const nameRegex = /^([a-zA-Z]+ ?)*$/;

  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  } else if (!nameRegex.test(values.name)) {
    errors.name = 'Name is invalid';
  }

  if (!values.visitname) {
    errors.visitname = 'Person Name is required';
  } else if (!nameRegex.test(values.visitname)) {
    errors.visitname = 'Person Name is invalid';
  }

  if (!values.selfie) {
    errors.selfie = 'Selfie is required';
  } else if (values.selfie.type!= 'image/jpeg') {
    errors.selfie = 'Selfie should have. jpg extension';
  }

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.meet) {
    errors.meet = 'Please Select Type of Visit';
  }

  if (!values.inTime) {
    errors.inTime = 'Time of Entry is required';
  }

  if (!values.outTime) {
    errors.outTime = 'Time of Exit is required';
  }else if((values.inTime.split(':'))[0]>(values.outTime.split(':'))[0]){
    errors.outTime = 'Time of Exit should be greater than Time of Entry';
  }
  console.log(errors);

  return errors;
}
export default validate;