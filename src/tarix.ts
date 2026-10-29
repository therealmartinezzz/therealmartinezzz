const aylar = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
  'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr',
];

export function tarixYaz(tarix: Date): string {
  return `${aylar[tarix.getUTCMonth()]} ${tarix.getUTCFullYear()}`;
}
