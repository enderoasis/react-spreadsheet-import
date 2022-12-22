import { Button, ModalFooter } from "@chakra-ui/react"

type ContinueButtonProps = {
  onContinue: (val: any) => void
  onPrevious: (val: any) => void
  title: string
  title_back: string
  isLoading?: boolean
}

export const ContinueButton = ({ onContinue, onPrevious, title, title_back, isLoading }: ContinueButtonProps) => (
  <ModalFooter>
    <Button size="lg" w="21rem" marginRight="30px" onClick={onPrevious} isLoading={isLoading}>
      {title_back}
    </Button>
    <Button size="lg" w="21rem" onClick={onContinue} isLoading={isLoading}>
      {title}
    </Button>
  </ModalFooter>
)
