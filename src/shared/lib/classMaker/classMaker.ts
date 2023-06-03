export const classMaker = (mainClass: string, additional: string[] = []): string => {
   return [
      mainClass,
      ...additional.filter(Boolean),
   ]
      .join(' ');
};