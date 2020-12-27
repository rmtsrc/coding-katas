const pageContent = (page) => `
  Page ${page} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel ante vulputate
  lorem viverra pulvinar a pretium turpis. Nulla sit amet sem et libero dignissim imperdiet. Donec vel
  consequat nulla, quis dapibus neque. Vestibulum pulvinar elit viverra nunc varius lobortis. Duis id
  tortor viverra, aliquet risus eget, elementum nunc. Class aptent taciti sociosqu ad litora torquent
  per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia
  nostra, per inceptos himenaeos. Suspendisse nulla enim, placerat non nisi eget, porttitor vulputate
  dui. In quis bibendum ligula. Donec ac elementum elit.
`;

const pages = () => [...Array(4)].map((a, idx) => `Tab ${idx + 1}`);

const fetchData = () => new Promise((resolve) => setTimeout(resolve, 500));

const fetchTabs = () => fetchData().then(pages);

export const fetchPage = (page) => fetchData().then(() => pageContent(page));
export const fetchTabsWithFirstPage = async () => Promise.all([fetchTabs(), fetchPage(1)]);
