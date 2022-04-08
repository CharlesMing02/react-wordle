import { BaseModal } from './BaseModal'
import { SECRET, MESSAGE } from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SecretModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
}: Props) => {
  return (
    <BaseModal title="┌(▀Ĺ̯ ▀-͠ )┐" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col mt-2 divide-y">
        <p>What's the secret</p>
      </div>
    </BaseModal>
  )
}
