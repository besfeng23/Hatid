import { Banknote } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function PaymentPreferenceRow() {
  return <Card className="flex items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-primary"><Banknote className="h-5 w-5" /></div><div><p className="font-black text-[#001144]">Cash preference</p><p className="text-xs leading-5 text-slate-500">Preview only — no live wallet balance or card charging.</p></div></div><span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">Not charged</span></Card>;
}
