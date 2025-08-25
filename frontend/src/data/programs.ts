export interface ProgramStat {
  number: string;
  label: string;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  stats: ProgramStat[];
  isFutureInitiative?: boolean;
}

export const programs: Program[] = [
  {
    id: 'cndc',
    title: 'Community Nutrition Development Centre',
    category: 'Nutrition Program',
    description: 'Providing nutritious meals and food support to the Kayamandi community to combat food insecurity and promote health.',
    image: '/images/programs/feeding-scheme.jpg',
    features: [
      'Daily nutritious meals for children and vulnerable community members',
      'Food parcels for families in need',
      'Nutrition education workshops',
      'Community food garden initiatives',
      'Five days a week service'
    ],
    stats: [
      { number: '250+', label: 'Meals Daily' },
      { number: '300+', label: 'People Served Weekly' },
      { number: '15+', label: 'Years Running' }
    ]
  },
  {
    id: 'referral-system',
    title: 'Referral Network',
    category: 'Support Services',
    description: 'Connecting community members with essential services through our network of partner organizations.',
    image: '/images/programs/referral-network.jpg',
    features: [
      'Access to healthcare services',
      'Legal aid and counseling referrals',
      'Housing and shelter assistance',
      'Educational support programs',
      'Employment services'
    ],
    stats: [
      { number: '50+', label: 'Partner Organizations' },
      { number: '1000+', label: 'Annual Referrals' },
      { number: '24/7', label: 'Support Available' }
    ]
  },
  {
    id: 'trauma-support',
    title: 'Trauma Support Center',
    category: 'Crisis Intervention',
    description: 'Safe and supportive environment for victims of abuse and violence, offering immediate assistance and care.',
    image: '/images/programs/trauma-support.jpg',
    features: [
      'Child and victim-friendly space',
      'Crisis counseling',
      'Medical and legal support',
      'Safety planning',
      'Confidential services'
    ],
    stats: [
      { number: '100%', label: 'Confidential' },
      { number: '24/7', label: 'Emergency Access' },
      { number: '50+', label: 'Cases Monthly' }
    ]
  },
  {
    id: 'education-workshops',
    title: 'Education & Awareness',
    category: 'Community Workshops',
    description: 'Empowering the community through education on critical social issues and rights awareness.',
    image: '/images/programs/workshops.jpg',
    features: [
      'Domestic violence prevention',
      'Child protection programs',
      'Rights awareness sessions',
      'Health and wellness education',
      'Community safety workshops'
    ],
    stats: [
      { number: '12+', label: 'Workshops Monthly' },
      { number: '500+', label: 'Participants Yearly' },
      { number: '10+', label: 'Topics Covered' }
    ]
  },
  {
    id: 'community-center',
    title: 'Kayamandi Community Center',
    category: 'Future Initiative',
    description: 'A dedicated space for community development programs, skills training, and social services.',
    image: '/images/programs/community-center.jpg',
    features: [
      'Multi-purpose community space',
      'Skills development center',
      'Youth programs',
      'Community meetings and events',
      'Resource library'
    ],
    stats: [
      { number: 'Coming', label: 'Soon' },
      { number: '1000+', label: 'Expected Beneficiaries' },
      { number: '10+', label: 'Programs Planned' }
    ],
    isFutureInitiative: true
  },
  {
    id: 'skills-development',
    title: 'Empowerment Through Skills',
    category: 'Future Initiative',
    description: 'Vocational training and skills development programs for sustainable livelihoods.',
    image: '/images/programs/skills-training.jpg',
    features: [
      'Vocational training programs',
      'Entrepreneurship development',
      'Job placement support',
      'Business mentorship',
      'Micro-finance guidance'
    ],
    stats: [
      { number: '5+', label: 'Vocational Tracks' },
      { number: '200+', label: 'Annual Graduates' },
      { number: '75%', label: 'Employment Rate' }
    ],
    isFutureInitiative: true
  }
];
