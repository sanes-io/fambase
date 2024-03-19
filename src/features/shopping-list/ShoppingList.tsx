import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import AllItems from './components/AllItems';
import AllListedItems from './components/AllListedItems';

const ShoppingList = () => {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>Shopping List</Tab>
        <Tab>All Items</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <AllListedItems />
        </TabPanel>
        <TabPanel>
          <AllItems />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ShoppingList;
