import { StaticImageData } from 'next/image'

export interface INavElement {
  title: string
  link: string
}

export interface IPopularWaysData {
  rating: string
  title: string
  subtitle: string
  price: number
  backgroundImage: StaticImageData
}

export interface ITravelsBlogData {
  title: string
  text: string
  link: string
  date: string
  image: StaticImageData
}

export interface IServices {
  title: string
  links: IFooterLink[]
}

export interface IFooterLink {
  text: string
  link: string
  new?: boolean
}
