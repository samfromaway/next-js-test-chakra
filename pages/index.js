import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1rem',
        margin: 'auto',
      }}
    >
      <Accordion>
        <AccordionItem>
          <AccordionButton>
            Section 1 title
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>This is the text in section 1.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            Section 2 title
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>This is the text in section 2.</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <div style={{ padding: 40 }} />
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
