"use client";

import { useState } from "react";
import {
  PhoneIncoming,
  PhoneOutgoing,
  CheckCircle,
} from "lucide-react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function InboundOutboundAgentsSection({ data }) {
  const [activeTab, setActiveTab] = useState("inbound");
  if (!data) return null;

  const inbound = data.inbound;
  const outbound = data.outbound;

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <button
            onClick={() => setActiveTab("inbound")}
            className={`px-8 py-4 rounded-xl font-semibold ${activeTab === "inbound"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
              }`}
          >
            <PhoneIncoming className="inline mr-2" />
            {inbound.label}
          </button>

          <button
            onClick={() => setActiveTab("outbound")}
            className={`px-8 py-4 rounded-xl font-semibold ${activeTab === "outbound"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
              }`}
          >
            <PhoneOutgoing className="inline mr-2" />
            {outbound.label}
          </button>
        </div>

        {activeTab === "inbound" ? (
          <InboundSection data={inbound} />
        ) : (
          <OutboundSection data={outbound} />
        )}
      </div>
    </section>
  );
}

/* ---------------- Inbound ---------------- */

function InboundSection({ data }) {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <PhoneIncoming className="mx-auto w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-4xl font-bold">
          {data.heading.main}
          <span className="block text-blue-600">
            {data.heading.highlight}
          </span>
        </h3>
      </div>

      <div>
        <h4 className="text-3xl font-bold text-center mb-8">
          {data.capabilities.heading}
        </h4>

        <div className="grid md:grid-cols-3 gap-6">
          {data.capabilities.items.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      <AdvantageBlock
        heading={data.advantages.heading}
        items={data.advantages.items}
      />
    </div>
  );
}

/* ---------------- Outbound ---------------- */

function OutboundSection({ data }) {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <PhoneOutgoing className="mx-auto w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-4xl font-bold">
          {data.heading.main}
          <span className="block text-blue-600">
            {data.heading.highlight}
          </span>
        </h3>
      </div>

      <div>
        <h4 className="text-3xl font-bold text-center mb-8">
          {data.useCases.heading}
        </h4>

        <div className="grid md:grid-cols-3 gap-6">
          {data.useCases.items.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      <AdvantageBlock
        heading={data.benefits.heading}
        items={data.benefits.items}
      />
    </div>
  );
}

/* ------------- Reusable UI ------------- */

function Card({ item }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-blue-100">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
        <DynamicIcon name={item.icon} className="w-5 h-5" />
      </div>
      <h5 className="font-bold mb-2">{item.title}</h5>
      <p className="text-gray-600 text-sm">{item.desc}</p>
    </div>
  );
}

function AdvantageBlock({ heading, items }) {
  return (
    <div className="bg-white p-10 rounded-3xl border border-blue-100">
      <h4 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <CheckCircle className="text-blue-600" /> {heading}
      </h4>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <DynamicIcon name={item.icon} className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold">{item.title}</h5>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
