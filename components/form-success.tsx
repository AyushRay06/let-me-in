import { CheckCheckIcon } from "lucide-react"

interface FormSuccessProps {
  message?: string
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) {
    return null
  }

  return (
    <div className="bg-emerald-500/15 p-3 text-emerald-500 flex text-sm gap-x-2 items-center rounded-md">
      <CheckCheckIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  )
}
