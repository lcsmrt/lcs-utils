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

/**
 * Recebe um nome completo e retorna as iniciais do primeiro e do último nome.
 * @param name Nome completo de uma pessoa
 * @returns Iniciais do primeiro e do último nome da pessoa
 */
export const getFirstAndLastInitials = (name: string): string => {
  const names = name.split(" ");
  const firstInitial = names[0].charAt(0).toUpperCase();
  const lastInitial = names[names.length - 1].charAt(0).toUpperCase();

  return firstInitial + lastInitial;
}