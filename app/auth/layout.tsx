const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-700 ">
      {children}
    </div>
  )
}
export default AuthLayout
