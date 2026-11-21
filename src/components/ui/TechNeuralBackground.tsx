interface TechNeuralBackgroundProps {
  variant?: 'dark' | 'light' | 'cyan';
  opacity?: string;
  className?: string;
}

export function TechNeuralBackground({
  variant = 'dark',
  opacity = 'opacity-30',
  className = '',
}: TechNeuralBackgroundProps) {
  const isDark = variant === 'dark';
  const isCyan = variant === 'cyan';

  const strokeColor = isDark
    ? '#38BDF8'
    : isCyan
    ? '#06B6D4'
    : '#1E3A8A';

  const nodeColor = isDark
    ? '#0EA5E9'
    : isCyan
    ? '#10B981'
    : '#2563EB';

  const pulseNodeColor = isDark
    ? '#38BDF8'
    : '#059669';

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${opacity} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle grid pattern */}
          <pattern id={`tech-grid-${variant}`} width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.5"
              strokeOpacity="0.15"
            />
          </pattern>

          {/* Node Glow Filter */}
          <filter id={`node-glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Grid Layer */}
        <rect width="100%" height="100%" fill={`url(#tech-grid-${variant})`} />

        {/* Neural Network Nodes & Interconnecting Synapse Lines */}
        <g stroke={strokeColor} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3">
          {/* Top-Right Cluster */}
          <line x1="1050" y1="90" x2="1200" y2="160" />
          <line x1="1200" y1="160" x2="1320" y2="110" />
          <line x1="1200" y1="160" x2="1280" y2="280" />
          <line x1="1050" y1="90" x2="980" y2="220" />
          <line x1="980" y1="220" x2="1120" y2="300" />
          <line x1="1120" y1="300" x2="1280" y2="280" />

          {/* Top-Left Cluster */}
          <line x1="120" y1="140" x2="240" y2="80" />
          <line x1="240" y1="80" x2="360" y2="170" />
          <line x1="240" y1="80" x2="290" y2="260" />
          <line x1="120" y1="140" x2="180" y2="290" />
          <line x1="180" y1="290" x2="290" y2="260" />
          <line x1="290" y1="260" x2="420" y2="320" />

          {/* Bottom-Right Sub-cluster */}
          <line x1="1100" y1="520" x2="1240" y2="590" />
          <line x1="1240" y1="590" x2="1360" y2="540" />
          <line x1="1240" y1="590" x2="1190" y2="700" />
          <line x1="990" y1="620" x2="1100" y2="520" />

          {/* Center Subtle Connectors */}
          <line x1="560" y1="120" x2="720" y2="80" strokeOpacity="0.15" />
          <line x1="720" y1="80" x2="880" y2="130" strokeOpacity="0.15" />
        </g>

        {/* Junction Nodes (Data Points) */}
        <g filter={`url(#node-glow-${variant})`}>
          {/* Top-Right Nodes */}
          <circle cx="1050" cy="90" r="3.5" fill={nodeColor} />
          <circle cx="1200" cy="160" r="5" fill={pulseNodeColor} />
          <circle cx="1320" cy="110" r="3" fill={nodeColor} />
          <circle cx="1280" cy="280" r="4" fill={pulseNodeColor} />
          <circle cx="980" cy="220" r="3" fill={nodeColor} />
          <circle cx="1120" cy="300" r="4.5" fill={nodeColor} />

          {/* Top-Left Nodes */}
          <circle cx="120" cy="140" r="3.5" fill={nodeColor} />
          <circle cx="240" cy="80" r="5" fill={pulseNodeColor} />
          <circle cx="360" cy="170" r="3" fill={nodeColor} />
          <circle cx="180" cy="290" r="4" fill={nodeColor} />
          <circle cx="290" cy="260" r="4.5" fill={pulseNodeColor} />
          <circle cx="420" cy="320" r="3" fill={nodeColor} />

          {/* Bottom Nodes */}
          <circle cx="1100" cy="520" r="3.5" fill={nodeColor} />
          <circle cx="1240" cy="590" r="4.5" fill={pulseNodeColor} />
          <circle cx="1360" cy="540" r="3" fill={nodeColor} />
          <circle cx="1190" cy="700" r="4" fill={nodeColor} />
          <circle cx="990" cy="620" r="3" fill={nodeColor} />

          <circle cx="720" cy="80" r="3" fill={nodeColor} opacity="0.6" />
        </g>

        {/* Subtle Tech Circuit Corner Accents */}
        <path
          d="M 40 40 L 40 100 L 100 100"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeOpacity="0.25"
          fill="none"
        />
        <circle cx="100" cy="100" r="2.5" fill={nodeColor} />

        <path
          d="M 1400 40 L 1400 100 L 1340 100"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeOpacity="0.25"
          fill="none"
        />
        <circle cx="1340" cy="100" r="2.5" fill={nodeColor} />
      </svg>
    </div>
  );
}
