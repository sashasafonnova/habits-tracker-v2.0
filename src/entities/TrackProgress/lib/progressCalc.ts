export const progressCalc = (length: number, progress: number) => {
   const res = progress / length * 100;
   return `${Math.round(res)}%`;
};