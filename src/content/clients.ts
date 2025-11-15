export interface Client {
  name: string;
  category: 'commercial' | 'hospitality' | 'education' | 'community';
}

export const clients: Client[] = [
  // Commercial & Hospitality
  { name: 'Esquires Coffee', category: 'hospitality' },
  { name: 'Sol Services', category: 'commercial' },
  { name: 'Callaway Golf Club', category: 'hospitality' },
  { name: 'Häagen-Dazs', category: 'hospitality' },
  { name: 'The Athenaeum Club', category: 'hospitality' },
  { name: 'The Carlton Club', category: 'hospitality' },

  // Education & Community
  { name: 'Homewood School', category: 'education' },
  { name: 'St Michael\'s School', category: 'education' },
  { name: 'Abbeyfield', category: 'community' },
  { name: 'Abington Vale Primary School', category: 'education' },
  { name: 'Blackthorn Primary School', category: 'education' },
  { name: 'Boothville', category: 'education' },
  { name: 'Castle Academy', category: 'education' },
  { name: 'Delapre Primary School', category: 'education' },
  { name: 'Duston Eldean Primary School', category: 'education' },
  { name: 'Eastfield Academy', category: 'education' },
  { name: 'Greenfields', category: 'education' },
  { name: 'The Arbours', category: 'community' },
  { name: 'Whitehills', category: 'education' },
];
