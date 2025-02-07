import React from "react";
import Six_section_Card from "../components/Six_section_Card";
import Contain from "../components/Contain";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { IoBookmarks } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbRosetteDiscountFilled } from "react-icons/tb";
import { RiRefund2Line } from "react-icons/ri";




const Six_Card = () => {
  return (
    <div>
      <div className="">
        <Contain className={"flex justify-around items-center align-middle gap-x-6"}>
          <Six_section_Card
            Icon={FaFileInvoiceDollar}
            text_h1={"Cheap than Other"}
            text_para={"Travelya is cheaper than other travel agency."}
          />
          <Six_section_Card
            Icon={RiPoliceBadgeFill}
            text_h1={"Secure Payment"}
            text_para={"You can pay your book without doubt again."}
          />
          <Six_section_Card
            Icon={IoBookmarks}
            text_h1={"Easy To Book"}
            text_para={"Follow flow, Click, Pay. Wait just wait e-ticket."}
          />
        </Contain>
      </div>
      <div className="">
        <Contain className={"flex justify-around items-center align-middle gap-x-6"}>
          <Six_section_Card
          Icon={MdOutlineSupportAgent}
            text_h1={"24/7 Support"}
            text_para={"We’re ready help you anytime and anywhere you are."}
          />
          <Six_section_Card
          Icon={TbRosetteDiscountFilled}
            text_h1={"Best Offers"}
            text_para={"Inform you about all best offers for all destination."}
          />
          <Six_section_Card
          Icon={RiRefund2Line}
            text_h1={"Fast Refund"}
            text_para={"If you canceled. We can refund your money 1*12."}
          />
        </Contain>
      </div>
    </div>
  );
};

export default Six_Card;
