const results = [];

let currentQ = 0;
let score = 0;
let timerTimeout = null;
let activeQuestions = [];
let adShown = false;
let adTimeout = null;

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startQuiz() {
  document.getElementById('intro-bg').classList.add('hidden');
  score = 0;
  currentQ = 0;
  adShown = false;
  
  // Filter out missing images and pick 10 random questions
  const validQuestions = questions.filter(q => q.image !== 'q9.png' && q.image !== 'q37.png');
  const shuffled = [...validQuestions].sort(() => 0.5 - Math.random());
  activeQuestions = shuffled.slice(0, 10);
  
  showScreen('quiz');
  renderQuestion(currentQ);
}

function renderQuestion(idx) {
  const q = activeQuestions[idx];
  
  // 更新進度
  const _ui = window.__i18n.ui[window.__lang || 'zh-TW'];
  document.getElementById('q-count').textContent = _ui.q_count(idx + 1, activeQuestions.length);
  const pct = Math.round((idx / activeQuestions.length) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  
  // 重置圖片與計時器動畫
  const imgWrapper = document.getElementById('image-wrapper');
  const timerFill = document.getElementById('timer-fill');
  
  imgWrapper.classList.remove('hidden');
  const imgEl = document.getElementById('q-illust');
  imgEl.src = q.image;
  
  const scale = 2.2 + Math.random() * 1.0; // 放大 2.2 到 3.2 倍，避免過度放大導致模糊
  const originX = 30 + Math.random() * 40;
  const originY = 55 + Math.random() * 30;
  imgEl.style.transform = `scale(${scale})`;
  imgEl.style.transformOrigin = `${originX}% ${originY}%`;
  
  timerFill.classList.remove('timer-anim');
  void timerFill.offsetWidth;
  timerFill.classList.add('timer-anim');
  
  // 渲染選項
  const wrap = document.getElementById('options-wrap');
  wrap.innerHTML = '';
  
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i, btn);
    wrap.appendChild(btn);
  });
  
  clearTimeout(timerTimeout);
  timerTimeout = setTimeout(() => {
    if (!imgWrapper.classList.contains('hidden')) {
      imgWrapper.classList.add('hidden');
    }
  }, 600);
}

function checkAnswer(selectedIndex, btnElement) {
  const q = activeQuestions[currentQ];
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);
  
  const correctIndex = q.options.indexOf(q.name);
  const isCorrect = selectedIndex === correctIndex;
  
  if (isCorrect) {
    score++;
    btnElement.classList.add('correct');
  } else {
    btnElement.classList.add('wrong');
    buttons[correctIndex].classList.add('correct');
  }
  
  clearTimeout(timerTimeout);
  document.getElementById('image-wrapper').classList.add('hidden');
  
  setTimeout(() => {
    if (currentQ < activeQuestions.length - 1) {
      currentQ++;
      renderQuestion(currentQ);
    } else {
      showResult();
    }
  }, 1000);
}

// === 插頁廣告邏輯 ===
function showAdInterstitial() {
  const el = document.getElementById('ad-interstitial');
  if (!el) return;
  el.style.display = 'flex';
  const closeBtn = el.querySelector('.ad-inter-close');
  closeBtn.disabled = true;
  closeBtn.textContent = '5';
  closeBtn.style.cursor = 'not-allowed';
  closeBtn.style.opacity = '0.5';
  let count = 5;
  const timer = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(timer);
      closeBtn.textContent = '✕';
      closeBtn.disabled = false;
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.opacity = '1';
    } else {
      closeBtn.textContent = count;
    }
  }, 1000);
}

function closeAdInterstitial() {
  const el = document.getElementById('ad-interstitial');
  if (!el) return;
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.3s';
  setTimeout(() => {
    el.style.display = 'none';
    el.style.opacity = '1';
    el.style.transition = '';
  }, 300);
}

function showResult() {
  document.getElementById('res-score').textContent = score;
  
  let img = '';
  let desc = '';
  const _resultTexts = window.__i18n.resultText[window.__lang || 'zh-TW'];
  
  if (score === 10) {
    img = 'moogle.png';
    desc = _resultTexts[10];
  } else if (score >= 8) {
    img = 'q7.png';
    desc = _resultTexts[8];
  } else if (score >= 6) {
    img = 'q2.png';
    desc = _resultTexts[6];
  } else if (score >= 3) {
    img = 'q13.png';
    desc = _resultTexts[3];
  } else {
    img = 'q8.png';
    desc = _resultTexts[0];
  }
  
  document.getElementById('result-hero-img').src = img;
  document.getElementById('res-desc').textContent = desc;
  
  showScreen('result');
  
  // 3 秒後自動彈出插頁廣告 (只觸發一次)
  if (!adShown) {
    adShown = true;
    adTimeout = setTimeout(() => {
      if (typeof showAdInterstitial === 'function') {
        showAdInterstitial();
      }
    }, 3000);
  }
}

function resetQuiz() {
  if (adTimeout) clearTimeout(adTimeout);
  showScreen('intro');
  document.getElementById('intro-bg').classList.remove('hidden');
}

(function initParticles() {
  const container = document.getElementById('bg-particles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = '3px';
    star.style.height = '3px';
    star.style.background = '#fff';
    star.style.borderRadius = '50%';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.opacity = Math.random();
    container.appendChild(star);
  }
})();

// ── 偵測環境 ──
function isLineIAB() { return /Line/i.test(navigator.userAgent); }
function isMobile() { return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent); }

// ── 跨瀏覽器複製文字（含 LINE IAB fallback）──
function copyTextFallback(str) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(str).catch(() => execCopyFallback(str));
  }
  return execCopyFallback(str);
}
function execCopyFallback(str) {
  return new Promise((resolve) => {
    const ta = document.createElement('textarea');
    ta.value = str;
    ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(ta);
    resolve();
  });
}

function openUrl(url) { window.open(url, '_blank'); }

// ── 分享功能 ──
function shareTo(platform) {
  const url = window.location.href;
  
  const lang = window.__lang || 'zh-TW';
  let text = '';
  if (lang === 'zh-TW') {
    text = `【FF14 光之戰士火眼金睛挑戰】\n我答對了 ${score} 題！\n你能靠局部配件認出所有的角色嗎？`;
  } else {
    text = `[FF14 Hawk Eye Challenge]\nI scored ${score}/10!\nCan you recognize the characters from their tiny details?`;
  }
  
  const fullText = encodeURIComponent(text + '\n' + url);

  if (platform === 'copy') {
    copyTextFallback(text + '\n' + url).then(() => {
      showShareToast(lang === 'zh-TW' ? '✅ 已複製到剪貼簿！' : '✅ Copied to clipboard!');
    });
    return;
  }

  if (platform === 'ig') {
    copyTextFallback(text + '\n' + url).then(() => {
      showShareToast(lang === 'zh-TW' ? '📸 文字已複製！請到 IG 限動或貼文手動貼上' : '📸 Text copied! Paste it in your IG story/post.');
      setTimeout(() => {
        if (isMobile()) { window.location.href = 'instagram://app'; }
        else { openUrl('https://www.instagram.com/'); }
      }, 600);
    });
    return;
  }

  let shareUrl = '';
  switch (platform) {
    case 'line':
      if (isMobile()) {
        shareUrl = `line://msg/text/${encodeURIComponent(text + '\n' + url)}`;
      } else if (isLineIAB()) {
        shareUrl = `https://line.me/R/share?text=${fullText}`;
      } else {
        shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
      }
      break;
    case 'threads':
      shareUrl = `https://www.threads.net/intent/post?text=${fullText}`;
      break;
    case 'fb':
      if (isMobile()) {
        window.location.href = `fb://share/?link=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
        setTimeout(() => {
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
        }, 1500);
        return;
      }
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
      break;
  }
  if (shareUrl) {
    if (platform === 'line' && isMobile()) {
      window.location.href = shareUrl;
    } else {
      openUrl(shareUrl);
    }
  }
}

function showShareToast(msg) {
  let toast = document.getElementById('share-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'share-toast';
    toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(13,13,26,0.95);border:1px solid rgba(212,175,55,0.3);color:#fff;padding:14px 24px;border-radius:16px;font-size:14px;z-index:9999;opacity:0;transition:all 0.3s;backdrop-filter:blur(12px);text-align:center;max-width:320px;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 4000);
}

// ── 結果圖儲存 (html2canvas) ──
let _saving = false;
async function saveResultImage() {
  if (_saving) return;
  if (typeof html2canvas === 'undefined') {
    showShareToast('Error: html2canvas is not loaded');
    return;
  }

  _saving = true;
  const btn = document.querySelector('.share-save');
  const origHTML = btn.innerHTML;
  btn.innerHTML = '...';
  btn.disabled = true;

  try {
    const card = document.getElementById('result-card');
    
    // Hide buttons and ads temporarily
    const actionBtns = card.querySelector('.action-buttons');
    const shareBtns = card.querySelector('.share-buttons');
    const inlineAd = card.querySelector('.result-inline-ad');
    if (actionBtns) actionBtns.style.display = 'none';
    if (shareBtns) shareBtns.style.display = 'none';
    if (inlineAd) inlineAd.style.display = 'none';

    // Fix scaling to improve clarity
    const canvas = await html2canvas(card, { 
      backgroundColor: '#141423',
      scale: 2, // High resolution
      useCORS: true,
      ignoreElements: (element) => {
        if (element.classList && element.classList.contains('result-inline-ad')) {
          return true;
        }
        return false;
      }
    });

    // Restore buttons and ads
    if (actionBtns) actionBtns.style.display = '';
    if (shareBtns) shareBtns.style.display = '';
    if (inlineAd) inlineAd.style.display = '';

    if (isLineIAB() || isMobile()) {
      const dataUrl = canvas.toDataURL('image/png');
      showImageOverlay(dataUrl);
    } else {
      downloadCanvasImage(canvas, 'ff14_quiz_result.png');
      showShareToast(window.__lang === 'zh-TW' ? '✅ 已儲存圖片！' : '✅ Image saved!');
    }
  } catch (e) {
    console.error(e);
    alert("html2canvas error: " + e.message);
    showShareToast(window.__lang === 'zh-TW' ? '⚠️ 圖片儲存失敗，請手動截圖' : '⚠️ Failed to save image, please screenshot');
    
    // Ensure buttons are restored even on failure
    const card = document.getElementById('result-card');
    const actionBtns = card.querySelector('.action-buttons');
    const shareBtns = card.querySelector('.share-buttons');
    const inlineAd = card.querySelector('.result-inline-ad');
    if (actionBtns) actionBtns.style.display = '';
    if (shareBtns) shareBtns.style.display = '';
    if (inlineAd) inlineAd.style.display = '';
  } finally {
    _saving = false;
    btn.innerHTML = origHTML;
    btn.disabled = false;
  }
}

function downloadCanvasImage(canvas, filename) {
  try {
    canvas.toBlob(function(blob) {
      if (!blob) { fallbackDataURLDownload(canvas, filename); return; }
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(blobUrl); }, 500);
    }, 'image/png');
  } catch(e) {
    fallbackDataURLDownload(canvas, filename);
  }
}

function fallbackDataURLDownload(canvas, filename) {
  const dataUrl = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { document.body.removeChild(a); }, 500);
}

function showImageOverlay(dataUrl) {
  const old = document.getElementById('img-overlay');
  if (old) old.remove();

  const overlay = document.createElement('div');
  overlay.id = 'img-overlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;';
  
  const lang = window.__lang || 'zh-TW';
  const hintText = lang === 'zh-TW' ? '📸 請長按圖片儲存' : '📸 Long press image to save';
  const backText = lang === 'zh-TW' ? '← 返回' : '← Back';

  overlay.innerHTML = `
    <img src="${dataUrl}" alt="結果圖" style="max-width:92%;max-height:70vh;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.5);">
    <p style="color:#ccc;margin-top:20px;font-size:15px;">${hintText}</p>
    <button onclick="document.getElementById('img-overlay').remove()" style="margin-top:16px;color:#d4af37;font-size:14px;background:none;border:1px solid rgba(212,175,55,0.4);border-radius:999px;padding:12px 24px;cursor:pointer;">${backText}</button>
  `;
  document.body.appendChild(overlay);
}
