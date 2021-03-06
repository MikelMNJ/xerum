export const accordionCode = `const sections = [
  {
    title: "First section",
    content: "Section 1 content",
  },
  {
    title: "Second section",
    content: "Section 2 content",
  },
  {
    title: "Third section",
    content: "Section 3 content",
  },
];

<Accordion
  sections={sections}
  openDefault={sections[0]}
/>`;

export const cardCode = `<Card
  image="your-thumb-url.[ext]"
  title="Card Title..."
  text={yourPreviewText}
  limit={96}
  footer="Image credit: iStock Photo"
  url="https://google.com"
  vertical
/>`;

export const confirmCode = `const [ visible, setVisible ] = useState(false);

(visible && (
  <Confirm
    title="Confirm Title..."
    message="You have asked the user to respond."
    onConfirm={yourAPICall}
    onCancel={() => setVisible(!visible)}
    bgClose
  />
)}`;

export const modalCode = `const [ visible, setVisible ] = useState(false);

{visible && (
  <Modal
    title="Modal title..."
    onClose={() => setVisible(!visible)}
    bgClose
  >
    <p>Modal content...</p>
  </Modal>
)}`;

export const slideOverCode = `const [ visible, setVisible ] = useState(false);

{visible && (
  <SlideOver
    title="Slide-Over title..."
    onClose={() => setVisible(!visible)}
  >
    <p>Slide-Over content...</p>
  </SlideOver>
)}`;

export const tableCode = `const [ content, setContent ] = useState({
  headers: [ "Bird Name", "Flight Speed (MPH)" ],
  rows: [
    {
      td1: "Sparrow",
      td2: null,
      onClick: () => rowHandler("Sparrow"),
      label: "Small",
    },
    {
      td1: "Golden Eagle",
      td2: 200,
      onClick: () => rowHandler("Eagle"),
      label: "Large",
    },
    {
      td1: "Raven",
      td2: 50,
      onClick: () => rowHandler("Raven"),
      label: "Medium",
    },
  ],
});

const flightSpeed = content.headers[1];
const receivedArr = sortedArr => {
  // Normalize or send to state directly.
  setContent({ ...content, rows: sortedArr })
};

<Table
  content={content}
  defaultSort={flightSpeed}
  sortable={receivedArr}
  draggable={receivedArr}
/>`;

export const tabsCode = `const content = [
  { name: "Tab 1", content: "Content 1" },
  { name: "Tab 2", content: "Content 2" },
  { name: "Tab 3", content: "Content 3" },
];

<Tabs content={content} />`;