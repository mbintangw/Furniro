import React, { useState } from 'react'
import HeroSectionCheckout from '../Components/Checkout/HeroSectionCheckout'
import CheckoutProduct from '../Components/Checkout/CheckoutProduct'
import DetailsOrder from '../Components/Checkout/DetailsOrder'

const CheckoutPages = () => {
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }
  return (
    <div>
      <HeroSectionCheckout />
      <CheckoutProduct togglePopup={togglePopup} />
      <DetailsOrder showPopup={showPopup} togglePopup={togglePopup}/>
    </div>
  )
}

export default CheckoutPages
