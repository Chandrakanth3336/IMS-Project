interface Address {
    city: string;
    mandal: string;
    district: string;
    state: string;
    pincode: string;
  }
  interface Education {
    qualification: string;
    year: number;
    percentage: number;
  }
  interface Company {
    name: string;
    location: string;
    package: string;
    offerDate: string;
  }
  interface User {
    name: string;
    gender: 'male' | 'female';
    mobile: string;
    email: string;
    batch: string;
    address: Address;
    education: Education[];
    company: Company;
    sourceType: 'Direct' | 'Refer';
    sourceFrom: string;
    referralName: string;
  }
  
