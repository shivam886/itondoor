import { cn } from '../utils/cn';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto' | 'monochrome';
  iconOnly?: boolean;
}

export default function Logo({ className, variant = 'auto', iconOnly = false }: LogoProps) {
  // Use dark text for light/auto, white text for dark
  const isDark = variant === 'dark';

  return (
    <div className={cn("flex flex-col items-center select-none font-sans", className)}>
      <div className="flex items-end leading-none relative">
        <span className="text-[#0055ff] font-extrabold text-[32px] tracking-tight">IT</span>
        
        {/* Power Button "O" */}
        <div className="w-[28px] h-[32px] flex items-center justify-center mx-[1px] relative">
          <svg viewBox="0 0 120 120" className="w-[34px] h-[34px] text-[#6b7280]" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round">
            <path d="M60 15 v35" />
            <path d="M35 40 A 40 40 0 1 0 85 40" />
          </svg>
        </div>
        
        <span className="text-[#6b7280] font-extrabold text-[32px] tracking-tight mr-[1px]">N</span>
        
        <span className={cn("font-extrabold text-[32px] tracking-tight", isDark ? "text-white" : "text-black")}>
          DOOR
        </span>
        
        {/* Vertical .com */}
        <div className="flex flex-col justify-end h-full pb-1 ml-[2px]">
          <span className="text-[#6b7280] text-[10px] font-bold -rotate-90 origin-bottom-left translate-y-[2px] translate-x-[8px] tracking-widest">
            .com
          </span>
        </div>
      </div>
      
      {/* Blue Underline */}
      <div className="w-[65%] h-[2px] ml-auto mr-[5%] mt-[2px] rounded-full" style={{
        background: "linear-gradient(90deg, transparent 0%, #0055ff 15%, #0055ff 100%)"
      }}></div>
      
      {/* Subtext */}
      {!iconOnly && (
        <div className="text-[#6b7280] text-[9.5px] font-semibold tracking-[0.12em] mt-[3px] ml-6">
          YOUR DOORSTEP IT PARTNER
        </div>
      )}
    </div>
  );
}
