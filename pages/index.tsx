import Image from "next/image";
import NetLayout from "@/components/NetLayout";
import useFetchData from "@/hooks/useFetchData";
import formatDate from "@/helpers/formatDate";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currData, setCurrData] = useState<object>({});
  const fetchedData = useFetchData();
  const handleClick = (data: object) => {
    setOpenModal(true);
    setCurrData(data);
  };

  return (
    <div className="relative overflow-hidden bg-gray-50">
      <NetLayout />
      <div className="bg-[url('https://tailwindui.com/img/beams-home@95.jpg')] bg-cover py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sea Of NFT's
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              List of NFTs (Non-FungibleTokens) of OpenSea, Click to view more
              🙂
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {fetchedData?.map((data) => (
              <article
                key={data.tokenId}
                onClick={() => handleClick(data)}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                  src={data.media[0]?.gateway}
                  alt={data.description}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={data.timeLastUpdated} className="mr-8">
                    {formatDate(data.timeLastUpdated).newTime}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <span>
                    <span className="absolute inset-0" />
                    {data?.title}
                  </span>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Modal open={openModal} setOpen={setOpenModal} detail={currData} />
    </div>
  );
}
