import { Check } from "lucide-react";

function Pricing() {
  return (
    <section id="pricing" className="bg-gray-950 py-10 px-6">
      <div className="max-w-7xl mx-auto py-24 px-6 text-center">
        <div>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-center text-gray-500 mb-12">
            Choose the plan that’s right for you. No hidden fees, no surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div
            className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2
"
          >
            <h3 className="text-xl mb-1">Free</h3>
<p className="text-4xl text-white mb-4">$0<span className="text-lg text-gray-400">/mo</span></p>
<p className="text-gray-400">Perfect for individuals and small teams getting started.</p>
            <ul>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>5 videos per month</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>Watermarked exports</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>Basic templates</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>720p quality</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>Community support</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 mt-8">
              Start for Free
            </button>
          </div>

          <div
            className="p-6 rounded-lg bg-gray-900 border border-blue-500 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2
"
          >
            <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-4 inline-block">
  Most Popular
</span>
            <h3 className="text-xl mb-1">Pro</h3>
<p className="text-4xl text-white mb-4">$29<span className="text-lg text-gray-400">/mo</span></p>
<p className="text-gray-400">For professionals and businesses that need more power and flexibility.</p>
            <ul>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>Unlimited videos</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>No watermark</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>All templates</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>1080p quality</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>Priority support</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 mt-8"> Upgrade to Pro</button>
          </div>

          <div
            className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2
"
          >
            <h3 className="text-xl mb-1">Enterprise</h3>
<p className="text-4xl text-white mb-4">$99<span className="text-lg text-gray-400">/mo</span></p>
<p className="text-gray-400">For large teams and organizations that need advanced features and support.</p>
            <ul>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>Custom branding</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>Team collaboration</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>4K quality</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-blue-400" />
                <span>Dedicated account manager</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300 mt-10">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
