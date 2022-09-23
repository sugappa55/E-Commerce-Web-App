import React from "react";
import { memo } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import {AiOutlineTwitter,AiFillYoutube,AiFillLinkedin,AiOutlineInstagram,AiFillMail} from "react-icons/ai"
import {FaFacebook} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="bg-[#fafafa]">
      <div className="md:flex hidden p-4 gap-x-2">
        <div className="flex-1 text-center">
          <Typography sx={{ textTransform: "uppercase", py: 2 }}>
            Contact us
          </Typography>

          <Typography sx={{ py: 1, fontSize: ".9em" }}>
            {" "}
            Drop us an email to rescue@flatheads.in or{" "}
          </Typography>
          <Typography sx={{ py: 1, fontSize: ".9em" }} variant="subtitle">
            Call us on +91 7899136414
          </Typography>
          <Typography sx={{ py: 1, fontSize: ".9em" }} variant="subtitle">
            (Calls available Mon-Fri, 10am-6pm)
          </Typography>
        </div>
        <div className="flex-1 text-center">
          <Typography sx={{ textTransform: "uppercase", py: 2 }}>
            Help
          </Typography>

          <Typography>Track My Order</Typography>

          <Typography sx={{ py: 1, fontSize: ".9em" }}>
            Exchanges & Returns
          </Typography>
          <Typography sx={{ py: 1, fontSize: ".9em" }}>FAQ</Typography>
          <Typography sx={{ py: 1, fontSize: ".9em" }}>Contact Us</Typography>
        </div>
        <div className="flex-1 text-center">
          <Typography sx={{ textTransform: "uppercase", py: 2 }}>
            Footer Shop
          </Typography>

          <Typography sx={{ py: 1, fontSize: ".9em" }}>Men</Typography>
          <Typography sx={{ py: 1, fontSize: ".9em" }}>Women</Typography>
          <Typography sx={{ py: 1, fontSize: ".9em" }}>
            Banana Clicks
          </Typography>
        </div>
        <div className="flex-1 text-center">
          <Typography sx={{ textTransform: "uppercase", py: 2 }}>
            About Us
          </Typography>

          <Typography sx={{ py: 1, fontSize: ".9em" }}>
            Why Flatheads
          </Typography>
          <Typography sx={{ py: 1, fontSize: ".9em" }}>Our Story</Typography>
          <Typography sx={{ py: 1, fontSize: ".9em" }}>
            ustomer Reviews
          </Typography>
        </div>
      </div>
      

      <div className="md:hidden p-2">
        <div>
          <Accordion style={{ borderBottom: "1px solid" }}>
            <AccordionSummary
              expandIcon={<MdExpandMore className="text-3xl" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ textTransform: "uppercase", py: 2 }}>
                Contact us
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>
                {" "}
                Drop us an email to rescue@flatheads.in or{" "}
              </Typography>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>
                Call us on +91 7899136414
              </Typography>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>
                (Calls available Mon-Fri, 10am-6pm)
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderBottom: "1px solid" }}>
            <AccordionSummary
              expandIcon={<MdExpandMore className="text-3xl" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ textTransform: "uppercase", py: 2 }}>
                Help
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>
                Track My Order
              </Typography>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>
                Exchanges & Returns
              </Typography>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>FAQ</Typography>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>
                Contact Us
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderBottom: "1px solid" }}>
            <AccordionSummary
              expandIcon={<MdExpandMore className="text-3xl" />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography sx={{ textTransform: "uppercase", py: 2 }}>
                Footer Shop
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>Men</Typography>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>Women</Typography>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>
                Banana Clicks
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ borderBottom: "1px solid" }}>
            <AccordionSummary
              expandIcon={<MdExpandMore className="text-3xl" />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography sx={{ textTransform: "uppercase", py: 2 }}>
                About Us
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>
                Why Flatheads
              </Typography>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>
                Our Story
              </Typography>
              <Typography sx={{ py: 1, fontSize: ".9em" }}>
                ustomer Reviews
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="border  mx-8 border-black hidden md:block"></div>
      <div className="flex mx-8 py-4">
        <div className="flex-1 hidden md:block">@2022 Flatheads</div>
        <div className="flex justify-center md:justify-end gap-6 w-full">
        <div className="footer-icon"><AiOutlineTwitter/></div>
        <div className="footer-icon"><FaFacebook/></div>
        <div className="footer-icon"><AiFillYoutube/></div>
        <div className="footer-icon"><AiOutlineInstagram/></div>
        <div className="footer-icon"><AiFillLinkedin/></div>
        <div className="footer-icon"><AiFillMail/></div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
