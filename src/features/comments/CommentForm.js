import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateCommentForm } from "../../utils/validateCommentForm";

const CommentForm = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    const comment = {
      ...values,
      campsiteId: parseInt(campsiteId),
    };
    console.log("form data", comment);
    setModalOpen(false);
    resetForm();
  };
  return (
    <>
      <Button outline='true' onClick={() => setModalOpen(true)}>
        <i className='fa fa-pencil fa-lg' /> Add Comment
      </Button>
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
          Add Comment
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              rating: 5,
              text: "",
              author: "",
            }}
            onSubmit={handleSubmit}
            validate={validateCommentForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor='rating'>Rating</Label>
                <Field
                  name='rating'
                  placeholder='Rating'
                  className='form-control'
                  as='select'
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </Field>
                <ErrorMessage
                  name='rating'
                  component='div'
                  className='text-danger'
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='author'>Your Name</Label>
                <Field
                  name='author'
                  placeholder='Your Name'
                  className='form-control'
                />
                <ErrorMessage
                  name='author'
                  component='div'
                  className='text-danger'
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='text'>Comment</Label>
                <Field
                  name='text'
                  placeholder='Comment'
                  className='form-control'
                  component='textarea'
                  rows='12'
                />
                <ErrorMessage
                  name='text'
                  component='div'
                  className='text-danger'
                />
              </FormGroup>
              <Button type='submit' color='primary'>
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CommentForm;
