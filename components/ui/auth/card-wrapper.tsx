import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card"
import Header from "./header"
import Socials from "./socials"

interface CardwrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocials?: boolean
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocials,
}: CardwrapperProps) => {
  //   const router = useRouter()
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Login to use all the featr" />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
    </Card>
  )
}

export default CardWrapper
