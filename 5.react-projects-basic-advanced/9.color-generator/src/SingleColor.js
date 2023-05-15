import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

const SingleColor = ({rgb, weight, hexColor, index}) => {
  const [alert, setAlert] = useState(false);
  // rgb is an array - convert it into a string on commas using join()
  const bcg = rgb.join(',');
  console.log(bcg);
  const hexValue = `#${hexColor}`
  // Manual conversion to hex color - not used in this component
  // const hex = rgbToHex(...rgb)
  useEffect(() => {
    // console.log("effect");
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000)
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article className={`color ${index >= 10 && 'color-light'} `} title='Click to copy color'
      style={{backgroundColor:`rgb(${bcg})`}}
      onClick={()=>{
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >

      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue.toUpperCase()}</p>
      {
        alert &&<p className='alert'>copied to clipboard</p>
      }
    </article>
  )
}

export default SingleColor
