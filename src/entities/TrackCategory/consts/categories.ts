import healthIcon from '../assets/icons/health.svg';
import anotherIcon from '../assets/icons/another.svg';
import familyIcon from '../assets/icons/family.svg';
import growIcon from '../assets/icons/grow.svg';
import holidaysIcon from '../assets/icons/holidays.svg';
import homeIcon from '../assets/icons/home.svg';
import moneyIcon from '../assets/icons/money.svg';
import studyIcon from '../assets/icons/study.svg';
import workIcon from '../assets/icons/work.svg';


export interface Category {
   name: string,
   icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const categories: Category[] = [
   {
      name: 'Здоровье',
      icon: healthIcon,
   },
   {
      name: 'Семья',
      icon: familyIcon,
   },
   {
      name: 'Саморазвитие',
      icon: growIcon,
   },
   {
      name: 'Развлечения',
      icon: holidaysIcon,
   },
   {
      name: 'Дом',
      icon: homeIcon,
   },
   {
      name: 'Финансы',
      icon: moneyIcon,
   },
   {
      name: 'Учеба',
      icon: studyIcon,
   },
   {
      name: 'Работа',
      icon: workIcon,
   },
   {
      name: 'Другое',
      icon: anotherIcon,
   }
];