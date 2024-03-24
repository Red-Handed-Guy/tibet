import { IPopularWaysData } from '@/types'
import LagoonJPEG from '@images/popular-ways/lagoon.jpeg'
import MantraJPEG from '@images/popular-ways/mantra.jpeg'
import StarsJPEG from '@images/popular-ways/stars.jpeg'

export const popularWays: IPopularWaysData[] = [
  {
    rating: '4.9',
    price: 480,
    title: 'Озеро возле гор',
    subtitle: 'романтическое приключение',
    backgroundImage: LagoonJPEG,
  },
  {
    rating: '4.5',
    price: 500,
    title: 'Ночь в горах',
    subtitle: 'в компании друзей',
    backgroundImage: StarsJPEG,
  },
  {
    rating: '5.0',
    price: 230,
    title: 'Йога в горах',
    subtitle: 'для тех, кто забоится о себе',
    backgroundImage: MantraJPEG,
  },
]
