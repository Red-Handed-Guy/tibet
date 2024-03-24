import { IServices } from '@/types'

export const services: IServices = {
  title: 'Наши услуги',
  links: [
    {
      text: 'Прогулки в горы летом',
      link: '#',
    },
    {
      text: 'Зимние походы в горы',
      link: '#',
    },
    {
      text: 'Посещение храмов в горах',
      link: '#',
    },
    {
      text: 'Экстремальные виды туризма',
      link: '#',
    },
    {
      text: 'Походы в джунглях Амазонии',
      link: '#',
      new: true,
    },
    {
      text: 'Поездка в Африку',
      link: '#',
    },
  ],
}

export const important: IServices = {
  title: 'Важно для путешествий',
  links: [
    {
      text: 'Как собрать в долгий поход?',
      link: '#',
    },
    {
      text: 'Жизненно важные предметы для похода',
      link: '#',
    },
    {
      text: 'Медицинская страховка, гарантии безопасности',
      link: '#',
    },
    {
      text: 'Если вы врач - загляните сюда',
      link: '#',
    },
  ],
}
