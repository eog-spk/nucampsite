import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form data", values);
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        agree: false,
        contactType: "By Phone",
        feedback: "None",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor='firstName' md={2}>
            First Name
          </Label>
          <Col md={10}>
            <Field
              name='firstName'
              placeholder='First Name'
              className='form-control'
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor='lastName' md={2}>
            Last Name
          </Label>
          <Col md={10}>
            <Field
              name='lastName'
              placeholder='Last Name'
              className='form-control'
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor='phone' md='2'>
            Phone
          </Label>
          <Col md='10'>
            <Field name='phone' placeholder='Phone' className='form-control' />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor='email' md={2}>
            Email
          </Label>
          <Col md={10}>
            <Field
              type='email'
              name='email'
              placeholder='Email'
              className='form-control'
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label check md={{ size: 4, offset: 2 }}>
            <Field name='agree' type='checkbox' className='form-check-input' />{" "}
            May we contact you?
          </Label>

          <Col md={4}>
            <Field as='select' name='contactType' className='form-control'>
              <option>By Phone</option>
              <option>By Email</option>
            </Field>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor='feedback' md={2}>
            Your Feedback
          </Label>
          <Col md={10}>
            <Field
              as='textarea'
              name='feedback'
              rows='12'
              className='form-control'
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button type='submit' color='primary'>
              Send Feedback
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;
