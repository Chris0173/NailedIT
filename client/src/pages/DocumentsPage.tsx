import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import "../CSS/DocumentsPage.css";
import { Box, Divider } from "@chakra-ui/react";

const DocumentsPage = () => {
  return (
    <div className="documentsPage">
      <h1 className="documentsTitle">Documents:</h1>
      <div className="documentsContainer">
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="accordionItemName"
              >
                Contracts
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} className="accordionContent">
              This will display the results for Contracts
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="accordionItemName"
              >
                Blueprints
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} className="accordionContent">
              This will display the results for Blueprints
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="accordionItemName"
              >
                Permits & Licences
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} className="accordionContent">
              This will display the results for Permits & Licences
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="accordionItemName"
              >
                Safety Documentation
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} className="accordionContent">
              This will display the results for Safety Documentation
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="accordionItemName"
              >
                Photos & Media
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} className="accordionContent">
              This will display the results for Photos & Media
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Divider />
      </div>
    </div>
  );
};

export default DocumentsPage;
