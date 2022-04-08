import { SetStateAction, useState, Fragment } from 'react'
import { Transition } from '@headlessui/react'

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
  const [secretInput, setSecretInput] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [jiggleState, setJiggleState] = useState('')

  const handleSubmit = () => {
    console.log('submitted', secretInput, SECRET, MESSAGE)
    if (secretInput === SECRET) {
      setShowMessage(true)
    } else {
      setJiggleState('jiggle')
      setShowMessage(false)
    }
  }

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSecretInput(event.target.value)
    setJiggleState('')
    console.log(secretInput)
  }

  return (
    <BaseModal title="" isOpen={isOpen} handleClose={handleClose}>
      <div className={'flex flex-col mt-2 divide-y ' + jiggleState}>
        {!showMessage ? (
          <>
            <div className="w-full max-w-sm">
              <p>┌(▀Ĺ̯ ▀-͠ )┐</p>
              <p>What's the secret</p>
              <div className="flex items-center border-b border-purple-300 py-2">
                <input
                  value={secretInput}
                  onChange={handleChange}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="secret"
                  aria-label="Full name"
                />
                <button
                  className="flex-shrink-0 bg-purple-300 hover:bg-purple-500 border-purple-300 hover:border-purple-500 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                  onClick={handleSubmit}
                >
                  Enter
                </button>
              </div>
            </div>
          </>
        ) : (
          <Transition
            show={showMessage}
            as={Fragment}
            enter="ease-out duration-2000 transition"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-full max-w-sm">
              <p className="w-60">{MESSAGE}</p>
            </div>
          </Transition>
        )}
      </div>
    </BaseModal>
  )
}
