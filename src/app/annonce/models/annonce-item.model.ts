import { AnnonceType } from './annonce-type.model';

export interface AnnonceItem {
    id: string;
    note: number[];
    name: string;
    description: string;
    imagePath: string;
    type: AnnonceType;
    prix?: number;
}
