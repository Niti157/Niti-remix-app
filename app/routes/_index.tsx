import type { MetaFunction } from "@remix-run/node";
import MyCards from "./card.MyCards";

export const meta: MetaFunction = () => {
  return [
    { title: "Iboss Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
    <MyCards />
    {/*  <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <h1 className="text-3xl">My Profile</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>Name: Niti Pakjamsai</li>
        <li>Class: Information Technology</li>
        <li>E-mail <a href="mailto: niti.pak@rmutto.ac.th">Contract me</a></li>
        <li><img src="image\iboss.jpg"></img></li> 
        </ul> */}
    </div>
  );
}
