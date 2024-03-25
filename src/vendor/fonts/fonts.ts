import localFont from 'next/font/local'

export const nextArt = localFont({
  src: [
    {
      path: './next-art/ART_Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--next-art',
})
