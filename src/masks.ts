/**
 * Mascara uma string para CPF **ou** CNPJ, escolhendo pelo número de dígitos
 * - Até 11 dígitos → CPF (000.000.000-00)
 * - 12 a 14 dígitos → CNPJ (00.000.000/0000-00)
 * @param value Valor a ser mascarado
 * @returns Valor no formato de CPF ou CNPJ
 */
export const maskCpfOrCnpj = (value: string): string => {
  const digits = (value || "").replace(/\D/g, "").slice(0, 14);

  if (digits.length <= 11) {
    // CPF
    return digits
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2");
  }

  // CNPJ
  return digits
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

/**
 * Mascara uma string para o formato de CNPJ (000.000.000/0000-00)
 * @param value Valor a ser mascarado
 * @returns Valor no formato de CNPJ
 */
export const maskCnpj = (value: string): string => {
  return (value || "")
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

/**
 * Mascara uma string para o formato de CPF (000.000.000-00)
 * @param value Valor a ser mascarado
 * @returns Valor no formato de CPF
 */
export const maskCpf = (value: string): string => {
  return (value || "")
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2");
};

/**
 * Mascara uma string para o formato de CEP (00000-000)
 * @param value Valor a ser mascarado
 * @returns Valor no formato de CEP
 */
export const maskCep = (value: string): string => {
  const digits = (value || "").replace(/\D/g, "").slice(0, 8);
  return digits.replace(/(\d{5})(\d{1,3})$/, "$1-$2");
};

/**
 * Mascara uma string para o formato de moeda brasileira (R$ XXX.XXX,XX)
 * @param value Valor a ser mascarado
 * @returns Valor no formato de moeda brasileira
 */
export const maskBRCurrency = (value: string): string => {
  const onlyDigits = (value || "").replace(/\D/g, "").replace(/^0+/, "");

  if (!onlyDigits) return "R$ 0,00";

  const number = onlyDigits.padStart(3, "0");
  const cents = number.slice(-2);
  const integer = number.slice(0, -2);

  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `R$ ${formattedInteger},${cents}`;
};

/**
 * Mascara uma string para o formato de número de telefone ou celular, com ou sem DDD
 * @param value Valor a ser mascarado
 * @returns Valor no formato de número de telefone ou celular
 */
export const maskPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 5) return digits;
  if (digits.length === 6) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
  if (digits.length === 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.length === 8) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  if (digits.length === 9) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  if (digits.length === 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  if (digits.length === 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;

  return digits;
}

/**
 * Mascara uma string para o formato de data brasileira enquanto digita (dd/mm/yyyy)
 * @param value Valor a ser mascarado
 * @returns Data no formato dd/mm/yyyy
 */
export const maskBRDate = (value: string): string => {
  const digits = (value || "").replace(/\D/g, "").slice(0, 8);
  
  return digits
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2");
};

/**
 * Permite apenas números inteiros (remove qualquer caractere não numérico)
 * @param value Valor a ser mascarado
 * @returns Somente dígitos [0-9]
 */
export const maskOnlyIntegers = (value: string): string => {
  return (value || "").replace(/\D/g, "");
};

/**
 * Permite apenas números decimais, mantendo dígitos e separadores comuns (.,)
 * Observação: não valida quantidade de separadores; é uma máscara permissiva para digitação.
 * @param value Valor a ser mascarado
 * @returns Dígitos e separadores decimais (.,)
 */
export const maskOnlyDecimals = (value: string): string => {
  return (value || "").replace(/[^0-9,.\-]/g, "");
};