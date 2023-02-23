import "../flow/config";

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Login = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/dashboard');
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="page-container">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={variants}
        className="login-container"
      >
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email" className="label">Email</label>
          <input 
            type="email" 
            id="email" 
            className="input"
          />

          <label htmlFor="password" className="label">Password</label>
          <input 
            type="password" 
            id="password" 
            className="input"
          />

          <button 
            type="submit"
            className="button"
          >
            Login
          </button>
        </form>
      </motion.div>

      <style jsx>{`
        .page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #A084DC;
        }

        .login-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
        }

        .title {
          margin-top: 0;
          color: #645CBB;
          margin-bottom: 20px;
          font-size: 2rem;
          text-align: center;
        }
        .title:hover{
          color: #EBC7E6;
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        .label {
          margin-bottom: 5px;
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
        }

        .input {
          padding: 10px;
          margin-bottom: 20px;
          font-size: 1rem;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .button {
          padding: 10px;
          font-size: 1rem;
          font-weight: bold;
          color: #fff;
          background-color: #0014FF;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .button:hover {
          background-color: #0062cc;
        }
      `}</style>
    </div>
  );
};

export default Login;