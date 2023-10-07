export function getLastUpdated () {
   const lastUpdated = new Date().toLocaleString().split('').slice(0, 17).join('');
   return lastUpdated;
}