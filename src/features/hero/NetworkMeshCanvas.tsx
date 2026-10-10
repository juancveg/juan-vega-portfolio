import React, { useEffect, useRef } from 'react';

interface Junction {
  x: number;
  y: number;
  col: number;
  row: number;
  isPulsing: boolean;
  pulseRadius: number;
  pulseAlpha: number;
}

interface CircuitLinePulse {
  headX: number;
  headY: number;
  targetX: number;
  targetY: number;
  dir: 'left' | 'right' | 'up' | 'down';
  length: number;
  speed: number;
}

export const NetworkMeshCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Coordinate grid spacing (+25% line density with tighter step)
    const step = 42;
    let junctions: Junction[] = [];
    let linePulses: CircuitLinePulse[] = [];

    const buildGrid = (width: number, height: number) => {
      junctions = [];
      linePulses = [];

      const cols = Math.floor(width / step);
      const rows = Math.floor(height / step);

      // Create a full continuous grid across the entire hero
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          junctions.push({
            x: c * step + (step * 0.5),
            y: r * step + (step * 0.5),
            col: c,
            row: r,
            isPulsing: false,
            pulseRadius: 0,
            pulseAlpha: 0,
          });
        }
      }

      // Initialize traveling line segments (electric current lines)
      const isMobile = width < 768;
      const pulseCount = isMobile ? 22 : 32;

      for (let i = 0; i < pulseCount; i++) {
        if (junctions.length > 0) {
          const start = junctions[Math.floor(Math.random() * junctions.length)];
          const dirs: ('left' | 'right' | 'up' | 'down')[] = ['left', 'right', 'up', 'down'];
          const dir = dirs[Math.floor(Math.random() * dirs.length)];

          let targetX = start.x;
          let targetY = start.y;
          if (dir === 'right') targetX += step;
          else if (dir === 'left') targetX -= step;
          else if (dir === 'down') targetY += step;
          else if (dir === 'up') targetY -= step;

          linePulses.push({
            headX: start.x,
            headY: start.y,
            targetX,
            targetY,
            dir,
            length: 26 + Math.random() * 16, // Line streak length (electric current line)
            speed: 1.0 + Math.random() * 0.6, // Discrete, calm speed
          });
        }
      }
    };

    const handleResize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);
      buildGrid(rect.width, rect.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    // Render loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const width = container.clientWidth;
      const height = container.clientHeight;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw static discrete circuit tracks (crisp hairlines)
      const isMobile = width < 768;
      ctx.lineWidth = 1;
      ctx.strokeStyle = isMobile ? 'rgba(203, 213, 225, 0.75)' : 'rgba(226, 232, 240, 0.55)';

      // Horizontal grid lines
      const rows = Math.floor(height / step);
      const cols = Math.floor(width / step);

      for (let r = 0; r <= rows; r++) {
        const y = r * step + (step * 0.5);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Vertical grid lines
      for (let c = 0; c <= cols; c++) {
        const x = c * step + (step * 0.5);
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // 2. Draw Junction Vias (discrete micro solder pads)
      for (let i = 0; i < junctions.length; i++) {
        const junc = junctions[i];

        // Tiny discrete via crosshair/dot
        ctx.beginPath();
        ctx.arc(junc.x, junc.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = junc.isPulsing ? '#10b981' : 'rgba(203, 213, 225, 0.6)';
        ctx.fill();

        // Green Connection Wave Pulse upon circuit contact
        if (junc.isPulsing) {
          junc.pulseRadius += 0.55;
          junc.pulseAlpha = Math.max(0, 1 - junc.pulseRadius / 18);

          if (junc.pulseAlpha <= 0) {
            junc.isPulsing = false;
            junc.pulseRadius = 0;
          } else {
            // Radiating green connection ring
            ctx.beginPath();
            ctx.arc(junc.x, junc.y, junc.pulseRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(16, 185, 129, ${junc.pulseAlpha * 0.6})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // 3. Move and Draw Traveling Current LINES (not dots/bolitas)
      ctx.lineWidth = isMobile ? 2.0 : 1.6;
      ctx.lineCap = 'round';

      for (let p = 0; p < linePulses.length; p++) {
        const pulse = linePulses[p];

        // Move head along coordinate axis
        if (pulse.dir === 'right') {
          pulse.headX += pulse.speed;
          if (pulse.headX >= pulse.targetX) {
            pulse.headX = pulse.targetX;
            onPulseArrived(pulse, width, height);
          }
        } else if (pulse.dir === 'left') {
          pulse.headX -= pulse.speed;
          if (pulse.headX <= pulse.targetX) {
            pulse.headX = pulse.targetX;
            onPulseArrived(pulse, width, height);
          }
        } else if (pulse.dir === 'down') {
          pulse.headY += pulse.speed;
          if (pulse.headY >= pulse.targetY) {
            pulse.headY = pulse.targetY;
            onPulseArrived(pulse, width, height);
          }
        } else if (pulse.dir === 'up') {
          pulse.headY -= pulse.speed;
          if (pulse.headY <= pulse.targetY) {
            pulse.headY = pulse.targetY;
            onPulseArrived(pulse, width, height);
          }
        }

        // Compute line segment tail
        let tailX = pulse.headX;
        let tailY = pulse.headY;

        if (pulse.dir === 'right') tailX = pulse.headX - pulse.length;
        else if (pulse.dir === 'left') tailX = pulse.headX + pulse.length;
        else if (pulse.dir === 'down') tailY = pulse.headY - pulse.length;
        else if (pulse.dir === 'up') tailY = pulse.headY + pulse.length;

        // Draw traveling circuit LINE with linear gradient (tail transparent -> head emerald green)
        const gradient = ctx.createLinearGradient(tailX, tailY, pulse.headX, pulse.headY);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0)');
        gradient.addColorStop(0.3, 'rgba(16, 185, 129, 0.35)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.95)');

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(pulse.headX, pulse.headY);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Triggered when line head reaches an intersection junction
    const onPulseArrived = (pulse: CircuitLinePulse, width: number, height: number) => {
      // Find the junction at current (headX, headY)
      const currentJunc = junctions.find(
        (j) => Math.abs(j.x - pulse.headX) < 3 && Math.abs(j.y - pulse.headY) < 3
      );

      if (currentJunc) {
        // Trigger junction green connection pulse!
        currentJunc.isPulsing = true;
        currentJunc.pulseRadius = 2;
        currentJunc.pulseAlpha = 1;
      }

      // Next turn: 90° turn or straight
      const allowedDirs: ('left' | 'right' | 'up' | 'down')[] = [];

      if (pulse.dir === 'right' || pulse.dir === 'left') {
        if (pulse.headY - step >= 0) allowedDirs.push('up');
        if (pulse.headY + step <= height) allowedDirs.push('down');
        // Chance to continue straight
        if (pulse.dir === 'right' && pulse.headX + step <= width) allowedDirs.push('right');
        if (pulse.dir === 'left' && pulse.headX - step >= 0) allowedDirs.push('left');
      } else {
        if (pulse.headX - step >= 0) allowedDirs.push('left');
        if (pulse.headX + step <= width) allowedDirs.push('right');
        // Chance to continue straight
        if (pulse.dir === 'down' && pulse.headY + step <= height) allowedDirs.push('down');
        if (pulse.dir === 'up' && pulse.headY - step >= 0) allowedDirs.push('up');
      }

      if (allowedDirs.length > 0) {
        pulse.dir = allowedDirs[Math.floor(Math.random() * allowedDirs.length)];
      } else {
        // Reverse direction
        if (pulse.dir === 'right') pulse.dir = 'left';
        else if (pulse.dir === 'left') pulse.dir = 'right';
        else if (pulse.dir === 'down') pulse.dir = 'up';
        else if (pulse.dir === 'up') pulse.dir = 'down';
      }

      // Set next target coordinate
      pulse.targetX = pulse.headX;
      pulse.targetY = pulse.headY;

      if (pulse.dir === 'right') pulse.targetX += step;
      else if (pulse.dir === 'left') pulse.targetX -= step;
      else if (pulse.dir === 'down') pulse.targetY += step;
      else if (pulse.dir === 'up') pulse.targetY -= step;
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      observer.unobserve(container);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
