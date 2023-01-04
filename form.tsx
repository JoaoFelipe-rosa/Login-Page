import * as React from 'react';
import './style.css';
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const Validation = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Muito Curto!')
      .max(50, 'Muito Longo!')
      .required('Obrigatório'),
    lastName: Yup.string()
      .min(2, 'Muito Curto!')
      .max(50, 'Muito Longo!')
      .required('Obrigatório'),
    email: Yup.string().email('E-mail invalido').required('Obrigatório'),
  });
  return (
    <div onSubmit={Formik.handleSubmit}>
      <span className="login-form-title">Bem Vindo!</span>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={Validation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form_input">
            <Field
              name="firstName"
              className="form_input_field"
              placeHolder="Primeiro Nome"
            />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field
              name="lastName"
              className="form_input_field"
              placeHolder="Sobrenome"
            />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field
              name="email"
              type="email"
              className="form_input_field"
              placeHolder="E-mail"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <div className="container-login-form-btn">
              <button type="submit" className="login-btn-submit">
                Entrar
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="text-center">
        <span className="txt1">Não possui conta? </span>
        <a className="txt2" href="#">
          Criar conta
        </a>
      </div>
    </div>
  );
};
export default SignupForm;
