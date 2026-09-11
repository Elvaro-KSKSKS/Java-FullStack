import { useState } from 'react'

import Cart from '../Cart'
import { SidebarContainer } from './styles'
import Checkout from '../Checkout'

export type SidebarStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

const Sidebar = () => {
  const [step, setStep] = useState<SidebarStep>('cart')

  return (
    <SidebarContainer>
      {step === 'cart' && <Cart onContinue={() => setStep('delivery')} />}
      {step !== 'cart' && (
        <Checkout
          step={step}
          onChangeStep={setStep}
          onBack={() => setStep('cart')}
        />
      )}
    </SidebarContainer>
  )
}

export default Sidebar
