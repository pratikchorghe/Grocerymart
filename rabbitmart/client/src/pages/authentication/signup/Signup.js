import styles from '../form.module.css';
import Authentication from "../Authentication";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignup = () => {
    // Get the form input values
    const firstName = document.querySelector('input[placeholder="First Name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    // Perform sign-up logic
    // For example, you can make an API request to a server to create a new user
    // Replace this with your actual sign-up logic
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    // Display the user data
    console.log(userData);
  };

  const form = (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <div className={styles['title']}>Sign up with your email</div>
        <div className={styles['login']}>
          Already have an account? <Link to={'/login'}>Login</Link>
        </div>
      </div>
      <div className={styles['form']}>
        <input placeholder={'First Name'} />
        <input placeholder={'Last Name'} />
        <input placeholder={'Email'} />
        <input placeholder={'Password'} type={'password'} />
        <button className={'btn1'} onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );

  return <Authentication data={form} />;
};

export default Signup;
