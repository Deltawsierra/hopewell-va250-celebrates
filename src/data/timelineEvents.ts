
import { Calendar, Star, Home, Flag, Factory, Ship } from 'lucide-react';

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  trivia: string;
  icon: any;
  color: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 1613,
    title: 'City Point Founded',
    description: 'Sir Thomas Dale establishes City Point as a strategic settlement at the confluence of the James and Appomattox rivers.',
    trivia: 'Did you know? Early English settlement called "Bermuda City" housed up to 119 people according to John Rolfe!',
    icon: Home,
    color: 'bg-[#002868]'
  },
  {
    year: 1700,
    title: 'Tobacco Hub',
    description: 'City Point becomes a major tobacco export center with warehouses serving colonial Virginia commerce.',
    trivia: 'Did you know? City Point\'s tobacco warehouses were among the most important in colonial Virginia!',
    icon: Ship,
    color: 'bg-[#BF0A30]'
  },
  {
    year: 1781,
    title: 'Revolutionary War',
    description: 'Benedict Arnold\'s British troops pass through City Point during the Revolutionary War campaign.',
    trivia: 'Did you know? City Point played a strategic role in the Revolutionary War as British and American forces moved through the area!',
    icon: Flag,
    color: 'bg-[#002868]'
  },
  {
    year: 1826,
    title: 'Town Incorporation',
    description: 'The Town of City Point is officially incorporated, marking its formal establishment as a municipal entity.',
    trivia: 'Did you know? City Point was one of Virginia\'s earliest incorporated towns!',
    icon: Home,
    color: 'bg-[#BF0A30]'
  },
  {
    year: 1840,
    title: 'Railroad Arrives',
    description: 'City Point Railroad Company operates one of the earliest U.S. rail lines between City Point and Petersburg.',
    trivia: 'Did you know? The City Point Railroad was a pioneering transportation link in early America!',
    icon: Star,
    color: 'bg-[#002868]'
  },
  {
    year: 1864,
    title: 'Grant\'s Headquarters',
    description: 'General Grant establishes headquarters at Appomattox Manor. City Point becomes one of the world\'s busiest ports during the Petersburg Siege.',
    trivia: 'Did you know? Union hospitals at City Point could treat up to 10,000 patients, and President Lincoln visited twice during the siege!',
    icon: Flag,
    color: 'bg-[#BF0A30]'
  },
  {
    year: 1916,
    title: 'Industrial Boom',
    description: 'DuPont builds guncotton factory, triggering Hopewell\'s incorporation and explosive population growth to 40,000 residents.',
    trivia: 'Did you know? Hopewell was called the "Wonder City" due to its rapid industrial transformation!',
    icon: Factory,
    color: 'bg-[#002868]'
  },
  {
    year: 1928,
    title: 'Beacon Theatre Opens',
    description: 'The Art Deco Beacon Theatre opens as a vaudeville stage and movie theater, designed by Fred Bishop who also designed Richmond\'s Byrd Theatre.',
    trivia: 'Did you know? The Beacon Theatre was saved from collapse and reopened in 2014 with a sold-out Leon Russell concert!',
    icon: Star,
    color: 'bg-[#BF0A30]'
  },
  {
    year: 1940,
    title: 'WWII Industrial Center',
    description: 'New industries like Tubize artificial silk, ANCO/Allied Chemical manufacturing, and Camp Lee military base fuel continued growth.',
    trivia: 'Did you know? Hopewell\'s industries were crucial to America\'s World War II effort!',
    icon: Factory,
    color: 'bg-[#002868]'
  },
  {
    year: 2026,
    title: 'VA250 Celebration',
    description: 'Hopewell joins the nation in celebrating America\'s 250th anniversary with special events highlighting four centuries of history.',
    trivia: 'Did you know? VA250 will be the largest patriotic celebration in American history, and Hopewell has over 400 years of stories to share!',
    icon: Flag,
    color: 'bg-[#BF0A30]'
  }
];
