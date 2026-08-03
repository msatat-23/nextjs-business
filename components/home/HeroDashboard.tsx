'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Sparkles } from 'lucide-react';
import { chartDataMap, chartQuarters } from '@/lib/data/chartData';
import { ChartQuarter } from '@/types';

export function HeroDashboard() {
  const [chartQuarter, setChartQuarter] = useState<ChartQuarter>('Q5');
  const activePoint = chartDataMap[chartQuarter];

  return (
    <motion.div
      className="relative z-10 w-full"
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      <motion.div
        className="absolute -top-4 right-4 z-20 inline-flex items-center gap-1.5 bg-[#111827] border border-[#f43f5e]/40 text-[#fb7185] px-3.5 py-1.5 rounded-full text-[0.72rem] font-bold shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-md"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
      >
        <Sparkles size={14} className="text-[#fb7185]" />
        <span>AI Revenue Predictor Active</span>
      </motion.div>

      <div className="bg-[#0b0f19] border border-white/12 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(244,63,94,0.12)]">
        <div className="bg-[#111827]/90 px-4 py-3 border-b border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]" />
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 truncate">
            <Activity size={14} className="text-[#fb7185]" />
            <span className="truncate">Enterprise Growth Analytics &mdash; Business Developer</span>
          </div>
        </div>

        <div className="p-4 sm:p-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <motion.div
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                chartQuarter === 'Q5'
                  ? 'bg-[#f43f5e]/15 border-[#f43f5e]/40 shadow-[0_0_15px_rgba(244,63,94,0.2)]'
                  : 'bg-[#111827]/60 border-white/10 hover:bg-white/5'
              }`}
              onClick={() => setChartQuarter('Q5')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-[0.72rem] text-gray-400 font-medium">Annual Revenue Velocity</div>
              <div className="text-lg font-extrabold text-white mt-0.5">{activePoint.val}</div>
              <div className="text-[0.72rem] text-[#34d399] font-bold mt-0.5">{activePoint.trend}</div>
            </motion.div>

            <motion.div className="p-3 rounded-xl border bg-[#111827]/60 border-white/10 hover:bg-white/5 cursor-pointer transition-all" whileHover={{ scale: 1.02 }}>
              <div className="text-[0.72rem] text-gray-400 font-medium">EBITDA Margin Boost</div>
              <div className="text-lg font-extrabold text-white mt-0.5">34.2%</div>
              <div className="text-[0.72rem] text-[#34d399] font-bold mt-0.5">+6.8% YoY</div>
            </motion.div>

            <motion.div className="p-3 rounded-xl border bg-[#111827]/60 border-white/10 hover:bg-white/5 cursor-pointer transition-all" whileHover={{ scale: 1.02 }}>
              <div className="text-[0.72rem] text-gray-400 font-medium">Pipeline Efficiency</div>
              <div className="text-lg font-extrabold text-white mt-0.5">94.1%</div>
              <div className="text-[0.72rem] text-gray-400 font-bold mt-0.5">Optimal</div>
            </motion.div>
          </div>

          <div className="bg-[#111827]/60 border border-white/10 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[0.8rem] font-bold text-gray-200">12-Month Projected vs Actual Growth Line</span>
                <span className="bg-[#f43f5e]/20 border border-[#f43f5e]/40 text-[#fb7185] px-2 py-0.5 rounded-full text-[0.68rem] font-extrabold">{activePoint.label}</span>
              </div>
              <div className="flex items-center gap-1 bg-[#030712] p-1 rounded-lg border border-white/10 self-start sm:self-auto">
                {chartQuarters.map((q) => (
                  <button
                    key={q}
                    onClick={() => setChartQuarter(q)}
                    className={`px-2 py-1 rounded text-[0.7rem] font-bold cursor-pointer transition-all ${
                      chartQuarter === q
                        ? 'bg-[#f43f5e] text-white shadow-[0_0_10px_rgba(244,63,94,0.5)]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full h-[140px] relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 440 140" fill="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.45" />
                    <stop offset="60%" stopColor="#a855f7" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#030712" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#fb7185" />
                    <stop offset="50%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>

                <line x1="20" y1="30" x2="420" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="20" y1="65" x2="420" y2="65" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="20" y1="100" x2="420" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                <path
                  d="M 40 110 Q 90 100, 130 90 T 220 65 T 310 40 T 400 15 L 400 130 L 40 130 Z"
                  fill="url(#chartGradient)"
                />

                <motion.path
                  d="M 40 110 Q 90 100, 130 90 T 220 65 T 310 40 T 400 15"
                  stroke="url(#lineStroke)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                <circle cx="40" cy="110" r={chartQuarter === 'Q1' ? 6 : 4} fill="#fb7185" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => setChartQuarter('Q1')} />
                <circle cx="130" cy="90" r={chartQuarter === 'Q2' ? 6 : 4} fill="#f43f5e" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => setChartQuarter('Q2')} />
                <circle cx="220" cy="65" r={chartQuarter === 'Q3' ? 6 : 4} fill="#e11d48" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => setChartQuarter('Q3')} />
                <circle cx="310" cy="40" r={chartQuarter === 'Q4' ? 6 : 4} fill="#a855f7" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => setChartQuarter('Q4')} />
                <circle cx="400" cy="15" r={chartQuarter === 'Q5' ? 7 : 4} fill="#c084fc" stroke="#ffffff" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => setChartQuarter('Q5')} />

                <motion.circle
                  cx={activePoint.pointX}
                  cy={activePoint.pointY}
                  r="11"
                  fill="none"
                  stroke="#fb7185"
                  strokeWidth="2"
                  animate={{ r: [8, 14, 8], opacity: [0.9, 0.3, 0.9] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                />
              </svg>
            </div>

            <div className="flex justify-between items-center text-[0.72rem] text-gray-400 font-semibold pt-1 border-t border-white/5">
              <span>Q1 Baseline</span>
              <span>Q2 Ramp</span>
              <span>Q3 Multiplier</span>
              <span>Q4 Peak</span>
              <span className="text-[#fb7185] font-bold">Q5 Horizon</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-1 border-t border-white/10 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_8px_#34d399] animate-pulse" />
              <span className="text-gray-300 font-semibold">Real-time C-Suite Integration Active</span>
            </div>
            <span className="text-[#fb7185] font-extrabold">Target ROI: 2.45x</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

