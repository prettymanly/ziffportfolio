import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const householdOsEntries = [
  {
    variant: 'Project Cover',
    variant_index: 1,
    project_number: 1,
    service_type: 'service-design',
    overline: '01 | CLIENT: Confidential',
    title: 'Household OS: Designing a Shared Layer for Family Life',
    copy:
      'In many Southeast Asian households, especially in the Philippines, the home is not just a space, but a system: a network of care, financial interdependence, and decision-making spread across parents, siblings, overseas workers, and elders. Amid this complexity, families already manage using mental checklists, handwritten logs, Viber threads, and spreadsheets.\n\nSo when a major conglomerate approached us to explore a "super app," we asked a different question:\n\nWhat if we didn\'t just digitize transactions but supported the actual work of running a household?',
    cover_image_url: 'https://your-storage.com/household-cover.png',
  },
  {
    variant: 'Design Question',
    variant_index: 2,
    project_number: 1,
    service_type: 'service-design',
    hmw_line:
      'How might a utility app redistribute invisible labour while strengthening financial resilience at home?',
  },
  {
    variant: '3-5 Content Col',
    variant_index: 3,
    project_number: 1,
    service_type: 'service-design',
    copy:
      'Through interviews, co-creation sessions, and ethnographic research, we surfaced the quiet complexity of everyday life: multiple household members taking on roles like contributor, payer, planner, or reminder, often across generations and time zones.\n\nWe reframed the challenge: How might we design for family coordination, not just individual utility?\n\nThe result was the early blueprint of a Household OS, not a dashboard of bills, but a support layer that acknowledged the labour, trust, and emotion embedded in shared living.',
    project_image_url: 'https://your-storage.com/household-coordination.png',
  },
  {
    variant: '3-5 Image Content',
    variant_index: 4,
    project_number: 1,
    service_type: 'service-design',
    copy:
      'We co-developed a suite of prototypes aimed at making invisible work visible and shared:\n\n- Household Wallet: Shared visibility into bills, contributions, and timelines\n- Savings Goals & Upgrade Bundles: Turning aspirations into concrete plans\n- Spending Guard: Nudges and alternatives to stay within budget\n- Smart Automation & API integrations: Reducing manual routines\n- Microloans: Offering relief when the unexpected strikes\n- Loyalty Points: Pooled and purposeful, not just individual rewards\n- Household Insights: Dashboards surfacing friction points and rhythm patterns',
    project_image_url: 'https://your-storage.com/household-features.png',
  },
  {
    variant: '1-1 Content Column',
    variant_index: 5,
    project_number: 1,
    service_type: 'service-design',
    copy:
      'We uncovered a range of household archetypes, from centralized matriarch-led systems to distributed networks coordinated by siblings or intermediaries. We designed logic for real-life dynamics: overseas earners sending money home, elders passing on responsibilities, or blended families navigating new norms.\n\nThe design had to do more than work; it had to respect power dynamics, invite participation, and leave room for dignity.\n\nThis project reframed digital transformation from convenience to care infrastructure — a quiet revolution in how platforms can show up for real lives.',
  },
];

(async () => {
  const { data, error } = await supabase.from('projects').insert(householdOsEntries);

  if (error) {
    console.error('Error inserting Household OS entries:', error);
    process.exit(1);
  }

  console.log(`Inserted ${data.length} Household OS project entries.`);
  process.exit(0);
})(); 