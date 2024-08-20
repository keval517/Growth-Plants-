import React from 'react'
import InfoBar from './InfoBar'

function Info() {
  return (
    
    <div className='border-solid border-[7px] border-white rounded-[30px] bg-cover h-screen '>
         <InfoBar id="input1" h1="Ordering for Delivery?" p="I don't handle food orders directly, but I can help you find information on popular food delivery services, menu recommendations, or anything else related to ordering food. Let me know what you're looking for!"/>
         <InfoBar id="input2" h1="Potting Services" p="We offer potting on in store purchases or you are welcome to bring in your own and we can pot them for you: There is a fee depending one what supplies are used. Visit us or call us for more
details."/>
         <InfoBar id="input3" h1="Do we Ship Plants?" p="I don't facilitate shipping or selling items, including plants. However, I can provide information on companies that do ship plants, tips for shipping plants safely, or any other related information you might need. What specific information are you looking for?"/>
         <InfoBar id="input4" h1="Ordering for Pick up?" p="I can't place orders directly, but I can guide you through the process of ordering for pick up from various services or provide tips on how to make the process easier. Let me know what kind of information or help you need!"/>
    </div>
  )
}

export default Info
