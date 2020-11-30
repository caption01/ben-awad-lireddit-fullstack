import React from "react";
import { Form, Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Wrapper } from "../components/wrapper";
import { InputField } from "../components/InputField";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              label="username"
              placeholder="username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                label="password"
                placeholder="password"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="teal"
            >
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;