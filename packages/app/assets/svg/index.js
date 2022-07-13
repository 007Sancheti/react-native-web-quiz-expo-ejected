import React from 'react'
import { SvgXml } from 'react-native-svg'

export function CrossSvg() {
  const svgXml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
  <path d="M1 1.3125L9.4375 9.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.75 1L1 9.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
  return <SvgXml xml={svgXml} />
}
