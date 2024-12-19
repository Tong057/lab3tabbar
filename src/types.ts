import { Position } from "@capacitor/geolocation";

export interface Memory {
    id: string;
    image: string;
    description: string;
    title: string;
    coordinates: Position;
  }