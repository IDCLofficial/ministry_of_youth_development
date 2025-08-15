import { contentfulService } from "../../../lib/contentful";

// export const projects:project[] = [
  // {
  //   title: "Imo Resilience Empowerment Program (IREP)",
  //   image: "/images/irep.jpeg",
  //   ongoing: true,
  //   location: "Ohaji/Egbema, Okigwe, Owerri LGAs",
  //   description: "Multi-sector support for 500+ vulnerable households—stipends, kits, and psychosocial aid.",
  //   cta: "View Full Details",
  //   partners: [
  //     {
  //       partner:"World Bank",
  //       logo: "wb.png"
  //     }, 
  //     {
  //       partner:"Federal Ministry of Humanitarian Affairs",
  //       logo:"humanitarianAffairs.jpg"
  //     }
  //   ]

  // },
//   {
//     title: "Shelter for All Emergency Housing Scheme",
//     image: "/images/rehab (2).png",
//     ongoing: false,
//     location: "Aboh Mbaise, Orlu, Mbaitoli",
//     description: "150 shelters and 3 kitchens built for disaster-hit families with health and GBV support.",
//     cta: "Download Report (PDF)"
//   },
//   {
//     title: "Imo Youth Empowerment for Resilience (IYER)",
//     image: "/images/youth_empowerment.png",
//     ongoing: true,
//     location: "Owerri Zone",
//     description: "Vocational training for 300 youths in ICT, tailoring, solar, catering, plus toolkits and stipends.",
//     cta: "Join the Program",
//     partners: [
//       {
//         partner:"UNICEF",
//         logo: "unicef.png"
//       }, 
//       {
//         partner:"NSIP",
//         logo:"nsip.jpg"
//       }
//     ]
//   },
//   {
//     title: "Rapid Response Food Security Relief",
//     image: "/images/rapid_relief.jpg",
//     ongoing: false,
//     location: "Oguta, Isiala Mbano",
//     description: "Food, water, hygiene kits, and medicine delivered to 15,000 flood victims within 2 weeks.",
//     cta: "Download Relief Report (PDF)"
//   }
// ];

export async function getProject(){
  const projects = await contentfulService.getProjectsByMinistryId(process.env.NEXT_PUBLIC_CONTENTFUL_MINISTRY_ID!);
  return projects
}