import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/core";
import firebase from "../../../firebase";
import { Button } from "@chakra-ui/core";
import styles from "./signup.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Spinner from "../../atoms/Spinner";
import { useAuthentication } from "../../../functions/useAuthentication";

const Index: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [useAuthenticationContents] = useAuthentication();
  useEffect(() => {
    useAuthenticationContents.checkAuthentication();
  }, []);

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
        onSubmit={async (fields) => {
          setLoading(true);

          const email = fields.email;
          const password = fields.password;
          return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (res) => {
              const myUserID = {
                userID: [res.user?.uid],
                name: "kaito",
              };

              await useAuthenticationContents.ref.add(myUserID);
            })
            .then(() => {
              history.push(`/home`);
            })
            .catch((err) => {
              alert("きちんと入力してください");
              setLoading(false);
              console.log(err);
            });
        }}
      >
        {({ errors, touched }) => (
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
                新規登録{" "}
              </Button>
            ) : (
              <Spinner />
            )}
            <p>
              アカウントをお持ちの方は<Link to="/signin">こちら</Link>
            </p>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Index;
