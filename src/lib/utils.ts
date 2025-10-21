// Archivo de utilidades generales
export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}