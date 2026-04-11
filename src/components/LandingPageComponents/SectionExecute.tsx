import { Check, CircleCheck, Square } from "lucide-react";
import React from "react";

const SectionExecute = () => {
  return (
    <div className="bg-white mt-30">
      {/* headings */}
      <div className="flex flex-col justify-center items-center gap-5 p-30">
        <h3 className="text-emerald-900 uppercase font-bold text-xs tracking-[0.25em]">
          Complete productivity suite
        </h3>
        <h1 className="text-4xl md:text-6xl lg:text-5xl tracking-tight font-bold text-center text-slate-900 leading-[1.1]">
          Everything you need. Nothing you don&apos;t.
        </h1>
        <p className="text-slate-800">Built for focus, designed for clarity.</p>
      </div>
      {/* Grid layout */}
      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-4">
        {/* Top Row: Takes up 2 columns */}
        <div className="col-span-2 bg-slate-50 p-4 rounded-xl">
          <div className="flex items-center gap-4 mb-7">
            <div className="bg-emerald-950 p-3 rounded-full shrink-0">
              <CircleCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Daily Execution</h1>
              <p className="text-slate-600">
                See exactly what needs to happen today. No clutter, no
                overwhelm.
              </p>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-lg px-8 py-5 flex flex-col gap-3">
            <div className="px-6 py-3 flex justify-between bg-white rounded-xl">
              <div className="flex items-center gap-2.5">
                <Square />
                <h3 className="text-sm font-semibold">
                  Review client proposal
                </h3>
              </div>
              <p className="font-bold px-2 py-2 bg-green-50 border border-emerald-200 rounded-lg text-xs">
                High
              </p>
            </div>
            <div className="px-6 py-3 flex justify-between bg-white rounded-xl">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-6 h-6 bg-emerald-950 rounded-md shrink-0 cursor-pointer transition-colors hover:bg-emerald-900">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>

                <span className="text-slate-400 line-through font-medium text-sm md:text-base select-none">
                  Morning meditation
                </span>
              </div>
              {/* <p className="px-2 py-2 bg-green-50 rounded-lg text-xs">High</p> */}
            </div>
            <div className="px-6 py-3 flex justify-between bg-white rounded-xl">
              <div className="flex items-center gap-2.5">
                <Square />
                <h3 className="text-sm font-semibold">
                  Update project documentation.
                </h3>
              </div>
              <p className="font-bold px-2 py-2 bg-orange-50 border border-amber-200 rounded-lg text-xs">
                Medium
              </p>
            </div>
          </div>
        </div>

        {/* Top Row: Takes up 1 column */}
        <div className="col-span-1 bg-slate-100 p-4 rounded-xl">
          {/* Right side content */}
        </div>

        {/* Bottom Row: Spans all 3 columns */}
        <section className="col-span-3 bg-slate-100 p-4 rounded-xl mt-4">
          {/* Bottom content */}
        </section>
      </div>
    </div>
  );
};

export default SectionExecute;
