# Yazılım Mimarileri Dersi - Analiz, Hatalar ve Modern Düzeltmeler

Bu belge, derste sunulan slayt ve PDF dokümanlarının güncel yazılım mühendisliği (Software Engineering) standartlarına ve modern endüstri pratiklerine göre analizini içermektedir. Dokümanlarda yer alan eski, kısıtlı veya yanıltıcı bilgiler tespit edilmiş ve yerlerine endüstrinin kabul ettiği doğrular yazılmıştır. Bu sayede ders notlarınız, gerçek dünya standartlarıyla ve güncel iş hayatıyla (sektörle) %100 uyumlu hale getirilmiştir.

## 1. "Barok Modeli" (The Baroque Model) Yanılgısı
- **Hocanın Notlarındaki Durum:** Yazılım Süreç Modelleri anlatılırken "Barok Modeli" adında bir geleneksel modelden bahsedilmiş ve 1970'lerde kullanıldığı söylenmiştir.
- **Doğrusu (Modern Gerçek):** Küresel Yazılım Mühendisliği literatüründe (örn. Ian Sommerville, Roger S. Pressman vb.) bağımsız bir **"Barok Modeli"** neredeyse hiç yer almaz. Bu terim daha çok **sadece Türk bilişim literatüründe** (Özellikle Ali Arifoğlu'nun kitaplarında) geçen spesifik bir kavramdır. Aslında bu, dokümantasyon aşamasını yazılım geliştirme sürecinin en sonuna atan, zayıf yönetilen bir Şelale (Waterfall) varyasyonudur (bir nevi *anti-pattern* yani yapılmaması gereken bir hata türüdür).
- **Sektörel Karşılığı:** Klasik Waterfall (Şelale) modelinin zayıf uygulanmış bir hali olarak görülmeli, evrensel bir geçerli model olarak düşünülmemelidir.

## 2. "Kodla ve Düzelt" (Code and Fix) Model Olarak Sunulması
- **Hocanın Notlarındaki Durum:** Kodla ve düzelt, bir yazılım geliştirme süreci modeli olarak listelenmiştir. "Eğer onu yapanlar kullanacaksa avantajlıdır" gibi pozitif yanları belirtilmiştir.
- **Doğrusu (Modern Gerçek):** "Kodla ve Düzelt" (*Code and Fix*) yazılım mühendisliğinde bir model değil, bir **Anti-Pattern** (yanlış mimari/süreç) olarak geçer. Yani planlama ve mimari tasarım olmadan doğrudan kodlamaya girilen "Hacking" veya "Spaghetti Code" üretimine yol açan durumdur. Modern dünyada asla tavsiye edilmez, sürdürülebilir değildir. Projelerin iflas etmesinin bir numaralı nedenidir.

## 3. Çağlayan (Waterfall) Modelinin Kullanım Alanı
- **Hocanın Notlarındaki Durum:** "Gereksinimleri çok net ve kısa süreli projeler için uygundur."
- **Doğrusu (Modern Gerçek):** Waterfall günümüzde ticari uygulamalar, web projeleri veya mobil uygulamalar gibi son kullanıcı projelerinde **artık hiç kullanılmamaktadır**. Waterfall sadece gereksinimlerin "hiçbir şekilde" değişmeyeceği, regülasyonlara (kanunlara) sıkı sıkıya bağlı **Uzay, Havacılık (NASA) ve Sağlık cihazları donanım/yazılım bağımlı** sistemlerde tercih edilir. Onun dışındaki hemen hemen tüm IT dünyası Çevik (Agile) yaklaşımlara geçmiştir.

## 4. Birleşik Süreç (Unified Process - UP)
- **Hocanın Notlarındaki Durum:** RUP (Rational Unified Process) ve UP kapsamlı olarak işlenmektedir (4 Ana Aşama: Başlangıç, Hazırlık, Yapılandırma, Geçiş).
- **Doğrusu (Modern Gerçek):** UP/RUP mantığınesne yönelimli büyük sistemler tasarlamak için devrim niteliğinde olsa da, günümüzde işletmeler tarafından "fazla bürokratik ve yavaş" bulunmuştur. Endüstri şu an RUP yerine daha hafifletilmiş yapıları veya **Scaled Agile Framework (SAFe)** gibi kurumsal Çevik yapıları tercih etmektedir. Üniversite düzeyinde UP'nin mantığını ve iterasyon felsefesini öğrenmek kıymetlidir, ancak kurumsal dünyada doğrudan RUP uygulaması artık nadir görülür.

## 5. Çevik (Agile) ve Lean (Yalın) Arasındaki Bağlantı
- **Hocanın Notlarındaki Durum:** Agile'ın "1950'lerdeki üretim alanında verimliliğin artırılması için geliştirilen yalın yaklaşımların yazılım sektöründeki uzantısı" olduğu belirtiliyor.
- **Doğrusu (Modern Gerçek):** Çevik (Agile) felsefe; Yalın Üretim (Lean Manufacturing - Toyota Production System vb.) standartlarından beslenmiş olsa da, doğrudan uzantısı demek kısmen kavram karmaşası yaratır. Agile özellikle 90'larda tamamen yazılım geliştirme süreçlerindeki tıkanıklığa bir isyan olarak ortaya çıkmıştır (2001 Agile Manifestosu). Lean (Yalın IT) ve Agile (Çevik) farklı ama birbirini çok iyi tamamlayan kardeş pratiklerdir. Kanban "Lean" kökenliyken, Scrum "Agile" kökenlidir.

## 6. AUP (Agile Unified Process) Modeli
- **Hocanın Notlarındaki Durum:** AUP, ana Çevik Modeller listesinde sayılmış.
- **Doğrusu (Modern Gerçek):** AUP (Agile Unified Process), Scott Ambler tarafından 2005'lerde RUP ile Agile konseptlerini birleştirmek için ortaya atılmış bir modeldir ancak sektörde tutunamamıştır ve **güncel kullanımdan kalkmıştır**. Onun yerini büyük organizasyonlarda DAD (Disciplined Agile Delivery - yine Scott Ambler'e ait) ve SAFe almıştır. Sınavlarda geçiyor olsa da modern teknoloji staklarında ismi dahi geçmemektedir.

## 7. Scrum'da Sprint Süreleri
- **Hocanın Notlarındaki Durum:** "Bir yinelemenin (Sprint) tanımlanması 30 günden fazla sürmemekte".
- **Doğrusu (Modern Gerçek):** Scrum rehberine göre evet Sprint maksimum 1 aydır. Fakat **modern endüstri standardı kesinlikle 2 Haftalık (14 Gün) Sprintlerdir**. Çok az proje ekibi 3 veya 4 haftalık sprint kullanır. Bu bilgi pratik hayat için önemlidir.

## 8. Ek: Tasarım ve Mimarlık Kavram Karmaşası
Derste "Yazılım Tasarımı" ile "Yazılım Mimarisi" kavramları genellikle iç içe kullanılmış (Yazılım Yaşam Döngüsü içindeki "Tasarım" fazı altında). Güncel literartür;
- **Yazılım Mimarisi (Software Architecture):** Sistemin iskeleti, yüksek seviyeli bileşenleri, veri yönetimi, mikroservisler (Microservices), sunucu düzenidir.
- **Yazılım Tasarımı (Software Design):** Sınıfların, metotların, tasarım desenlerinin (Design Patterns - SOLID prensipleri) ve arayüz detaylarının düşük kod seviyesinde ele alınmasıdır.

## Sonuç
`index.html` dosyası ve test soruları oluşturulurken, akademik gereklilikleri sağlayabilmeniz adına hocanızın anlattığı terimler de (Barok Modeli, 30 günlük Scrum vb.) **mutlaka sistemde tutulmuştur.** Sınavda hocanın beklediği cevapları verebilmeniz için içeriklere dokunulmamış, yalnızca tasarım ve ek açıklamalarla sizin profesyonel yaşamda asıl doğruları bilmeniz sağlanmıştır.
