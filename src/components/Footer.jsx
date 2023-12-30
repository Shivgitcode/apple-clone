import { footer } from "../constants";
import Footers from "./Footers";

export default function Footer() {
  return (
    <div className="w-full h-full bg-[#f5f5f7]">
      <footer className="w-[52%] flex flex-col items-center justify-between mx-auto px-[22px] ">
        <div className="w-full pt-[17px] pb-[11px] border-b-[1px] border-[#000]/60">
          <p className="text-[12px] pb-[9px] leading-[16px] tracking-[-0.12px] text-[#000]/60 w-full">
            *Instant savings, otherwise referred to as instant cashback, is
            available with the purchase of an eligible product for qualifying
            HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum
            transaction value of ₹10001.00 applies. Click here to see instant
            savings amounts and eligible devices. Instant savings is available
            for up to two orders per rolling 90-day period with an eligible
            card. Card eligibility is subject to terms and conditions between
            you and your card-issuing bank. Total transaction value is
            calculated after any trade-in credit or eligible discount applied.
            Any subsequent order adjustment(s) or cancellation(s) may result in
            instant savings being recalculated, and any refund may be adjusted
            to account for instant savings clawback; this may result in no
            refund being made to you. Offer may be revised or withdrawn at any
            time without any prior notice. Additional terms apply. Offer cannot
            be combined with Apple Store for Education or Corporate Employee
            Purchase Plan pricing. Multiple separate orders cannot be combined
            for instant savings.
          </p>
          <p className="text-[12px] pb-[9px] leading-[16px] tracking-[-0.12px] text-[#000]/60 w-full">
            ‡No Cost EMI is available with the purchase of an eligible product
            made using eligible cards on 3- or 6-month tenures from most leading
            banks. Monthly pricing is rounded to the nearest rupee. Exact
            pricing will be provided by your bank, subject to your bank’s terms
            and conditions. Minimum order spend applies as per your card-issuing
            bank threshold. Offer cannot be combined with Apple Store for
            Education or Corporate Employee Purchase Plan pricing. Card
            eligibility is subject to terms and conditions between you and your
            card-issuing bank. Offer may be revised or withdrawn at any time
            without any prior notice. Additional terms apply.
          </p>
          <p className="text-[12px] pb-[9px] leading-[16px] tracking-[-0.12px] text-[#000]/60 w-full">
            Representative example: Based on a 6-month tenure. ₹79900.00 total
            cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid
            over 6 months as six monthly payments of ₹13317.00.
          </p>
          <p className="text-[12px] pb-[9px] leading-[16px] tracking-[-0.12px] text-[#000]/60 text-left w-full">
            A subscription is required for Apple TV+.
          </p>
        </div>
        <div className="flex w-full justify-between pt-[20px]">
          {footer.map((item) => {
            return <Footers item={item}></Footers>;
          })}
        </div>
        <div className="w-full flex flex-col justify-between items-start pt-[37px] pb-[11px]">
          <div className="flex w-full pb-[19px] mb-[16px] text-[12px] leading-[16px] tracking-[-0.12px] text-black/60 border-b-[1px] border-black/20 ">
            More ways to shop:{" "}
            <span className="text-[#0066cc] underline px-1">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="text-[#0066cc] underline px-1">
              other retailer
            </span>{" "}
            near you. Or call 0000800 040 1966
          </div>
          <div className="flex justify-between w-full items-center text-[12px] leading-[16px] tracking-[-0.12px] text-black/60 ">
            <p className="flex-1 pr-[30px] whitespace-nowrap">
              Copyright © 2023 Apple Inc. All rights reserved.
            </p>
            <ul className="flex w-full items-center flex-1">
              <li className="pr-[9px] text-black/80 hover:underline border-r-[1px] border-black/60 mr-[5px]  whitespace-nowrap cursor-default">
                Privacy Policy
              </li>
              <li className="pr-[9px] text-black/80 hover:underline border-r-[1px] border-black/60 mr-[5px]  whitespace-nowrap cursor-default">
                Terms of Use
              </li>
              <li className="pr-[9px] text-black/80 hover:underline border-r-[1px] border-black/60 mr-[5px]  whitespace-nowrap cursor-default">
                Sales Policy
              </li>
              <li className="pr-[9px] text-black/80 hover:underline border-r-[1px] border-black/60 mr-[5px]  whitespace-nowrap cursor-default">
                Legal
              </li>
              <li className="pr-[9px] text-black/80 hover:underline border-r-[1px] border-black/60 mr-[5px]  whitespace-nowrap cursor-default">
                Site Map
              </li>
            </ul>
            <p className="flex-1 text-right hover:underline cursor-default">
              India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
