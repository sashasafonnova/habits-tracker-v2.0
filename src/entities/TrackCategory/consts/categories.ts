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
   icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export enum CategoryNames {
   HEALTH = 'Здоровье',
   FAMILY = 'Семья',
   SELF_DEV = 'Саморазвитие',
   ENTERTAIMENT = 'Развлечения',
   HOME = 'Дом',
   FINANCE = 'Финансы',
   STUDY = 'Учеба',
   WORK = 'Работа',
   OTHERS = 'Другое'
}

type CategoryNamesKeys = keyof typeof CategoryNames;
export type CategoryNamesType = typeof CategoryNames[CategoryNamesKeys];

export const categories: Category[] = [
   {
      name: CategoryNames.HEALTH,
      icon: healthIcon,
   },
   {
      name: CategoryNames.FAMILY,
      icon: familyIcon,
   },
   {
      name: CategoryNames.SELF_DEV,
      icon: growIcon,
   },
   {
      name: CategoryNames.ENTERTAIMENT,
      icon: holidaysIcon,
   },
   {
      name: CategoryNames.HOME,
      icon: homeIcon,
   },
   {
      name: CategoryNames.FINANCE,
      icon: moneyIcon,
   },
   {
      name: CategoryNames.STUDY,
      icon: studyIcon,
   },
   {
      name: CategoryNames.WORK,
      icon: workIcon,
   },
   {
      name: CategoryNames.OTHERS,
      icon: anotherIcon,
   }
];