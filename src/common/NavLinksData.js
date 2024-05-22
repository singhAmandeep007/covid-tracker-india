import { v4 as uuidv4 } from "uuid";
const NAV_LINKS_DATA = [
  {
    id: uuidv4(),
    to: "overview",
    title: "Overview",
  },
  {
    id: uuidv4(),
    to: "about",
    title: "About",
  },
  {
    id: uuidv4(),
    to: "symptoms",
    title: "Symptoms",
  },
  {
    id: uuidv4(),
    to: "guidelines",
    title: "Guidelines",
  },
  {
    id: uuidv4(),
    to: "vaccination",
    title: "Vaccination",
  },
  {
    id: uuidv4(),
    to: "faq",
    title: "FAQs",
  },
];

export default NAV_LINKS_DATA;
