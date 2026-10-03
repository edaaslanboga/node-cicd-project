 nano src/server.js

  İçindeki eski kodu silip şunu yaz:

  const app = require("./app");

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
  });

  Kaydet ve çık.

  Buradaki önemli satır:

  const app = require("./app");

  app.js dosyasındaki Express uygulamasını içeri aktarır.

