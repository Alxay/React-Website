"use client";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

export default function Sharecode() {
  const [data, setData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [serverStatus, setServerStatus] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:7070");
      setData(response.data);
      setServerStatus(700);
    } catch (error) {
      console.error("Error fetching data:", error);
      setServerStatus(500);
    }
  };

  if (!mounted) {
    return null;
  }

  async function sendData(clientMessage: string) {
    if (data && data.message != clientMessage) {
      try {
        const response = await axios.post("http://localhost:7070/data", {
          message: clientMessage,
        });
        setServerStatus(response.status);
      } catch (error) {
        console.error("Error sending data:", error);
        setServerStatus(500);
      }
    }
  }

  function handleChange(newValue: string) {
    setServerStatus(null);
    if (newValue.length > 20000) setServerStatus(500);
    setData({ message: newValue });

    // Wyczyść poprzedni timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Ustaw nowy timeout
    timeoutRef.current = setTimeout(() => {
      sendData(newValue);
    }, 2000);
  }

  return (
    <section className="min-h-screen w-full bg-[#0f0f0f] flex flex-col p-8">
      <div className="w-full mx-auto bg-[#1b1b1b] rounded-t-lg px-4 py-3 flex items-center gap-2 border border-gray-700 border-b-0">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>

        <span
          className={`ml-4 ${
            serverStatus === 200
              ? "text-green-500"
              : serverStatus === 500
              ? "text-red-500"
              : serverStatus === 700
              ? "text-yellow-300"
              : "text-gray-500"
          } text-sm font-mono opacity-80`}
        >
          sharecode.txt
        </span>
        <button
          onClick={fetchData}
          className="ml-auto px-3 py-1 text-xs font-mono text-gray-400 hover:text-gray-200 border border-gray-600 hover:border-gray-400 rounded transition-colors"
        >
          REFRESH
        </button>
      </div>

      {/* Textarea */}
      <textarea
        maxLength={20000}
        className="flex-grow w-full mx-auto p-6 bg-[#1b1b1b] text-gray-200 font-mono text-sm rounded-b-lg border border-gray-700 shadow-xl resize-none
         focus:outline-none  focus:ring-opacity-50"
        placeholder="Paste your code here..."
        value={data ? data.message : ""}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
    </section>
  );
}
