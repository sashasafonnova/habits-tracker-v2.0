import {
   DetailedHTMLProps, HTMLAttributes, ReactNode,
} from 'react';
import { Mods, classMaker } from 'shared/lib/classMaker/classMaker';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '0' | '4' | '8' | '10' | '20' | '30' | '40';

const justifyClasses: Record<FlexJustify, string> = {
   start: cls.justifyStart,
   center: cls.justifyCenter,
   end: cls.justifyEnd,
   between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
   start: cls.alignStart,
   center: cls.alignCenter,
   end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
   row: cls.directionRow,
   column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
   0: cls.gap0,
   4: cls.gap4,
   8: cls.gap8,
   10: cls.gap10,
   20: cls.gap20,
   30: cls.gap30,
   40: cls.gap40,
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    maxHeight?: boolean;
    wrap?: 'wrap' | 'wrapReverse';
}

export const Flex = (props: FlexProps) => {
   const {
      className = '',
      children,
      justify = 'start',
      align = 'center',
      direction = 'row',
      gap = '0',
      max,
      maxHeight,
      wrap,
      ...otherProps
   } = props;

   const additional = [
      className,
      justifyClasses[justify],
      alignClasses[align],
      directionClasses[direction],
      cls[wrap],
      gap && gapClasses[gap],
   ];

   const mods: Mods = {
      [cls.max]: max,
      [cls.maxHeight]: maxHeight,
   };

   return (
      <div className={classMaker(cls.Flex, additional, mods)} {...otherProps}>
         {children}
      </div>
   );
};
