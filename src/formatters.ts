/**
 * Formata uma string de data no padrão ISO8601 para o formato dd/mm/yyyy
 * @param date String de data no padrão ISO8601 a ser formatada
 * @returns String de data no formato dd/mm/yyyy
 */
export const formatISODateString = (date: string): string => {
  const dateObj = new Date(date);

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC"
  }).format(dateObj)
}