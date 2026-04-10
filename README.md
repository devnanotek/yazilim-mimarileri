# 🎓 Yazılım Tasarım ve Mimarisi - Sınav Hazırlık Platformu

Bu proje, Mardin Artuklu Üniversitesi Bilgisayar Programcılığı "Yazılım Mimarileri" dersi kapsamında, öğrencilerin vize ve final sınavlarına interaktif, modern ve verimli bir şekilde hazırlanmalarını sağlamak amacıyla **İslam ERGÜN** tarafından tasarlanmış ve geliştirilmiştir. 

Platformun akademik altyapısı, dersin sorumlu akademisyeni **Öğr. Gör. Merve BABAOĞLU** tarafından sunulan eğitim materyalleri referans alınarak oluşturulmuştur. Bu doğrultuda, paylaşılan akademik veriler endüstri standartları gözetilerek doğrulanmış (Fact-Checked) ve teknoloji sektöründeki güncel pratiklerle harmanlanarak sistem içerisine entegre edilmiştir.

## 🚀 Proje Hakkında

Tamamen modern web teknolojileri kullanılarak hazırlanan bu projede, karmaşık eğitim içerikleri (PDF, TXT vb.) dinamik ve okunması kolay, interaktif UI/UX bileşenleri ile sunulmaktadır. Ayrıca bilgileri pekiştirmek için kapsamlı bir "Sınav Test Simülatörü" modülü mevcuttur.

İki temel sayfadan oluşur:
- **`index.html` (Ders Çalışma Alanı):** Yazılım mimarileri, süreç modelleri ve çevik yaklaşımların tüm notlarının yer aldığı Responsive öğrenme merkezi.
- **`test.html` (Test Platformu):** Konuların pekiştirilmesi için özel algoritma ve detaylı cevap açıklamalarıyla donatılmış interaktif sınav alanı.

### 💡 Modern Web Deneyimi & Sektör Gerçekleri
Uygulama içerisinde **Sektör Gerçeği ⚠️** adlı özel uyarı kutucukları ile akademik müfredatta yer alan ancak sektörde artık kullanılmayan eski yaklaşımlar (örneğin Barok modeli veya Kodla-Düzelt yöntemi) işaretlenmiş ve öğrencilerin sadece sınavı geçmeleri değil, gerçek iş dünyası (IT sektörüne) hazır olmaları da hedeflenmiştir. 

Bununla ilgili detaylı akademik düzeltme raporuna ana dizindeki `hatalar_ve_duzeltmeler.md` belgesinden ulaşabilirsiniz.

## 🛠 Kullanılan Teknolojiler

Proje hiçbir ağır kütüphane bağımlılığı olmadan, olabildiğince hafif, güvenli ve performanslı tutulmuştur:
- **HTML5:** Semantik ağ yapıları ve erişilebilirlik.
- **CSS3 (`style.css`):** Projenin tüm genel stil, arayüz, glassmorphism vb. tasarımlarının tutulduğu ana CSS dosyası. Koyu (Dark) tema desteği ve CSS Grid / Flexbox ile **%100 Full Responsive** görünüm sunar.
- **JavaScript (`style.js`):** Test sayfasındaki tüm filtreleme, ilerleme takibi ve puan algoritmalarının, yani işin fonksiyonel zekasının çalıştığı script dosyasıdır.
- *(Tasarım başlangıçta Bootstrap/jQuery gibi kütüphanelere uygun altyapıda düşünülse de, maksimum optimizasyon ve harika UI kontrolü için tamamen saf frontend teknolojileri ile kodlanmıştır.)*

## 📱 Sorumlu Olunan Konular
Müfredatta geçen ve bu projede detaylıca analiz edilip test soruları oluşturulan konular:
1. Yazılım Nedir? / Yaşam Döngüsü
2. Yazılım Süreç Modelleri (Çağlayan, Helezonik, Evrimsel, Artırımsal vb.)
3. Birleşik Süreç (Unified Process - UP)
4. Çevik (Agile) Geliştirme Manifestosu ve Çevik Modeller
5. Uçdeğer Programlama (XP)
6. Scrum Geliştirme (Sprint, Daily Standup Rollere vb.)
7. FDD, AUP, ASD ve DSDM
8. IEEE/IEA 12207 Standartları

## ⚙️ Kurulum ve Kullanım

Sistemi kullanmak için ekstra bir sunucuya, veritabanına veya derleyiciye ihtiyacınız yoktur. Proje statik dosyalardan oluşur.
1. Projeyi ZIP olarak indirin ya da `git clone` ile bilgisayarınıza çekin.
2. Sadece `index.html` dosyasına çift tıklayarak modern web tarayıcınızda (Chrome, Safari, Edge vb.) açın.
3. Menüdeki yönlendirmeleri kullanarak konu anlatımları ve "Teste Git" özelliklerini keşfedin.

---
*Geliştirici: İslam ERGÜN*  
*Mardin Artuklu Üniversitesi - Bilgisayar Programcılığı*
