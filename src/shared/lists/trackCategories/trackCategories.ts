import healthIcon from './category-icons/health.svg';
import anotherIcon from './category-icons/another.svg';
import familyIcon from './category-icons/family.svg';
import growIcon from './category-icons/grow.svg';
import holidaysIcon from './category-icons/holidays.svg';
import homeIcon from './category-icons/home.svg';
import moneyIcon from './category-icons/money.svg';
import studyIcon from './category-icons/study.svg';
import workIcon from './category-icons/work.svg';


export interface Category {
   name: string,
   icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const trackCategories: Category[] = [
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