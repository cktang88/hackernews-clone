import { ArrowUp, MessageSquare } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Home() {
  return <HackerNewsClone />;
}

const mockStories = [
  {
    id: 1,
    title: "The Rise of Quantum Computing in Cybersecurity",
    url: "https://quantumtech.com/quantum-computing-cybersecurity",
    points: 342,
    author: "quantum_enthusiast",
    time: "3 hours ago",
    commentCount: 127,
  },
  {
    id: 2,
    title: "SpaceX Successfully Launches 60 More Starlink Satellites",
    url: "https://space.com/spacex-starlink-launch-success",
    points: 275,
    author: "rocket_fan",
    time: "5 hours ago",
    commentCount: 89,
  },
  {
    id: 3,
    title: "New AI Model Achieves Human-Level Performance in Complex Tasks",
    url: "https://ai-research.org/human-level-ai-breakthrough",
    points: 198,
    author: "ai_researcher",
    time: "2 hours ago",
    commentCount: 56,
  },
  {
    id: 4,
    title: "GitHub Copilot Faces Legal Challenges Over Open Source Licensing",
    url: "https://techcrunch.com/github-copilot-legal-issues",
    points: 421,
    author: "open_source_advocate",
    time: "8 hours ago",
    commentCount: 203,
  },
  {
    id: 5,
    title: "Tesla Unveils New Battery Technology with 600-mile Range",
    url: "https://electrek.co/tesla-new-battery-tech",
    points: 387,
    author: "ev_enthusiast",
    time: "4 hours ago",
    commentCount: 145,
  },
  {
    id: 6,
    title: "Researchers Develop Self-Healing Concrete Using Bacteria",
    url: "https://materials-science.org/self-healing-concrete",
    points: 156,
    author: "concrete_innovator",
    time: "6 hours ago",
    commentCount: 42,
  },
  {
    id: 7,
    title: "Apple's M2 Chip Outperforms High-End Desktop CPUs",
    url: "https://arstechnica.com/apple-m2-chip-performance",
    points: 289,
    author: "mac_power_user",
    time: "7 hours ago",
    commentCount: 98,
  },
  {
    id: 8,
    title: "New Study Shows Promising Results for CRISPR Gene Therapy",
    url: "https://nature.com/crispr-gene-therapy-study",
    points: 231,
    author: "biotech_researcher",
    time: "9 hours ago",
    commentCount: 67,
  },
  {
    id: 9,
    title: "Blockchain Technology Revolutionizes Supply Chain Management",
    url: "https://supplychain.news/blockchain-revolution",
    points: 178,
    author: "logistics_expert",
    time: "5 hours ago",
    commentCount: 53,
  },
  {
    id: 10,
    title: "Mozilla Introduces New Privacy Features in Firefox 100",
    url: "https://blog.mozilla.org/firefox-100-privacy-features",
    points: 312,
    author: "privacy_advocate",
    time: "3 hours ago",
    commentCount: 87,
  },
];

const HackerNewsClone = () => {
  return (
    <div className="max-w-full px-4 py-6">
      <header className="w-full bg-[#ff6600] text-black py-4 px-6 flex items-center">
        <h1 className="text-xl font-bold mr-4">HackerNews Clone</h1>
        <nav>
          <ul className="flex space-x-4">
            {["top", "new", "best", "submit"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="hover:underline">
                more ▼
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-full lg:max-w-6xl mx-auto py-6">
        <div className="space-y-1">
          {mockStories.map((mockStory, index) => {
            return (
              <div
                key={mockStory.id}
                className={`flex items-center space-x-2 py-2 px-4 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <Link
                  href={`/post/${mockStory.id}`}
                  className="text-xs text-gray-500 flex items-center space-x-1 min-w-[80px] hover:underline"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>{mockStory.commentCount} comments</span>
                </Link>
                <ArrowUp className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700 w-8">{mockStory.points}</span>
                <div className="flex-grow">
                  <a href={mockStory.url} className="hover:underline text-sm">
                    {mockStory.title}
                  </a>
                  <span className="text-gray-500 text-xs ml-2">
                    ({new URL(mockStory.url).hostname})
                  </span>
                </div>
                <div className="text-xs text-gray-500 flex items-center space-x-2">
                  <Link
                    href={`/user/${mockStory.author}`}
                    className="hover:underline"
                  >
                    by {mockStory.author}
                  </Link>
                  <span>{mockStory.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="w-full bg-[#ff6600] text-black py-4 px-6 text-center">
        <span>&copy; 2023 HackerNews Clone</span>
      </footer>
    </div>
  );
};
