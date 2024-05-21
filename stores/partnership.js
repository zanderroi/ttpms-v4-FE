// stores/partnerships.js
import { defineStore } from 'pinia';

export const usePartnershipStore = defineStore('partnerships', {
  state: () => ({
    partnerships: [
      {
        id: 1,
        province: 'Quezon City',
        operatingUnit: 'District Office',
        nameOfPartner: 'McDonalds Philippines',
        partnerDetails: '...', 
        partnershipDetails: '...',
        legalDocument: '...',
        dateSigned: '2024-04-23',
        dateOfExpiry: 'No Expiry',
        status: 'Active' 
      },
      {
        id: 2,
        province: 'Caloocan',
        operatingUnit: 'District Office',
        nameOfPartner: 'Jollibee Philippines',
        partnerDetails: '...', 
        partnershipDetails: '...',
        legalDocument: '...',
        dateSigned: '2024-04-23',
        dateOfExpiry: 'No Expiry',
        status: 'Active'
      },
      {
        id: 3,
        province: 'CAMANAVA',
        operatingUnit: 'District Office',
        nameOfPartner: 'Chowking Philippines',
        partnerDetails: '...', 
        partnershipDetails: '...',
        legalDocument: '...',
        dateSigned: '2024-04-23',
        dateOfExpiry: 'No Expiry',
        status: 'Active'
      },
      {
        id: 4,
        province: 'PASMAK',
        operatingUnit: 'District Office',
        nameOfPartner: 'KFC Philippines',
        partnerDetails: '...', 
        partnershipDetails: '...',
        legalDocument: '...',
        dateSigned: '2024-04-23',
        dateOfExpiry: 'No Expiry',
        status: 'Active'
      },
      // Add more dummy partnership objects as needed
    ],
    isLoading: false,
    error: null,
  }),
  
  // ... (rest of your actions)
});
