declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  const SVG: FC<SVGProps<SVGElement>>
  export default SVG
}
