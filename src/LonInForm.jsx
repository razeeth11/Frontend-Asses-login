import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function LonInForm() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [passState, setPassState] = useState(false);
  const navigate = useNavigate();

  const submit = (values) => {
    if (values.email !== "athreyan@gmail.com") {
      setEmail(true);
    } else if (values.password !== '123456') {
      setPassword(true);
    } else {
      const token = localStorage.setItem('token','athreyan@gmail.com')
      navigate("/data-table")
    }
  };

  const validation = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: '',
    },
    validationSchema: validation,
    onSubmit: (values) => submit(values),
  });

  return (
    <div className="logIn-form">
      <span className="camera-icon material-symbols-outlined">lock</span>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-div">
          <span className="material-symbols-outlined">mail</span>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            type="text"
            placeholder="Email"
            autoComplete="on"
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <p className="error">Enter Valid Email</p>
        ) : null}
        {email ? <p className="error">Invalid Credentials</p> : null}
        <div className="input-div">
          <span className="material-symbols-outlined">lock</span>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            type={passState ? "text" : "password"}
            placeholder="Password"
            autoComplete="on"
          />
          {!passState ? (
            <span
              onClick={() => setPassState(true)}
              id="eye"
              className="material-symbols-outlined"
            >
              visibility
            </span>
          ) : (
            <span
              onClick={() => setPassState(false)}
              id="eye"
              className="material-symbols-outlined"
            >
              visibility_off
            </span>
          )}
        </div>
        {formik.errors.password && formik.touched.password ? (
          <p className="error">Wrong Password</p>
        ) : null}
        {password ? <p className="error">Invalid Credentials</p> : null}
        <button type="submit">Log In</button>
        <p className="copyright">Copyright &#169; 2023 Brand Name Inc.</p>
      </form>
    </div>
  );
}
