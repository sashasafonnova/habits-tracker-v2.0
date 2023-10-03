export type Mods = Record<string, boolean | string>

export const classMaker = (mainClass: string, additional: string[] = [], mods: Mods = {}): string => {
   return [
      mainClass,
      ...additional.filter(Boolean),
      ...Object.entries(mods)
         .filter(([_, value]) => Boolean(value))
         .map(([className]) => className)
   ]
      .join(' ');
};