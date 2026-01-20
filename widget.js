{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /**\
 * News24 AI Companion v2.0\
 * Hosted on GitHub | Delivered via jsDelivr\
 */\
(function() \{\
    const initN24Widget = () => \{\
        const mountPoint = document.getElementById('news24-ai-companion');\
        if (!mountPoint || !window.n24AIContext || mountPoint.dataset.loaded) return;\
\
        // 1. Inject Glassmorphism & Branding Styles\
        const styles = document.createElement('style');\
        styles.textContent = `\
            :root \{ --n24-blue: #1846C0; --n24-glass: rgba(255, 255, 255, 0.95); \}\
            .n24-widget \{ border: 1px solid rgba(24, 70, 192, 0.15); border-radius: 14px; background: var(--n24-glass); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05); overflow: hidden; font-family: 'Inter', sans-serif; margin: 2rem 0; backdrop-filter: blur(10px); transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); \}\
            .n24-header \{ padding: 18px 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #fff; \}\
            .n24-badge \{ background: var(--n24-blue); color: #fff; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 5px; margin-right: 12px; letter-spacing: 0.05em; \}\
            .n24-title \{ font-weight: 700; color: #111; font-size: 16px; \}\
            .n24-indicator \{ width: 10px; height: 10px; background: var(--n24-blue); border-radius: 50%; display: inline-block; margin-right: 10px; animation: n24-pulse 2s infinite; \}\
            .n24-body \{ max-height: 0; opacity: 0; padding: 0 24px; transition: all 0.6s ease; background: #fdfdff; \}\
            .n24-expanded .n24-body \{ max-height: 1200px; opacity: 1; padding: 20px 24px 24px; border-top: 1px solid #eee; \}\
            .n24-text \{ color: #334; line-height: 1.8; font-size: 15.5px; \}\
            .n24-footer \{ margin-top: 20px; font-size: 10px; color: #888; border-top: 1px dashed #ddd; padding-top: 15px; letter-spacing: 0.5px; text-transform: uppercase; \}\
            @keyframes n24-pulse \{ 0% \{ transform: scale(0.9); opacity: 0.7; \} 50% \{ transform: scale(1.1); opacity: 1; \} 100% \{ transform: scale(0.9); opacity: 0.7; \} \}\
        `;\
        document.head.appendChild(styles);\
\
        // 2. Build Component HTML\
        mountPoint.innerHTML = `\
            <div class="n24-widget" id="n24-container">\
                <div class="n24-header" id="n24-trigger">\
                    <div style="display:flex; align-items:center;">\
                        <span class="n24-indicator"></span>\
                        <span class="n24-badge">AI COMPANION</span>\
                        <span class="n24-title">$\{window.n24AIContext.title\}</span>\
                    </div>\
                    <span id="n24-icon" style="transition: 0.3s;">\uc0\u9660 </span>\
                </div>\
                <div class="n24-body">\
                    <div class="n24-text" id="n24-typing-target"></div>\
                    <div class="n24-footer">\
                        <b>News24 Intelligence Engine</b> \'95 Editorial Reviewed for Accuracy\
                    </div>\
                </div>\
            </div>\
        `;\
\
        // 3. Expansion & Typewriter Logic\
        let started = false;\
        const trigger = document.getElementById('n24-trigger');\
        trigger.addEventListener('click', () => \{\
            const container = document.getElementById('n24-container');\
            container.classList.toggle('n24-expanded');\
            document.getElementById('n24-icon').style.transform = container.classList.contains('n24-expanded') ? 'rotate(180deg)' : 'rotate(0deg)';\
            \
            if (!started) \{\
                const text = window.n24AIContext.content;\
                const target = document.getElementById('n24-typing-target');\
                let i = 0;\
                const type = () => \{\
                    if (i < text.length) \{\
                        target.innerHTML += text.charAt(i);\
                        i++;\
                        setTimeout(type, 12); // Premium fast typing speed\
                    \}\
                \};\
                type();\
                started = true;\
            \}\
        \});\
        mountPoint.dataset.loaded = "true";\
    \};\
\
    if (document.readyState === 'loading') \{\
        document.addEventListener('DOMContentLoaded', initN24Widget);\
    \} else \{\
        initN24Widget();\
    \}\
\})();}