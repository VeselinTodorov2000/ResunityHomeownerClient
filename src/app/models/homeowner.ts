import { Building } from './building';

export interface Homeowner {
  homeOwnerName: string;
  homeOwnerCompany: string;
  profileIcon: string;
  buildings: Building[];
}
