import { ITechnologiesData } from "@data/static/projects";
import { Direction } from "@data/types/Direction";

export interface IThumbnailData {
  name: string;
  position: string;
  clientPhoto: string;
  company: string;
}

// Interfaz para las funciones de interactividad de la tarjeta
export interface ICardInteractivity {
  handleClick: ({ ...selectedData }: IThumbnailData) => void;
  isSelected: boolean;
}

// Interfaz que combina ambas partes
export interface IThumbnailCard extends IThumbnailData, ICardInteractivity {}

export interface ICardDetails {
  logo: string;
  company: string;
  quote: string;
  feedback: string;
  name: string;
  position: string;
}
export interface IProjectsCardProps {
  id: number;
  projectTitle: string;
  projectDescription: string;
  projectUrl: string;
  projectInfoUrl: string;
  projectPictureUrl: string;
  cardDirection?: Direction;
}
export interface ILargeCardProps {
  projectsTechnologies: ITechnologiesData;
}
