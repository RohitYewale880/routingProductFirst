export interface Iuser { 
    userName: string;
    userId: string;
    userRole: string;
    profileDescription: string;
    profileImage: string;
    skills: string[];
    experienceYears: string;
    isActive: boolean;
    address: {
        current: {
            city: string;
            state: string;
            country: string;
            zipcode: string;
        };
        permanent: {
            city: string;
            state: string;
            country: string;
            zipcode: string;
        };
    };
    isAddSame: boolean;
}

export interface Iproduct{
    pid: string;
    pname: string;
    pprice: number;
    pstatus: 'In-Progress' | 'Dispatched' | 'Delivered';
    canReturn: 1 | 0;
    pdescription: string;
    pimage: string;
}

export interface Ires<T>{
    msg : string;
    data : T;
}