# AidMate 🎫

Discord.js v14 ile geliştirilmiş basit ve etkili Discord destek ticket sistemi botu. Discord sunucunuzda destek taleplerinizi yönetmek ve organize yardım kanalları oluşturmak için mükemmel.

![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-16%2B-green.svg)
![Lisans](https://img.shields.io/badge/Lisans-MIT-yellow.svg)

## ✨ Özellikler

- 🎫 **Kolay Ticket Oluşturma** - Kullanıcılar tek buton tıklamasıyla özel destek ticket'ları oluşturabilir
- 🔒 **Anti-Spam Koruması** - Spam önlemek için kullanıcı başına tek ticket sistemi
- ❌ **Hızlı Ticket Yönetimi** - Otomatik silme ile kolay ticket kapatma
- ⚡ **Modern Arayüz** - Discord.js v14 slash komutları ve etkileşimleri ile geliştirildi
- 🏷️ **Otomatik İsimlendirme** - Ticket'lar otomatik olarak `ticket-kullaniciadi` şeklinde isimlendirilir
- 🛡️ **İzin Kontrolü** - Özel kanallar sadece kullanıcı ve yetkililere görünür

## 🚀 Başlangıç

### Ön Gereksinimler

- Node.js 16.0.0 veya üzeri
- Discord Bot Token'ı
- Discord bot kurulumu hakkında temel bilgi

### Kurulum

1. **Projeyi klonlayın**
   ```bash
   git clone https://github.com/n1uta/AidMate.git
   cd AidMate
   ```

2. **Bağımlılıkları kurun**
   ```bash
   npm install
   ```

3. **Discord Uygulaması Oluşturun**
   - [Discord Developer Portal](https://discord.com/developers/applications) sitesine gidin
   - Yeni bir uygulama oluşturun
   - "Bot" bölümüne gidin
   - Bot token'ını kopyalayın

4. **Çevre değişkenlerini ayarlayın**
   
   Kök dizinde `.env` dosyası oluşturun:
   ```env
   DISCORD_TOKEN=buraya_bot_tokeninizi_yazin
   CLIENT_ID=buraya_client_id_yazin
   ```

5. **Komutları deploy edin**
   ```bash
   node deploy-commands.js
   ```

6. **Botu başlatın**
   ```bash
   node index.js
   ```

### Bot İzinleri

Botu sunucunuza davet ederken şu izinlere sahip olduğundan emin olun:
- ✅ Mesaj Gönder
- ✅ Slash Komutları Kullan
- ✅ Kanalları Yönet
- ✅ Kanalları Görüntüle
- ✅ İzinleri Yönet

## 📖 Kullanım

### Ticket Panelini Kurmak

1. İstediğiniz kanalda `/ticket` slash komutunu kullanın
2. Bot "🎫 Ticket Oluştur" butonu içeren bir embed oluşturacak

### Nasıl Çalışır?

1. **Kullanıcı "🎫 Ticket Oluştur" butonuna tıklar**
2. **Bot özel kanal oluşturur** - `ticket-kullaniciadi` adında
3. **Kullanıcı erişim kazanır** - Kendi özel destek kanalına
4. **Yetkililier yanıtlayabilir** ve kullanıcıya yardım edebilir
5. **"❌ Ticket'ı Kapat" butonuna tıklayın** - Kanal otomatik silinir

## 📁 Proje Yapısı

```
AidMate/
├── node_modules/           # Bağımlılıklar
├── .env                   # Çevre değişkenleri (bunu oluşturun)
├── deploy-commands.js     # Slash komut deploy'u
├── index.js              # Ana bot uygulaması
├── package-lock.json     # Bağımlılık kilit dosyası
├── package.json          # Proje yapılandırması
└── README.md             # Proje dokümantasyonu
```

## 🔧 Yapılandırma

Bot minimal yapılandırma ile çalışmaya hazırdır. Özelleştirebilecekleriniz:

- `index.js` dosyasında embed renkleri ve mesajları
- Ticket kanal kategorisi (kanal oluşturma mantığını değiştirin)
- Kapatılan ticket'lar için otomatik silme zamanlayıcısı
- Yetkili rolü izinleri

## 🛠️ Geliştirme

### Kullanılan Teknolojiler

- [Discord.js v14](https://discord.js.org/) - Discord API sarmalayıcısı
- [Node.js](https://nodejs.org/) - JavaScript çalışma ortamı
- [dotenv](https://www.npmjs.com/package/dotenv) - Çevre değişkeni yönetimi

## 📝 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 💬 Destek

Yardıma mı ihtiyacınız var veya sorularınız mı var?

- **Discord:** -n1uta
- **GitHub Issues:** [Issue oluştur](https://github.com/n1uta/AidMate/issues)
---

**Developed and Designed by [-n1uta](https://github.com/n1uta)**
