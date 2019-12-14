import Image from '../img/ridwan.jpg';

export const CUSTOMER = {
  "1" : {
    role: 'customer',
    fname: 'Ridwan',
    lname: 'Balogun',
    phone: "08078197526",
    address: "Lagos, Nigeria",
    gender: 'male',
    email: 'balogunridwan@gmail.com',
    dob: '1989-04-21',
    accountNumber: 3042901179,
    balance: 34030.90,
    image: Image,

    transactions: [
      {
        id: 1,
        date: '16 Mar, 2019',
        beneficiary: 'Ibrahim Mukaila',
        bank: 'GTB',
        accountNumber: "56738929930",
        amount: 60000,
        status: 'Successful',
      },
      {
        id: 2,
        date: '13 Apr, 2019',
        beneficiary: 'Barakat Obatade',
        bank: 'First Bank',
        accountNumber: "12738929967",
        amount: 13000,
        status: 'Successful',
      },
      {
        id: 3,
        date: '25 Jan, 2019',
        beneficiary: 'Zaynab Opayomi',
        bank: 'U.B.A',
        accountNumber: "04738929997",
        amount: 8000,
        status: 'Failed',
      },
      {
        id: 4,
        date: '05 Jul, 2019',
        beneficiary: 'Hikmah Raji',
        bank: 'Zenith',
        accountNumber: "89738567497",
        amount: 15000,
        status: 'Failed',
      },
      
    ],
  },
  "2": {
    role: 'customer',
    fname: 'Kamar',
    lname: 'Olayanju',
    phone: "07063818194",
    address: "Iseyin, Oyo, Nigeria",
    gender: 'male',
    email: 'olakams@gmail.com',
    dob: '1956-11-25',
    accountNumber: 5623894782,
    balance: 1000890.90,
    imageUrl: '../../../src/img/olakams.jpg',


    transactions: [
      {
        id: 1,
        date: '09 Dec, 2019',
        beneficiary: 'Ayo Tola',
        bank: 'GTB',
        accountNumber: "56738929930",
        amount: 60000,
        status: 'Successful',
      },
      {
        id: 2,
        date: '23 Apr, 2018',
        beneficiary: 'Feyi Kemi',
        bank: 'First Bank',
        accountNumber: "12738929967",
        amount: 13000,
        status: 'Successful',
      },
      {
        id: 3,
        date: '12 Feb, 2019',
        beneficiary: 'Temi Dayo',
        bank: 'U.B.A',
        accountNumber: "04738929997",
        amount: 8000,
        status: 'Failed',
      },
      {
        id: 4,
        date: '05 Jun, 2019',
        beneficiary: 'Ismail Tutu',
        bank: 'Zenith',
        accountNumber: "89738567497",
        amount: 15000,
        status: 'Failed',
      },
      
    ]
  },
  
}

export const STAFF_DATA = [
  {
    id: 1,
    role: 'staff',
    // fname: 'Ridwan',
    // lname: 'Balogun',
    // phone: "08078197526",
    // address: "Lagos, Nigeria",
    // gender: 'male',
    // email: 'balogunridwan@gmail.com',
    // dob: '1989-04-21',
    // accountNumber: 3042901179,
    // balance: 34030.90,
    // imageUrl: '../../../src/img/ridwan.jpg',


    transactions: [
      {
        id: 1,
        date: '16 Mar, 2019',
        beneficiary: 'Ibrahim Mukaila',
        bank: 'GTB',
        accountNumber: "56738929930",
        amount: 60000,
        status: 'Successful',
      },
      {
        id: 2,
        date: '13 Apr, 2019',
        beneficiary: 'Barakat Obatade',
        bank: 'First Bank',
        accountNumber: "12738929967",
        amount: 13000,
        status: 'Successful',
      },
      {
        id: 3,
        date: '25 Jan, 2019',
        beneficiary: 'Zaynab Opayomi',
        bank: 'U.B.A',
        accountNumber: "04738929997",
        amount: 8000,
        status: 'Failed',
      },
      {
        id: 4,
        date: '05 Jul, 2019',
        beneficiary: 'Hikmah Raji',
        bank: 'Zenith',
        accountNumber: "89738567497",
        amount: 15000,
        status: 'Failed',
      },
      
    ]
  },
  {
    id: 2,
    role: 'customer',
    fname: 'Kamar',
    lname: 'Olayanju',
    phone: "07063818194",
    address: "Iseyin, Oyo, Nigeria",
    gender: 'male',
    email: 'olakams@gmail.com',
    dob: '1956-11-25',
    accountNumber: 5623894782,
    balance: 1000890.90,
    imageUrl: '../../../src/img/olakams.jpg',


    transactions: [
      {
        id: 1,
        date: '09 Dec, 2019',
        beneficiary: 'Ayo Tola',
        bank: 'GTB',
        accountNumber: "56738929930",
        amount: 60000,
        status: 'Successful',
      },
      {
        id: 2,
        date: '23 Apr, 2018',
        beneficiary: 'Feyi Kemi',
        bank: 'First Bank',
        accountNumber: "12738929967",
        amount: 13000,
        status: 'Successful',
      },
      {
        id: 3,
        date: '12 Feb, 2019',
        beneficiary: 'Temi Dayo',
        bank: 'U.B.A',
        accountNumber: "04738929997",
        amount: 8000,
        status: 'Failed',
      },
      {
        id: 4,
        date: '05 Jun, 2019',
        beneficiary: 'Ismail Tutu',
        bank: 'Zenith',
        accountNumber: "89738567497",
        amount: 15000,
        status: 'Failed',
      },
      
    ]
  },
  
];


