import CardWrapper from "./card-wrapper"

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonHref="/auth/register"
      backButtonLabel="Dont't have am account?"
      showSocials
    >
      Login Form
    </CardWrapper>
  )
}

export default LoginForm
