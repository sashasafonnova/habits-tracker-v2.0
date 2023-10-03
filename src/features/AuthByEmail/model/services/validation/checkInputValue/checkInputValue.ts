export const checkInputValue = (value: string) => {
   const checkedValue = value.replace(/\s/g, '');

   return checkedValue;
};