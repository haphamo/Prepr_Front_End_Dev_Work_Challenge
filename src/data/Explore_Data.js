import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import c7 from '../assets/c7.png'
import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'

// add challenge category
export const data = {
  1:  {
        id: 1,
        type: 'challenge',
        status: 'open',
        privacy: 'public',
        category: 'technology',
        src: c1,
        title: 'COVID-19 Challenge - Low-cost monitoring system for COVID-19 patients',
        summary: 'NRC is seeking a low cost system (unit cost <$25) that can continuously measure temperature, peripheral capillary oxygen saturation (SpO2), blood pressure (BP), pulse and respiration rates, and transmit this information wirelessly to a base station for COVID-19 patient monitoring in locales including ERs, general wards, communities and homes.',
        tags: ['tagOne', 'tagTwo'],
        startDate: 'April 7th, 2020',
        endDate: 'April 20th, 2020'
      },
  2:  {
        id: 2,
        type: 'challenge',
        status: 'open',
        privacy: 'private',
        src: c2,
        title: 'COVID-19 Challenge - Point of Care & Home Diagnostic Kit for COVID-19',
        summary: 'The Public Health Agency of Canada (PHAC) and National Research Council (NRC) are seeking a solution that will diagnose individuals affected by COVID-19 within 3 days of the start of their symptoms using a sample, other than a nasopharyngeal swab, with a rapid single-use home testing kit analogous to a home pregnancy test.',
        tags: ['tagOne', 'tagTwo'],
        startDate: 'April 7th, 2020',
        endDate: 'April 20th, 2020'
      },
  3:  {
        id: 3,
        type: 'challenge',
        status: 'open',
        privacy: 'public',
        src: c3,
        title: 'Recycled Plastic Ceiling Tiles',
        summary: 'Global Affairs Canada is seeking a solution that will contribute to the circular economy by recycling plastic into ceiling tiles and that meet a high safety standard with no chemical emissions. The existing ceiling tiles are drop ceiling mineral acoustical tiles. We need something comparable in acoustical, insulating and fire retardant performance, but made with 100% recycled plastic.',
        tags: ['tagOne', 'tagTwo'],
        startDate: 'April 7th, 2020',
        endDate: 'April 20th, 2020'
      },
  4:  {
        id: 4,
        type: 'challenge',
        status: 'open',
        privacy: 'public',
        src: c4,
        title: 'Diverting End of Life Vehicle Plastics from Landfills',
        summary: 'The National Research Council of Canada (NRC) and Environment and Climate Change Canada (ECCC) are seeking environmentally acceptable and cost-effective technologies that will enable the diversion of End of Life Vehicles (ELVs) plastics from landfills and their conversion into valuable materials and/or molecules.',
        tags: ['tagOne', 'tagTwo'],
        startDate: 'April 7th, 2020',
        endDate: 'April 20th, 2020'
      },
  5:  {
        id: 5,
        type: 'challenge',
        status: 'open',
        privacy: 'public',
        src: c5,
        title: 'Sensing Technology for Monitoring Microplastics in Marine Environments',
        summary: 'The National Research Council of Canada (NRC) is seeking an innovative in situ (on site) sensing technology for identification and quantification of microplastics in water, which will enable the development of new techniques for monitoring microplastics in Canadian waters.',
        tags: ['tagOne', 'tagTwo'],
        startDate: 'April 7th, 2020',
        endDate: 'April 20th, 2020'
      },
  6:  {
        id: 6,
        type: 'challenge',
        status: 'open',
        privacy: 'public',
        src: c6,
        title: 'E-waste',
        summary: 'Shared Services Canada (SSC) and Environment and Climate Change Canada (ECCC) are seeking a solution that will enable recycling of e-waste plastics and metals in Canada while respecting domestic and international requirements and obligations.',
        tags: ['tagOne', 'tagTwo'],
        startDate: 'March 5th, 2020',
        endDate: 'April 14th, 2020'
      },
  7:  {
        id: 7,
        type: 'lab',
        status: 'open',
        privacy: 'public',
        src: l1,
        title: 'CareerMash Lab',
        summary: 'Shared SCareerMash comes from the Information Technology Association of Canada (ITAC) Talent Division – a not-for-profit whose over 300 members include major employers in media, finance, information technology, and telecommunications. Our partners include school boards, universities, colleges, industry associations, and the governments of Canada, Ontario and Quebec.ervices Canada (SSC) and Environment and Climate Change Canada (ECCC) are seeking a solution that will enable recycling of e-waste plastics and metals in Canada while respecting domestic and international requirements and obligations.',
        tags: ['tagOne', 'tagTwo'],
        createdOn: '01/04/2020'
      },
  8:  {
        id: 8,
        type: 'lab',
        status: 'open',
        privacy: 'public',
        src: l2,
        title: 'Cybersecurity Talent Alliance Lab',
        summary: 'Cybersecurity is increasingly driving innovation and economic activity in Canada. It already contributes $1.7 billion to Canada’s GDP and consists of over 11,000 well-paying jobs. With the global cybersecurity industry forecasted to grow by 66% by 2021, thousands of additional jobs could be created for Canadians in the years ahead. Governments, academia, and members of the private sector can work together to create new opportunities, drive investment, and foster leading-edge research and development',
        tags: ['tagOne', 'tagTwo'],
        createdOn: '01/04/2020'
      },
  9:  {
        id: 9,
        type: 'lab',
        status: 'open',
        privacy: 'public',
        src: l3,
        title: 'COVID-19 Education System Lab',
        summary: 'This is the official Lab for the COVID-19 Education System Project Area.',
        tags: ['tagOne', 'tagTwo'],
        createdOn: '01/04/2020'
      },
  10: {
        id: 10,
        type: 'challenge',
        status: 'closed',
        privacy: 'private',
        src: c7,
        title: 'Healthcare & Artificial Intelligence',
        summary: "The healthcare industry is quickly being affected by new technology and new processes. New developments in various fields are changing the way the healthcare industry operates. These developments also present challenges going forward. Work with the futur{e}challenge to help solve these challenges and make a difference in the healthcare industry.",
        startDate: 'Oct 11th 2019',
        endDate: 'Feb 20th 2020',
        category: 'incubator',
        challengeTags: []
      }
}