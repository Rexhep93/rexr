/* ═══════════════════════════════════════════════════════════════
   StreamGids Logo — Canvas renderer
   Draws the wordmark with retro TV as the dot of the i in "gids"
   Supports light and dark themes automatically
   ═══════════════════════════════════════════════════════════════ */

function drawRetroTVIcon(ctx, cx, cy, bodyColor, screenColor, scale) {
  var s = scale;
  ctx.strokeStyle = bodyColor;
  ctx.lineWidth = 1.6 * (s / 0.72);
  ctx.lineCap = 'round';

  ctx.beginPath(); ctx.moveTo(cx - 4*s, cy); ctx.lineTo(cx - 9*s, cy - 8*s); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx + 4*s, cy); ctx.lineTo(cx + 9*s, cy - 8*s); ctx.stroke();

  var bw = 19*s, bh = 14*s, bx = cx - bw/2, by = cy;
  ctx.fillStyle = bodyColor;
  ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 2.8*s); ctx.fill();

  ctx.fillStyle = screenColor;
  ctx.beginPath(); ctx.roundRect(bx + 1.8*s, by + 2*s, 12*s, 10*s, 1.8*s); ctx.fill();

  ctx.fillStyle = screenColor;
  ctx.globalAlpha = 0.6;
  ctx.beginPath(); ctx.arc(bx + bw - 2.8*s, by + 4.5*s, 1.2*s, 0, Math.PI*2); ctx.fill();
  ctx.globalAlpha = 0.45;
  ctx.beginPath(); ctx.arc(bx + bw - 2.8*s, by + 9.5*s, 0.9*s, 0, Math.PI*2); ctx.fill();
  ctx.globalAlpha = 1;
}

function drawStreamGidsLogo(canvas) {
  if (!canvas) return;
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  var streamColor = isDark ? '#f0f4f8' : '#1a202c';
  var gidsColor = isDark ? '#3bc45a' : '#30af4c';
  var screenColor = isDark ? '#1a1a1a' : '#ffffff';

  var ctx = canvas.getContext('2d');
  var dpr = window.devicePixelRatio || 2;
  var fontSize = 24;

  var streamFont = '700 ' + fontSize + 'px "DM Sans"';
  var gidsFont = '800 ' + fontSize + 'px "DM Sans"';

  ctx.font = streamFont;
  var streamW = ctx.measureText('stream').width;
  ctx.font = gidsFont;
  var gW = ctx.measureText('g').width;
  var giW = ctx.measureText('gi').width;
  var iW = giW - gW;
  var gidsW = ctx.measureText('gids').width;
  var totalW = streamW + gidsW;

  var h = fontSize * 1.5;
  canvas.style.width = (totalW + 10) + 'px';
  canvas.style.height = h + 'px';
  canvas.width = Math.ceil((totalW + 10) * dpr);
  canvas.height = Math.ceil(h * dpr);
  ctx.scale(dpr, dpr);

  var baseline = fontSize * 1.1;

  // "stream"
  ctx.font = streamFont;
  ctx.fillStyle = streamColor;
  ctx.fillText('stream', 0, baseline);

  // "g"
  ctx.font = gidsFont;
  ctx.fillStyle = gidsColor;
  ctx.fillText('g', streamW, baseline);

  // "i" stem only (clip the dot)
  var iX = streamW + gW;
  ctx.save();
  ctx.beginPath();
  ctx.rect(iX - 2, baseline - fontSize * 0.62, iW + 4, fontSize * 0.7);
  ctx.clip();
  ctx.fillStyle = gidsColor;
  ctx.fillText('i', iX, baseline);
  ctx.restore();

  // Retro TV as dot of i
  var tvCX = iX + iW / 2;
  var dotY = baseline - fontSize * 0.88;
  drawRetroTVIcon(ctx, tvCX, dotY, gidsColor, screenColor, fontSize * 0.015);

  // "ds"
  ctx.font = gidsFont;
  ctx.fillStyle = gidsColor;
  ctx.fillText('ds', streamW + giW, baseline);
}

/* Redraw logo when theme changes */
function refreshLogo() {
  var canvas = document.getElementById('headerLogo');
  if (canvas) drawStreamGidsLogo(canvas);
}
