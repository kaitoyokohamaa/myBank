import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/core";
import firebase from "../../../firebase";
import { Button } from "@chakra-ui/core";
import styles from "./signin.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Spinner from "../../atoms/Spinner";

const Index: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Emailがおかしいです")
            .required("Emailは必須になってます"),
          password: Yup.string()
            .min(6, "パスワードは6文字必要です")
            .required("パスワードは必須になってます"),
        })}
        onSubmit={(fields) => {
          const email = fields.email;
          const password = fields.password;
          setLoading(true);
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
              history.push("/home");
              console.log(res);
            })
            .catch((err) => {
              alert("何か間違ってるんじゃないですカァー？");
              console.log(err);
              setLoading(false);
            });
        }}
      >
        {({ errors, status, touched }) => (
          <Form className={styles.formWrap}>
            <FormControl className={styles.form}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Field
                name="email"
                type="text"
                className={
                  styles.formimput +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.invalid}
              />
            </FormControl>
            <FormControl className={styles.form}>
              <FormLabel htmlFor="fname">password</FormLabel>
              <Field
                name="password"
                type="password"
                className={
                  styles.formimput +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.invalid}
              />
            </FormControl>
            {!loading ? (
              <Button
                type="submit"
                variantColor="green"
                className={styles.register}
              >
                ログイン 　　{" "}
              </Button>
            ) : (
              <Spinner />
            )}
            <p>
              アカウントをお持ちでない方は<Link to="/">こちら</Link>
            </p>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Index;
