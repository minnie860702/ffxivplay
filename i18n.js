window.__lang = (function() {
  try { return localStorage.getItem('ff14-quiz-lang') || 'zh-TW'; } catch(e) { return 'zh-TW'; }
})();

window.__i18n = {
  ui: {
    'zh-TW': {
      badge: '👁️ 局部猜謎遊戲',
      intro_title: 'FF14 光之戰士<br>火眼金睛挑戰',
      intro_sub: '只要截取一小部分，你還能認出他們嗎？<br>圖片只會出現 <strong>0.6 秒</strong>，請睜大眼睛！',
      btn_start: '接受挑戰',
      q_count: function(n, total) { return `第 ${n} 題 / 共 ${total} 題`; },
      q_text: '這是哪位角色的局部？',
      q_hint: '抓緊時間，圖片即將消失！',
      hidden_overlay: '時間到！請作答',
      result_score_title: '挑戰結束',
      btn_retry: '再挑戰一次',
      ad_title: '為您結算成績中...',
      ad_timer: function(n) { return `將在 <span id="ad-sec" style="color:var(--accent); font-weight:bold;">${n}</span> 秒後顯示結果`; }
    },
    'en': {
      badge: '👁️ Detail Guessing Quiz',
      intro_title: 'FF14 Warrior of Light<br>Hawk Eye Challenge',
      intro_sub: 'Can you recognize them from just a tiny detail?<br>The image appears for only <strong>0.6s</strong>, don\'t blink!',
      btn_start: 'Accept Challenge',
      q_count: function(n, total) { return `Question ${n} / ${total}`; },
      q_text: 'Whose detail is this?',
      q_hint: 'Hurry, the image will disappear!',
      hidden_overlay: 'Time\'s up! Choose your answer',
      result_score_title: 'Challenge Complete',
      btn_retry: 'Try Again',
      ad_title: 'Calculating your results...',
      ad_timer: function(n) { return `Showing results in <span id="ad-sec" style="color:var(--accent); font-weight:bold;">${n}</span>s`; }
    }
  },
  resultText: {
    'zh-TW': {
      10: '「庫啵！太神了！你絕對是海德林首屈一指的光之戰士，沒有任何細節能逃過你的法眼庫啵！」',
      8: '「真不愧是我的朋友！對大家的觀察非常敏銳，只差一點點就完美了呢！」',
      6: '「雖然還有進步的空間，但已經做得很好了。這趟旅程的見聞，想必都深深刻在你的腦海中吧。」',
      3: '「就這點程度嗎？連這點細節都記不住，真是令人失望啊，殘缺不全的人類。」',
      0: '「看來你需要回石之家重新複習一下大家的情報了的說！不准偷懶喔！」'
    },
    'en': {
      10: '"Kupo! Amazing! You\'re definitely Hydaelyn\'s finest Warrior of Light, no detail escapes your eyes kupo!"',
      8: '"As expected of my friend! Your observation skills are sharp, just a little more to perfection!"',
      6: '"There\'s room for improvement, but you did well. The sights of our journey must be etched in your mind."',
      3: '"Is that all? To not even remember these details... how disappointing, you fragmented human."',
      0: '"Looks like you need to head back to the Rising Stones to review everyone\'s intel! No slacking off!"'
    }
  }
};

window.setLanguage = function(lang) {
  if (!window.__i18n.ui[lang]) return;
  window.__lang = lang;
  try { localStorage.setItem('ff14-quiz-lang', lang); } catch(e) {}

  // 更新切換按鈕 active 狀態
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  var ui = window.__i18n.ui[lang];

  // HTML（含 <br> <span> 的欄位）用 innerHTML
  ['intro_title', 'intro_sub'].forEach(function(key) {
    var el = document.querySelector('[data-i18n="' + key + '"]');
    if (el) el.innerHTML = ui[key];
  });

  // 純文字欄位用 textContent
  ['badge', 'btn_start', 'q_text', 'q_hint', 'hidden_overlay', 'result_score_title', 'btn_retry', 'ad_title'].forEach(function(key) {
    document.querySelectorAll('[data-i18n="' + key + '"]').forEach(function(el) {
      el.textContent = ui[key];
    });
  });

  // 進度保留：重新渲染當前畫面
  var quizActive = document.getElementById('screen-quiz')?.classList.contains('active');
  var resultActive = document.getElementById('screen-result')?.classList.contains('active');

  if (quizActive && typeof renderQuestion === 'function' && typeof currentQ !== 'undefined') {
    // Only update the question count text dynamically without resetting the whole screen
    document.getElementById('q-count').textContent = ui.q_count(currentQ + 1, activeQuestions.length);
  }
  
  if (resultActive && typeof showResult === 'function') {
    showResult(); // Re-render the result screen
  }
};

document.addEventListener('DOMContentLoaded', function() {
  if (typeof setLanguage === 'function') setLanguage(window.__lang || 'zh-TW');
});
