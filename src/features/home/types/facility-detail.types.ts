export interface Court {
    id: string;
    name: string;
    type: string;
    indoor: boolean;
    basePrice: number;
    sport: string;
}

export interface FacilityDetail {
    id: string;
    name: string;
    description: string;
    address: string;
    imageUrl: string;
    rating: number;
    reviewCount: number;
    sports: string[];
    amenities: string[];
    courts: Court[];
}
