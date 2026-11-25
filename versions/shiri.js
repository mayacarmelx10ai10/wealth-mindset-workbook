/* גרסה של שירי. רושמים כאן רק את מה ששונה מגרסת הבסיס (default.js), והשאר נשאר כמו שהוא.
   קישור: <כתובת האתר>/?v=shiri
   דוגמה, להסרת ההערות ולשינוי:
     welcome: { h1: 'שלום וברוכות הבאות', lead: '<p>הפסקה הראשונה</p><p>הפסקה השנייה</p>' },
     goals: { first: '', count: 3 },
     areas: [ { name: 'ניהול ההון האישי', icon: 'ri-coin-fill', fixed: true }, { name: 'בריאות', icon: 'ri-heart-fill' } ],
     coach: { email: 'המייל-של-שירי@example.com' },   // כאן שירי מכניסה את המייל שלה. אחרי זה מופיע כפתור "שליחה למאמן/ת" בסוף הדף
   רשימות (ניווט, תחומים, "מה להכין") מוחלפות בשלמותן, לא מתמזגות.
   כל המפתחות האפשריים מופיעים ב-default.js. */
window.VERSIONS = window.VERSIONS || {};
window.VERSIONS.shiri = {
  id: 'shiri'
};
