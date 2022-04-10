
import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from "./LoginStyles"
import meal from "../../assets/meal.svg";

const Login = () => {
  const user = {
    username:"user"
  }

  const gotosite = (e)=>{
    e.prevent.default();
    sessionStorage.setItem("user", JSON.stringify(user))
    window.location.href = "/home";

  }
  return (
    <LoginContainer>
      <FormContainer>
      <StyledImg src={meal} />
      <Header>{"Albert's Recipe"}</Header>

      <StyledForm onSubmit={gotosite}>
        <StyledInput type="text" placeholder="username" required/>
        <StyledInput type="password" placeholder="password" required/>
        <StyledButton type='submit' >Login</StyledButton>
      </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login