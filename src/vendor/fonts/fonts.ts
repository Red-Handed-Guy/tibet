import localFont from 'next/font/local'

export const nextArt = localFont({
  src: [
    {
      path: './next-art/ART_Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './next-art/ART_Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './next-art/ART_SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './next-art/ART_Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './next-art/ART_Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--next-art',
})
