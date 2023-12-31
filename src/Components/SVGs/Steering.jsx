import React from 'react'

const Steering = ({bgColor, frColor}) => {
  return (
    <svg width="90" height="90" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="60" cy="60" r="60" fill={bgColor}/>
<path d="M60 18C36.8055 18 18 36.8055 18 60C18 83.1945 36.8055 102 60 102C83.1945 102 102 83.1945 102 60C102 36.8055 83.1945 18 60 18ZM60 28.5C73.6684 28.5 85.2131 37.3043 89.5732 49.5H30.4268C34.7869 37.3043 46.3316 28.5 60 28.5ZM60 65.25C59.3009 65.2658 58.6056 65.1418 57.9551 64.8852C57.3045 64.6286 56.7118 64.2446 56.2117 63.7558C55.7116 63.267 55.3141 62.6832 55.0428 62.0387C54.7714 61.3942 54.6315 60.702 54.6313 60.0027C54.6311 59.3033 54.7707 58.611 55.0417 57.9664C55.3128 57.3217 55.7099 56.7377 56.2098 56.2487C56.7097 55.7596 57.3022 55.3754 57.9526 55.1184C58.603 54.8615 59.2982 54.7372 59.9974 54.7526C61.3691 54.783 62.6744 55.3491 63.634 56.3298C64.5935 57.3106 65.131 58.628 65.1313 60C65.1317 61.3721 64.5948 62.6898 63.6358 63.671C62.6768 64.6522 61.3717 65.219 60 65.25ZM28.5 60C42.8456 60 54.4639 73.8233 54.708 90.9671C39.861 88.4235 28.5 75.5558 28.5 60ZM65.292 90.9671C65.5361 73.8233 77.1544 60 91.5 60C91.5 75.5558 80.139 88.4235 65.292 90.9671Z" fill={frColor}/>
</svg>

  )
}

export default Steering