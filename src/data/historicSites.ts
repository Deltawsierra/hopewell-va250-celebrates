
export interface HistoricSite {
  id: number;
  name: string;
  description: string;
  image: string;
  hours: string;
  address: string;
  details: string;
  website?: string;
}

export const historicSites: HistoricSite[] = [
  {
    id: 1,
    name: 'Appomattox Manor',
    description: 'Grant\'s Civil War headquarters, now part of Petersburg National Battlefield. Where President Lincoln visited twice during the siege and Union hospitals treated up to 10,000 patients.',
    image: '/lovable-uploads/3d6ba77e-c74b-47fe-919e-0a1a2a29d809.png',
    hours: 'Daily 9 AM - 5 PM',
    address: 'Cedar Lane, Hopewell, VA',
    details: 'General Grant set up headquarters here in 1864, making City Point one of the world\'s busiest ports during the Petersburg Siege.',
    website: 'https://www.dhr.virginia.gov/historic-registers/116-0001/'
  },
  {
    id: 2,
    name: 'Weston Manor',
    description: 'Built in 1789 by William and Christian Eppes Gilliam, this Georgian plantation house showcases the rise of ordinary people through extraordinary times, with original interiors and restored dependencies.',
    image: '/lovable-uploads/4ef163f0-80dd-406a-9417-18f599ad2fb4.png',
    hours: 'Tours: Weekdays 10 AM - 3 PM',
    address: 'Weston Lane, Hopewell, VA',
    details: 'Listed on the National Register of Historic Places. Features distinctive original moldings, wainscoting, and reconstructed summer kitchen and laundry from 2008 archaeological research.',
    website: 'https://www.historichopewell.org/'
  },
  {
    id: 3,
    name: 'Beacon Theatre',
    description: 'Art Deco and Colonial Revival gem opened in 1928, designed by Fred Bishop (architect of Richmond\'s Byrd Theatre). Restored and reopened in 2014 as Hopewell\'s signature venue.',
    image: '/lovable-uploads/344b973c-e994-4ca6-9ad0-c656d473c838.png',
    hours: 'Event Schedule Varies',
    address: 'Main Street, Hopewell, VA',
    details: 'Served as vaudeville stage and movie theater before major city restoration. Grand reopening featured sold-out Leon Russell concert. Listed on National Register of Historic Places.',
    website: 'https://beacontheatreva.com/'
  },
  {
    id: 4,
    name: 'Historic Downtown',
    description: 'Charming brick buildings housing local shops, restaurants, and community spaces reflecting Hopewell\'s industrial heritage and modern revitalization efforts.',
    image: '/lovable-uploads/c34755e5-e202-4985-bbcf-9757b113aba4.png',
    hours: 'Always Open',
    address: 'Downtown Hopewell, VA',
    details: 'Part of the City Point Historic District, showcasing architectural evolution from colonial tobacco warehouses to 20th-century industrial buildings.',
    website: 'https://www.hopewelldowntown.com/'
  },
  {
    id: 5,
    name: 'City Point Waterfront',
    description: 'Scenic boardwalk and park at the historic confluence of the James and Appomattox rivers, where City Point was strategically founded in 1613.',
    image: '/lovable-uploads/15538ddf-a515-43bd-b538-cf35edf67f73.png',
    hours: 'Dawn to Dusk',
    address: 'City Point, Hopewell, VA',
    details: 'The strategic location that made City Point a center of commerce, conflict, and community for over 400 years. Features walking trails and river views.',
    website: 'https://hopewellva.gov/Facilities/Facility/Details/City-Park-3'
  },
  {
    id: 6,
    name: 'Hopewell Community Center',
    description: '38,000-square-foot recreation center with full gym, 25-meter heated indoor pool, racquetball courts, and meeting rooms serving all ages.',
    image: '/lovable-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png',
    hours: 'Varies by Program',
    address: '300 N Main St, Hopewell, VA',
    details: 'Modern community hub offering fitness, recreation, and event hosting for residents and visitors.',
    website: 'https://www.hopewellva.gov/162/Hopewell-Community-Center'
  },
  {
    id: 7,
    name: 'Appomattox Regional Library',
    description: 'Founded in 1930, ARLS provides lifelong learning and community programming. The flagship Maude Langhorne Nelson Library honors Hopewell\'s first librarian.',
    image: '/lovable-uploads/e2619251-b400-40e3-a722-c27155d0b655.png',
    hours: 'Mon-Sat Various Hours',
    address: 'Hopewell, VA',
    details: 'Serves Hopewell, Prince George, and Dinwiddie counties through eight locations, fostering community connections and knowledge access.',
    website: 'https://www.arls.org/'
  },
  {
    id: 8,
    name: 'City Point National Cemetery',
    description: 'Historic cemetery reflecting Hopewell\'s role in American military history, particularly during the Civil War period.',
    image: '/lovable-uploads/bb6a6926-5364-41f6-a804-e6b9690c5dab.png',
    hours: 'Dawn to Dusk',
    address: 'City Point, Hopewell, VA',
    details: 'Part of the City Point Historic District, preserving the memory of those who served during America\'s defining conflicts.',
    website: 'https://www.dhr.virginia.gov/historic-registers/116-0008/'
  }
];
