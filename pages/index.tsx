import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NetLayout from "@/components/NetLayout";
import useFetchData from "@/hooks/useFetchData";
import formatDate from "@/helpers/formatDate";

const inter = Inter({ subsets: ["latin"] });

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const posts = [
  {
    id: 1,
    title: "Board Ape",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622034.jpg?w=740&t=st=1678153221~exp=1678153821~hmac=bd585528ef8f7beea604678f652e5d27926a540c71785f72aa8adee1a2cfe291",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Donald Trump",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://imageio.forbes.com/specials-images/imageserve/621e5699a4be707faf89aafa/trump/960x0.jpg?format=jpg&width=960",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Tech money culture",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://cdn-images-1.medium.com/v2/resize:fit:1600/1*qxfMmzrydq2SzaH9l0nn1Q.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Home() {
  const fetchedData = useFetchData();
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
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={data.media[0]?.gateway}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
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
                  <a href={data.tokenUri.gateway}>
                    <span className="absolute inset-0" />
                    {data?.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
