import CardWrapper from "./card-wrapper"

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonHref="/auth/rehister"
      backButtonLabel="Dont't have am account?"
      showSocials
    >
      Login Form
    </CardWrapper>
  )
}

export default LoginForm
