"use client";
import { useState } from "react";
import Popular from "@/app/components/data/Popular";
import Featured from "@/app/components/data/Featured";
import News from "@/app/components/data/News";

export const Tab = ({ label, isActive, onClick }: any) => {
  return (
    <button
      className={`px-4 py-2 rounded-[2rem] ${
        isActive ? "bg-text_primary text-white" : "text-gray-700"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("popular");

  const handleClick = (tab: any) => {
    setActiveTab(tab);
  };

  let tabContent;
  switch (activeTab) {
    case "popular":
      tabContent = <Popular />;
      break;
    case "featured":
      tabContent = <Featured />;
      break;
    case "news":
      tabContent = <News />;
      break;
    default:
      tabContent = null;
  }

  return (
    <div>
      <div className="flex justify-center">
        <Tab
          label="Popular"
          isActive={activeTab === "popular"}
          onClick={() => handleClick("popular")}
        />
        <Tab
          label="Featured"
          isActive={activeTab === "featured"}
          onClick={() => handleClick("featured")}
        />
        <Tab
          label="News"
          isActive={activeTab === "news"}
          onClick={() => handleClick("news")}
        />
      </div>
      <div className="mt-4">
        {activeTab === "popular" && <Popular />}
        {activeTab === "featured" && <Featured />}
        {activeTab === "news" && <News />}
      </div>
    </div>
  );
}
