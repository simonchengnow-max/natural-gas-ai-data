import { generators, dataCenters, pipelines, lastUpdated, dataVersion } from "@/data/infrastructure-index-data";
const statusColor: Record<string, string> = { Active: "bg-green-100 text-green-800", Proposed: "bg-blue-100 text-blue-800", "Under Construction": "bg-yellow-100 text-yellow-800", Cancelled: "bg-red-100 text-red-800", Suspended: "bg-gray-100 text-gray-800" };
function Badge({ status }: { status: string }) { return (<span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusColor[status] ?? "bg-gray-100 text-gray-800"}`}>{status}</span>); }
export default function InfrastructureIndexPage() {
  const totalGenMW = generators.reduce((s, g) => s + g.capacityMW, 0);
  const totalDCMW = dataCenters.reduce((s, d) => s + d.capacityMW, 0);
  const gasGenMW = generators.filter(g => g.fuelType === "Natural Gas").reduce((s, g) => s + g.capacityMW, 0);
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 px-4 py-10 max-w-7xl mx-auto">
      <div className="mb-10">
        <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">Natural Gas Powered AI</p>
        <h1 className="text-4xl font-bold text-white mb-3">Alberta Infrastructure Index</h1>
        <p className="text-gray-400 max-w-2xl">Live-tracked database of Alberta power generation, data centres, and natural gas pipeline infrastructure. Updated monthly from AER, AESO, and NEB sources.</p>
        <p className="text-gray-600 text-xs mt-3">Last updated: {lastUpdated} &middot; v{dataVersion}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800"><p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Total Gen Capacity</p><p className="text-2xl font-bold text-white">{totalGenMW.toLocaleString()} MW</p></div>
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800"><p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Gas-Fired Capacity</p><p className="text-2xl font-bold text-orange-400">{gasGenMW.toLocaleString()} MW</p></div>
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800"><p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Data Centre Capacity</p><p className="text-2xl font-bold text-white">{totalDCMW.toLocaleString()} MW</p></div>
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800"><p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Pipelines Tracked</p><p className="text-2xl font-bold text-white">{pipelines.length}</p></div>
      </div>
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-4">Power Generation</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm">
            <thead className="bg-gray-900 text-gray-400 uppercase text-xs"><tr><th className="px-4 py-3 text-left">Facility</th><th className="px-4 py-3 text-left">Operator</th><th className="px-4 py-3 text-left">Fuel</th><th className="px-4 py-3 text-right">Capacity (MW)</th><th className="px-4 py-3 text-left">Region</th><th className="px-4 py-3 text-left">Status</th></tr></thead>
            <tbody className="divide-y divide-gray-800">{generators.map((g) => (<tr key={g.id} className="bg-gray-950 hover:bg-gray-900 transition-colors"><td className="px-4 py-3 font-medium text-white">{g.name}</td><td className="px-4 py-3 text-gray-400">{g.operator}</td><td className="px-4 py-3 text-gray-300">{g.fuelType}</td><td className="px-4 py-3 text-right font-mono text-gray-200">{g.capacityMW.toLocaleString()}</td><td className="px-4 py-3 text-gray-400">{g.region}</td><td className="px-4 py-3"><Badge status={g.status} /></td></tr>))}</tbody>
          </table>
        </div>
      </section>
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-4">Data Centres</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm">
            <thead className="bg-gray-900 text-gray-400 uppercase text-xs"><tr><th className="px-4 py-3 text-left">Facility</th><th className="px-4 py-3 text-left">Operator</th><th className="px-4 py-3 text-left">Location</th><th className="px-4 py-3 text-right">Capacity (MW)</th><th className="px-4 py-3 text-left">Power Source</th><th className="px-4 py-3 text-left">Status</th></tr></thead>
            <tbody className="divide-y divide-gray-800">{dataCenters.map((dc) => (<tr key={dc.id} className="bg-gray-950 hover:bg-gray-900 transition-colors"><td className="px-4 py-3 font-medium text-white">{dc.name}</td><td className="px-4 py-3 text-gray-400">{dc.operator}</td><td className="px-4 py-3 text-gray-300">{dc.location}</td><td className="px-4 py-3 text-right font-mono text-gray-200">{dc.capacityMW.toLocaleString()}</td><td className="px-4 py-3 text-gray-400">{dc.powerSource}</td><td className="px-4 py-3"><Badge status={dc.status} /></td></tr>))}</tbody>
          </table>
        </div>
      </section>
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-4">Natural Gas Pipelines</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm">
            <thead className="bg-gray-900 text-gray-400 uppercase text-xs"><tr><th className="px-4 py-3 text-left">Pipeline</th><th className="px-4 py-3 text-left">Operator</th><th className="px-4 py-3 text-left">Route</th><th className="px-4 py-3 text-right">Capacity (MMcf/d)</th><th className="px-4 py-3 text-right">Length (km)</th><th className="px-4 py-3 text-left">Status</th></tr></thead>
            <tbody className="divide-y divide-gray-800">{pipelines.map((p) => (<tr key={p.id} className="bg-gray-950 hover:bg-gray-900 transition-colors"><td className="px-4 py-3 font-medium text-white">{p.name}</td><td className="px-4 py-3 text-gray-400">{p.operator}</td><td className="px-4 py-3 text-gray-300">{p.from} &rarr; {p.to}</td><td className="px-4 py-3 text-right font-mono text-gray-200">{p.capacityMMcfd.toLocaleString()}</td><td className="px-4 py-3 text-right font-mono text-gray-200">{p.lengthKm.toLocaleString()}</td><td className="px-4 py-3"><Badge status={p.status} /></td></tr>))}</tbody>
          </table>
        </div>
      </section>
      <footer className="text-gray-600 text-xs text-center pt-6 border-t border-gray-800">Natural Gas Powered AI &middot; Infrastructure Intelligence for Alberta &middot; data v{dataVersion}</footer>
    </main>
  );
}
