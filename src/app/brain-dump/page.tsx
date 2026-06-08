"use client";

import { AppLayout } from "@/components/AppLayout";
import { Inbox, CheckCheck } from "lucide-react";
import { useState, useCallback } from "react";
import { QuickCapture } from "./components/QuickCapture";
import { BrainDumpSection } from "./components/BrainDumpSection";
import { BrainDumpItem, PendingItem } from "./components/PendingItem";
import { ProcessedItem } from "./components/ProcessedItem";

const INITIAL_PENDING: BrainDumpItem[] = [
  { id: 1, text: "Need to organize my notes better", time: "4/7/2026, 3:00:00 PM" },
  { id: 2, text: "Ideas for new project", time: "4/7/2026, 4:00:00 PM" },
  { id: 3, text: "Thoughts on personal development", time: "4/7/2026, 5:00:00 PM" },
];

const INITIAL_PROCESSED: BrainDumpItem[] = [
  { id: 4, text: "Remember to update portfolio website", time: "4/6/2026, 9:30:00 PM" },
  { id: 5, text: "Book recommendations from John", time: "4/6/2026, 7:00:00 PM" },
];

export default function BrainDumpPage() {
  const [input, setInput] = useState("");
  const [toProcessList, setToProcessList] = useState<BrainDumpItem[]>(INITIAL_PENDING);
  const [processedList, setProcessedList] = useState<BrainDumpItem[]>(INITIAL_PROCESSED);

  const addItem = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setToProcessList((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: trimmed,
        time: new Date().toLocaleString("en-US"),
      },
    ]);
    setInput("");
  }, [input]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem();
    }
  }, [addItem]);

  const handleProcessItem = useCallback((id: number) => {
    const itemToProcess = toProcessList.find((item) => item.id === id);
    if (!itemToProcess) return;
    setToProcessList((prev) => prev.filter((item) => item.id !== id));
    setProcessedList((prev) => [itemToProcess, ...prev]);
  }, [toProcessList]);

  const handleProcessAll = useCallback(() => {
    setProcessedList((prev) => [...toProcessList, ...prev]);
    setToProcessList([]);
  }, [toProcessList]);

  const handleDeleteProcessed = useCallback((id: number) => {
    setProcessedList((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleConvert = useCallback((id: number) => {
    // TODO: wire to tasks backend later
    console.log("Convert item:", id);
  }, []);

  const handleMore = useCallback((id: number) => {
    // TODO: wire to options dropdown/dialog later
    console.log("More options for:", id);
  }, []);

  return (
    <AppLayout title="Brain Dump" subtitle="CLEAR YOUR MIND">
      <div className="flex flex-col gap-10 pb-12 font-inter mt-6">
        {/* Quick Capture Card */}
        <QuickCapture
          value={input}
          onChange={setInput}
          onKeyDown={handleKeyDown}
          onAdd={addItem}
        />

        {/* Sections Container */}
        <div className="flex flex-col gap-10">
          {/* To Process Section */}
          <BrainDumpSection
            title="To Process"
            icon={Inbox}
            count={toProcessList.length}
            badgeTextColorClass="text-zinc-500"
            actionText="Process All"
            onAction={handleProcessAll}
          >
            {toProcessList.map((item) => (
              <PendingItem
                key={item.id}
                item={item}
                onConvert={handleConvert}
                onProcess={handleProcessItem}
                onMore={handleMore}
              />
            ))}
          </BrainDumpSection>

          {/* Processed Section */}
          <BrainDumpSection
            title="Processed"
            icon={CheckCheck}
            count={processedList.length}
            badgeTextColorClass="text-zinc-400"
          >
            {processedList.map((item) => (
              <ProcessedItem
                key={item.id}
                item={item}
                onDelete={handleDeleteProcessed}
              />
            ))}
          </BrainDumpSection>
        </div>
      </div>
    </AppLayout>
  );
}

