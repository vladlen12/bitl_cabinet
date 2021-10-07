import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaginationRounded from "../Pagination/Pagination";

export default function FaqAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-wrapper">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">
            What is MLM?
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>The UMI blockchain as a technology now has a large number of advantages that can be implemented in a wide variety of new directions.</p>
          <strong>
            The main advantages of the technology:
          </strong>
          <ul>
            <li>Transaction speed - (65.536 sec.).</li>
            <li>No commission - (Transaction fee = 0).</li>
            <li>Smart Contracts - (Fast SMC Creation).</li>
            <li>Ease of use - (Buying, selling and storing coins in one safe place).</li>
            <li>Decentralization - (The project is managed and regulated by the community).</li>
            <li> Innovative technology - (The combination of high transaction speed, reliability and simplicity).</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">
            Blockchain advantages UMI
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>The UMI blockchain as a technology now has a large number of advantages that can be implemented in a wide variety of new directions.</p>
          <strong>
            The main advantages of the technology:
          </strong>
          <ul>
            <li>Transaction speed - (65.536 sec.).</li>
            <li>No commission - (Transaction fee = 0).</li>
            <li>Smart Contracts - (Fast SMC Creation).</li>
            <li>Ease of use - (Buying, selling and storing coins in one safe place).</li>
            <li>Decentralization - (The project is managed and regulated by the community).</li>
            <li> Innovative technology - (The combination of high transaction speed, reliability and simplicity).</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">
            Who is a sponsor?
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>The UMI blockchain as a technology now has a large number of advantages that can be implemented in a wide variety of new directions.</p>
          <strong>
            The main advantages of the technology:
          </strong>
          <ul>
            <li>Transaction speed - (65.536 sec.).</li>
            <li>No commission - (Transaction fee = 0).</li>
            <li>Smart Contracts - (Fast SMC Creation).</li>
            <li>Ease of use - (Buying, selling and storing coins in one safe place).</li>
            <li>Decentralization - (The project is managed and regulated by the community).</li>
            <li> Innovative technology - (The combination of high transaction speed, reliability and simplicity).</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">
            What is network marketing?
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>The UMI blockchain as a technology now has a large number of advantages that can be implemented in a wide variety of new directions.</p>
          <strong>
            The main advantages of the technology:
          </strong>
          <ul>
            <li>Transaction speed - (65.536 sec.).</li>
            <li>No commission - (Transaction fee = 0).</li>
            <li>Smart Contracts - (Fast SMC Creation).</li>
            <li>Ease of use - (Buying, selling and storing coins in one safe place).</li>
            <li>Decentralization - (The project is managed and regulated by the community).</li>
            <li> Innovative technology - (The combination of high transaction speed, reliability and simplicity).</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">
            How does MLM business work?
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>The UMI blockchain as a technology now has a large number of advantages that can be implemented in a wide variety of new directions.</p>
          <strong>
            The main advantages of the technology:
          </strong>
          <ul>
            <li>Transaction speed - (65.536 sec.).</li>
            <li>No commission - (Transaction fee = 0).</li>
            <li>Smart Contracts - (Fast SMC Creation).</li>
            <li>Ease of use - (Buying, selling and storing coins in one safe place).</li>
            <li>Decentralization - (The project is managed and regulated by the community).</li>
            <li> Innovative technology - (The combination of high transaction speed, reliability and simplicity).</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">
            What is network marketing and how does it work?
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>The UMI blockchain as a technology now has a large number of advantages that can be implemented in a wide variety of new directions.</p>
          <strong>
            The main advantages of the technology:
          </strong>
          <ul>
            <li>Transaction speed - (65.536 sec.).</li>
            <li>No commission - (Transaction fee = 0).</li>
            <li>Smart Contracts - (Fast SMC Creation).</li>
            <li>Ease of use - (Buying, selling and storing coins in one safe place).</li>
            <li>Decentralization - (The project is managed and regulated by the community).</li>
            <li> Innovative technology - (The combination of high transaction speed, reliability and simplicity).</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">
            How is the network business different?
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>The UMI blockchain as a technology now has a large number of advantages that can be implemented in a wide variety of new directions.</p>
          <strong>
            The main advantages of the technology:
          </strong>
          <ul>
            <li>Transaction speed - (65.536 sec.).</li>
            <li>No commission - (Transaction fee = 0).</li>
            <li>Smart Contracts - (Fast SMC Creation).</li>
            <li>Ease of use - (Buying, selling and storing coins in one safe place).</li>
            <li>Decentralization - (The project is managed and regulated by the community).</li>
            <li> Innovative technology - (The combination of high transaction speed, reliability and simplicity).</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">
            How much can you earn from marketing?
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>The UMI blockchain as a technology now has a large number of advantages that can be implemented in a wide variety of new directions.</p>
          <strong>
            The main advantages of the technology:
          </strong>
          <ul>
            <li>Transaction speed - (65.536 sec.).</li>
            <li>No commission - (Transaction fee = 0).</li>
            <li>Smart Contracts - (Fast SMC Creation).</li>
            <li>Ease of use - (Buying, selling and storing coins in one safe place).</li>
            <li>Decentralization - (The project is managed and regulated by the community).</li>
            <li> Innovative technology - (The combination of high transaction speed, reliability and simplicity).</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">
            Why Networking Business?
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>The UMI blockchain as a technology now has a large number of advantages that can be implemented in a wide variety of new directions.</p>
          <strong>
            The main advantages of the technology:
          </strong>
          <ul>
            <li>Transaction speed - (65.536 sec.).</li>
            <li>No commission - (Transaction fee = 0).</li>
            <li>Smart Contracts - (Fast SMC Creation).</li>
            <li>Ease of use - (Buying, selling and storing coins in one safe place).</li>
            <li>Decentralization - (The project is managed and regulated by the community).</li>
            <li> Innovative technology - (The combination of high transaction speed, reliability and simplicity).</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">
            What problems does the network business solve?
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p>The UMI blockchain as a technology now has a large number of advantages that can be implemented in a wide variety of new directions.</p>
          <strong>
            The main advantages of the technology:
          </strong>
          <ul>
            <li>Transaction speed - (65.536 sec.).</li>
            <li>No commission - (Transaction fee = 0).</li>
            <li>Smart Contracts - (Fast SMC Creation).</li>
            <li>Ease of use - (Buying, selling and storing coins in one safe place).</li>
            <li>Decentralization - (The project is managed and regulated by the community).</li>
            <li> Innovative technology - (The combination of high transaction speed, reliability and simplicity).</li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <div className="pagination-wrapper">
        <div className="page-count">
          Rows per page:
          <input type="text" placeholder="10"/>
        </div>

        <div className="pagination">
          <PaginationRounded />
        </div>
      </div>
    </div>
  );
}