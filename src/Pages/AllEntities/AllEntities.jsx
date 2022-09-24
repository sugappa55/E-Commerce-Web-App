import React from "react";

import { useSelector } from "react-redux";
import { MdExpandMore, MdOutlineFilterList } from "react-icons/md";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import EntityCard from "../../Components/EntityCard"

const AllEntities = () => {
  const data = useSelector((store) => store.products);

  return (
    <div className="px-16 py-4">
      <div>
        <h2 className="text-3xl font-semibold py-6">Shop All</h2>
        <div id="filter" className="flex md:justify-end justify-between">
          <button className="md:hidden">
            {" "}
            <MdOutlineFilterList className="mr-2  text-xl inline" />
            Filters{" "}
          </button>
          <button>
            Sort:Some value <MdExpandMore className="ml-1 text-xl inline" />
          </button>
        </div>
        <div className="py-12 flex w-full gap-2">
          <div className="hidden md:block w-[25%]">
            <Accordion style={{ borderBottom: "1px solid" }}>
              <AccordionSummary
                expandIcon={<MdExpandMore className="text-3xl" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="text-sm uppercase font-semibold">Size</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" name="size" id="" />
                  <label htmlFor="size">5</label>
                  <br />
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" name="size" id="" />
                  <label htmlFor="size">6</label>
                  <br />
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" name="size" id="" />
                  <label htmlFor="size">7</label>
                  <br />
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" name="size" id="" />
                  <label htmlFor="size">8</label>
                  <br />
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" name="size" id="" />
                  <label htmlFor="size">9</label>
                  <br />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ borderBottom: "1px solid",py:2 }}>
              <AccordionSummary
                expandIcon={<MdExpandMore className="text-3xl" />}
              >
                <p className="font-semibold text-sm uppercase">Price </p>
              </AccordionSummary>
            </Accordion>
            <Accordion style={{ borderBottom: "1px solid",py:2 }}>
              <AccordionSummary
                expandIcon={<MdExpandMore className="text-3xl" />}
              >
                <p className="font-semibold text-sm uppercase">Gender </p>
              </AccordionSummary>
              <AccordionDetails>
              <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" name="gender" id="" />
                  <label htmlFor="gender">Men</label>
                  <br />
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" name="gender" id="" />
                  <label htmlFor="gender">Women</label>
                  <br />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ borderBottom: "1px solid",py:2 }}>
              <AccordionSummary
                expandIcon={<MdExpandMore className="text-3xl" />}
              >
                <p className="font-semibold text-sm uppercase">Collection </p>
              </AccordionSummary>
              <AccordionDetails>
              <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" name="collections" id="" />
                  <label htmlFor="collections">Banana clicks</label>
                  <br />
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" name="collections" id="" />
                  <label htmlFor="collections">Softknit Loafers</label>
                  <br />
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 md:w-[75%] w-full gap-2 md:mt-[-3rem]">
            {
              data.map(product=>(
                <EntityCard product={product}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEntities;
