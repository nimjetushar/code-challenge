export interface FlightDetail {
    flightName: string;
    from: string;
    to: string;
    price: number;
    departure: string;
    arrival: string;
}

export interface SearchCriteria {
    originCity: string;
    destinationCity: string;
    departurenDate: string;
    returnDate: string;
    noPassenger: number;
    isOneWay: boolean;
    priceRange: number;
}
