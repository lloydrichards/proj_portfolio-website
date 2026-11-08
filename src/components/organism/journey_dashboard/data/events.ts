import type { JourneyAnnotation } from "../model/types";

export type PersonalEvent = JourneyAnnotation & {
  id: string;
  date: string;
  title: string;
  text: string;
  location?: string;
  dateNote?: string;
};

// Dates retain the precision of Lloyd's account; notes preserve unresolved evidence.
export const personalEvents: PersonalEvent[] = [
  {
    id: "leaving-masters",
    date: "2013-04",
    kind: "pivot",
    contextLane: "Education",
    title: "Studying sustainable building in Central America",
    text: "I paused my master's to study local architecture, permaculture and bamboo construction in Central America. I planned to bring what I learned back to the programme.",
  },
  {
    id: "regenerative-landscaping",
    date: "2014-09",
    kind: "pivot",
    contextLane: "Work",
    title: "Choosing regenerative landscaping",
    text: "Disillusioned with architecture, I decided to move to Europe and pursue regenerative landscaping through WWOOFing and practical learning.",
  },
  {
    id: "building-landscape-business",
    afterRecordId: "cv-14",
    date: "2016-09",
    kind: "pivot",
    contextLane: "Work",
    location: "United Kingdom",
    title: "Building a regenerative landscaping business",
    text: "I moved to the UK to build a landscaping business. I applied regenerative practices to residential gardens in the UK and farming projects in Spain and Portugal.",
    dateNote:
      "I recall moving to the UK in September 2016, but my residence history places me in Bristol from June 2015. It is unclear whether September 2016 marks another move or the start of the business.",
  },
  {
    id: "rethinking-after-brexit",
    date: "2018-10",
    kind: "pivot",
    contextLane: "Work",
    title: "Rethinking the business after Brexit",
    text: "Brexit led me to rethink a business built around EU farming projects. I began looking for landscape architecture opportunities in Europe.",
  },
  {
    id: "learning-code",
    phaseLeadFor: "cv-10",
    date: "2019-01",
    kind: "learning",
    contextLane: "Work",
    location: "Berlin, Germany",
    title: "Learning German and code in Berlin",
    text: "I moved to Berlin to learn German and code while working in nursery sales. My goal was to pursue data visualization in Switzerland.",
    dateNote:
      "I recall moving to Berlin in January 2019. My residence history starts in December 2018.",
  },
  {
    id: "switzerland-internship",
    date: "2019-11",
    kind: "pivot",
    contextLane: "Work",
    location: "Switzerland",
    title: "Moving into data visualization",
    text: "I moved to Switzerland for a data visualization internship.",
    dateNote:
      "I moved to Switzerland in November 2019. My CV records the start of the Interactive Things internship as January 2020.",
  },
  {
    id: "design-to-development",
    date: "2020-02",
    kind: "learning",
    contextLane: "Work",
    title: "Moving from design into development",
    text: "As COVID-19 emerged, I found a design role at a startup and gradually took on more development work.",
    dateNote:
      "I recall this transition beginning in February 2020. My CV lists the Interactive Things internship from January to July 2020 and the Vatorex internship from October 2020. It is unclear whether February marks the job search or the start of the startup role.",
  },
];
