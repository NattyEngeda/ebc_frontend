// Images
import fire from '/assets/girma/images/skills/fire.jpg';
import havac from '/assets/girma/images/skills/havac.png';
import sanitary from '/assets/girma/images/skills/sanitary.jpg';


export const skillList = [
  {
    id: 1, image: sanitary, name: 'Sanitary Works', detail: [
      { id: 1, name: 'Sanitary Design', desc: 'Sanitary design is the application of design techniques that allow the timely and effective cleaning of the entire manufacturing asset' },
      { id: 2, name: 'Water Supply Installation', desc: 'Water supply is the provision of water by public utilities, commercial organisations, community endeavors or by individuals, usually via a system of pumps and pipes.' },
      { id: 3, name: 'Waste Water Pipe Installation', desc: 'Pipe for draining liquid waste or excess liquids. Plumbing. a pipe for draining away the wastes of a building other than those from water closets.' },
      { id: 4, name: 'Supervision and Consulting', desc: 'Giving Super Vision and Consulting on areas of Sanitary System' }
    ]
  },
  {
    id: 2, image: havac, name: 'HVAC System', detail: [
      { id: 1, name: 'Mechanical HVAC', desc: 'Heating and cooling systems make indoor spaces more comfortable.' },
      { id: 2, name: 'HVAC System Installation', desc: 'installing, maintenance, repairs, and service to heating, ventilation, air conditioning, and refrigeration systems that control the air quality and temperature in buildings.' }
    ]
  },
  {
    id: 3, image: fire, name: 'Fire Fighting System', detail: [
      { id: 2, name: 'Fire FIghting System Design and Installation', desc: "The design of any fire-protection system is an exact science that takes into account a building's use, occupancy, footprint, and even its other installed systems." }
    ]
  }
];