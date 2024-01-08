interface SelectedDataType {
  name: string;
  position: string;
  clientPhoto: string;
  company: string;
}
export interface IThumbnailData {
  name: string;
  position: string;
  clientPhoto: string;
  company: string;
}

// Interfaz para las funciones de interactividad de la tarjeta
export interface CardInteractivity {
  handleClick: ({ ...selectedData }: SelectedDataType) => void;
  isSelected: boolean;
}

// Interfaz que combina ambas partes
export interface IThumbnailCard extends IThumbnailData, CardInteractivity {}

export interface ICardDetails {
  logo: string;
  company: string;
  quote: string;
  feedback: string;
  name: string;
  position: string;
}
