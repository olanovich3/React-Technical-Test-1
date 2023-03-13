import styled from 'styled-components';

const LoginStyle = styled.section`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-card {
    width: 350px;
    height: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Login = () => {
  return (
    <LoginStyle>
      <div className="login-card">
        <h1>Please enter your name:</h1>
        <input type="text" placeholder="Username" />
        <button>Log in</button>
      </div>
    </LoginStyle>
  );
};

export default Login;
