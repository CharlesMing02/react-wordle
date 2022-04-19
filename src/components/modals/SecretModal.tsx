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
  }

  return (
    <BaseModal title="" isOpen={isOpen} handleClose={handleClose}>
      <div className={'h-96 flex flex-col mt-2 justify-center ' + jiggleState}>
        {/* {!showMessage ? ( */}
        <>
          <Transition
            appear={true}
            show={!showMessage}
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-0"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="flex flex-row justify-center">
              <div className="w-60 max-w-sm">
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
            </div>
          </Transition>
          {/* ) : ( */}
          <Transition
            appear={true}
            show={showMessage}
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-full max-w-sm flex flex-row justify-center overflow-y-scroll pt-5">
              <p
                className="w-60 text-left font-serif text-sm"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {MESSAGE.replace(/\\n/gm, '\n')}
              </p>
            </div>
          </Transition>
        </>
      </div>
    </BaseModal>
  )
}
