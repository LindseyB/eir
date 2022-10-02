import { Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import { Field, Form, Formik } from 'formik';

function AddTask() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function validateTask(value) {
    let error;
    if (!value) {
      error = "Task is required";
    }
    return error;
  }

  function renderForm() {
    return (
      <Formik
        initialValues={{ task: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
            onClose()
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Field name='task' validate={validateTask}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.task && form.touched.task}>
                  <FormLabel>Task</FormLabel>
                  <Input {...field} placeholder='task' required/>
                  <FormErrorMessage>{form.errors.task}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
  }

  return (
    <>
      <Button width="100%" onClick={onOpen}>Add Task</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            { renderForm() }
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddTask;