const allQuestions = [
  // ===== YAZILIM GENELİ =====
  {
    topic:'models',
    cat:'Yazılım Temelleri',
    catColor:'rgba(245,158,11,.15)',catTxt:'#fbbf24',
    q:'Yazılım kaç ana bileşenden oluşur?',
    opts:['3','4','5','6'],
    ans:2,
    exp:'Yazılım 5 ana bileşenden oluşur: Mantık (Algoritma), Veri, Belge, İnsan ve Program (Kod).'
  },
  {
    topic:'models',
    cat:'Yazılım Temelleri',
    catColor:'rgba(245,158,11,.15)',catTxt:'#fbbf24',
    q:'Analiz aşamasındaki bir hatanın maliyeti "1" birim ise, işletim aşamasında bu maliyet ne kadar olabilir?',
    opts:['10 birim','50 birim','100 birim','1000 birim'],
    ans:2,
    exp:'Yazılımda bir hata ne kadar geç fark edilirse düzeltme maliyeti o kadar artar. Analiz aşamasındaki "1" birimlik hata, işletim aşamasında "100" birime kadar çıkabilir.'
  },
  {
    topic:'models',
    cat:'Süreç Modelleri',
    catColor:'rgba(6,182,212,.15)',catTxt:'#22d3ee',
    q:'Risk analizinin en güçlü olduğu yazılım süreç modeli hangisidir?',
    opts:['Çağlayan (Waterfall)','V Modeli','Helezonik (Spiral)','Prototipleme'],
    ans:2,
    exp:'Helezonik (Spiral) model, risk odaklıdır. Her döngüde prototip ve risk analizi yapılır. En riskli kısımlar önce çözülür.'
  },
  {
    topic:'models',
    cat:'Süreç Modelleri',
    catColor:'rgba(6,182,212,.15)',catTxt:'#22d3ee',
    q:'Çağlayan (Waterfall) modeli hangi tür projeler için en uygundur?',
    opts:['Gereksinimleri belirsiz projeler','Gereksinimleri çok net ve kısa süreli projeler','Büyük ve riskli projeler','Kullanıcı arayüzü yoğun uygulamalar'],
    ans:1,
    exp:'Çağlayan modelinde her aşama biter, onaylanır ve bir sonrakine geçilir. Bu nedenle gereksinimleri çok net olan ve kısa süreli projelerde en uygun modeldir.'
  },
  {
    topic:'models',
    cat:'Süreç Modelleri',
    catColor:'rgba(6,182,212,.15)',catTxt:'#22d3ee',
    q:'Prototipleme modeli hangi tür projeler için en uygundur?',
    opts:['Büyük kritik projeler','Kamu ihaleli projeler','Kullanıcı arayüzü (UI) yoğun uygulamalar','Tek kişilik projeler'],
    ans:2,
    exp:'Prototipleme modelinde hızlıca geçici bir model oluşturulup müşteri onayı alınır. Yanlış anlamaları önler ve gereksinimleri netleştirir. UI yoğun projeler için idealdir.'
  },
  {
    topic:'models',
    cat:'Süreç Modelleri',
    catColor:'rgba(6,182,212,.15)',catTxt:'#22d3ee',
    q:'Birleşik Süreç (Unified Process), hangi iki klasik modelin modern hali olarak kabul edilir?',
    opts:['Çağlayan ve V Modeli','Helezonik ve Artırımsal','Prototipleme ve Barok','Evrimsel ve Gelişigüzel'],
    ans:1,
    exp:'Birleşik Süreç (Unified Process), Helezonik ve Artırımsal modellerin modern bir metodoloji haline getirilmiş halidir; içerisinde ayrıntılı süreç tanımları ve yönetim modelleri barındırır.'
  },

  // ===== BİRLEŞİK SÜREÇ =====
  {
    topic:'up',
    cat:'Birleşik Süreç',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Birleşik Süreç (UP) kaç temel özelliğe sahiptir?',
    opts:['2 (yinelemeli, risk güdümlü)','3 (yinelemeli, artırımsal-evrimsel, risk güdümlü)','4 (yinelemeli, artırımsal, risk güdümlü, müşteri odaklı)','5'],
    ans:1,
    exp:'Birleşik Süreç 3 temel özelliğe sahiptir: Yinelemeli (Iterative), Artırımsal ve Evrimsel (Incremental-Evolutionary), ve Risk Güdümlü (Risk-Driven).'
  },
  {
    topic:'up',
    cat:'Birleşik Süreç',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Birleşik Sürecin dört ana fazı hangi sırayla gelir?',
    opts:['Analiz → Tasarım → Kodlama → Test','Başlangıç → Ayrıntı → Yapım → Geçiş','Planlama → Gerçekleştirim → Test → Bakım','Hazırlık → Geliştirme → Test → Dağıtım'],
    ans:1,
    exp:'Birleşik Sürecin dört ana fazı: Başlangıç (Inception) → Ayrıntı (Elaboration) → Yapım (Construction) → Geçiş (Transition). Ayrıca Üretim (Production) aşaması da vardır.'
  },
  {
    topic:'up',
    cat:'Birleşik Süreç',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'UP\'de önerilen iterasyon süresi kaç haftadır?',
    opts:['1-2 hafta','2-6 hafta (ideal: 3-4 hafta)','4-8 hafta','2-3 ay'],
    ans:1,
    exp:'UP\'de 2-6 haftalık sabit süreli iterasyonlar uygulanmalıdır. Deneyimlere göre 3 ya da 4 haftalık iterasyonlar iyi sonuçlar vermektedir. 2 haftadan kısa olursa ürün çıkarmak mümkün olmaz.'
  },
  {
    topic:'up',
    cat:'Birleşik Süreç',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Yinelemeli süreçte riskli kısımlar ne zaman ele alınmalıdır?',
    opts:['Son iterasyonlarda','Orta iterasyonlarda','İlk iterasyonlarda','Risk önemi yoktur'],
    ans:2,
    exp:'Yüksek risk taşıyan kısımlar ilk iterasyonlarda ele alınmalıdır. Böylece daha projenin ilk aşamalarında ortaya çıkabilecek problemler görülebilir ve gerekli önlemler alınabilir.'
  },
  {
    topic:'up',
    cat:'Birleşik Süreç',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Yinelemeli sürecin yararlarından biri DEĞILDIR:',
    opts:['Değişen isteklere uyum sağlama','Erken geri besleme alma','Büyük sistemlerde çözüm kolaylığı','Tüm gereksinimlerin baştan net belirlenmesi'],
    ans:3,
    exp:'Tüm gereksinimlerin baştan net belirlenmesi yinelemeli sürecin avantajı değil; bu daha çok Çağlayan modelinin gerektirdiği bir durumdur. Yinelemeli süreç değişen gereksinimlere uyum sağlayabilir.'
  },

  // ===== ÇEVİK =====
  {
    topic:'agile',
    cat:'Çevik (Agile)',
    catColor:'rgba(139,92,246,.15)',catTxt:'#a78bfa',
    q:'Çevik Yazılım Geliştirme Manifestosu hangi yılda yayınlanmıştır?',
    opts:['1995','1999','2001','2003'],
    ans:2,
    exp:'2001 yılında, dünyanın önde gelen çevik modellerinin temsilcileri, ortak bir zeminde buluşabilmek adına bir araya gelerek "Çevik Yazılım Geliştirme Manifestosu" nu yayınlamışlardır.'
  },
  {
    topic:'agile',
    cat:'Çevik (Agile)',
    catColor:'rgba(139,92,246,.15)',catTxt:'#a78bfa',
    q:'Çevik Manifesto\'ya göre aşağıdakilerden hangisi "daha önemli" olarak belirtilmemiştir?',
    opts:['Bireyler ve aralarındaki etkileşim','Çalışan yazılım','Müşteri ile işbirliği','Detaylı dokümantasyon'],
    ans:3,
    exp:'Çevik Manifesto\'ya göre "Detaylı dokümantasyon" az önemli kategorisindedir. Daha önemli olanlar: Bireyler ve etkileşim, Çalışan yazılım, Müşteri ile işbirliği, Değişikliklere uyum.'
  },
  {
    topic:'agile',
    cat:'Çevik (Agile)',
    catColor:'rgba(139,92,246,.15)',catTxt:'#a78bfa',
    q:'Çevik modeller ne zaman ortaya çıkmaya başlamıştır?',
    opts:['1970\'lerde','1980\'lerde','1990\'larda','2000\'lerde'],
    ans:2,
    exp:'Çevik modeller, mevcut geleneksel modellere alternatif olarak 1990\'larda ortaya çıkmaya başlamıştır. 1950\'lerdeki üretim alanında geliştirilen yalın yaklaşımların yazılım sektöründeki uzantısıdır.'
  },
  {
    topic:'agile',
    cat:'Çevik (Agile)',
    catColor:'rgba(139,92,246,.15)',catTxt:'#a78bfa',
    q:'Diğer yinelemeli geliştirme modellerinde zaman dilimi ay olarak alınırken, çevik modellerde bu süre ne kadara kadar düşer?',
    opts:['Güne kadar','Haftaya kadar','3 aya kadar','Aynı kalır'],
    ans:1,
    exp:'Diğer yinelemeli geliştirme modellerinin zaman dilimi ay olarak alınırken, çevik modellerde bu süre haftaya kadar düşer. Bu kısa sürede müşteriden geri bildirim alınarak yazılım ortaya çıkarılır.'
  },
  {
    topic:'agile',
    cat:'Çevik (Agile)',
    catColor:'rgba(139,92,246,.15)',catTxt:'#a78bfa',
    q:'Çevik Modelleme kim tarafından önerilmiştir?',
    opts:['Kent Beck','Scott Ambler','Jim Highsmith','Jeff Sutherland'],
    ans:1,
    exp:'Çevik Modelleme (Agile Modeling), Scott Ambler tarafından önerilmiştir.'
  },
  {
    topic:'agile',
    cat:'Çevik (Agile)',
    catColor:'rgba(139,92,246,.15)',catTxt:'#a78bfa',
    q:'Çevik manifestoda "İlerlemenin en iyi göstergesi" olarak ne belirtilmektedir?',
    opts:['Yazılan kod satır sayısı','Çalışan yazılım','Detaylı belgeler','Müşteri memnuniyeti anketleri'],
    ans:1,
    exp:'Çevik manifesto prensiplerinden biri: "İlerlemenin en iyi göstergesi çalışan yazılımdır."'
  },
  {
    topic:'agile',
    cat:'Çevik (Agile)',
    catColor:'rgba(139,92,246,.15)',catTxt:'#a78bfa',
    q:'Çevik Manifesto\'nun kaç temel prensibi vardır?',
    opts:['4','6','8','12'],
    ans:3,
    exp:'Çevik Yazılım Geliştirme Manifestosu\'nun 12 temel prensibi vardır.'
  },
  {
    topic:'agile',
    cat:'Çevik (Agile)',
    catColor:'rgba(139,92,246,.15)',catTxt:'#a78bfa',
    q:'XP (Extreme Programming)\'i kim geliştirmiştir?',
    opts:['Scott Ambler','Kent Beck','Jeff Sutherland','Jim Highsmith'],
    ans:1,
    exp:'Uçdeğer Programlama (XP), Kent Beck tarafından 1999 yılında bir yazılım geliştirme disiplini olarak ortaya çıkarılmıştır.'
  },
  {
    topic:'agile',
    cat:'XP',
    catColor:'rgba(16,185,129,.15)',catTxt:'#34d399',
    q:'XP\'nin 4 temel prensibi hangisidir?',
    opts:['Planlama, Tasarım, Kodlama, Test','Basitlik, İletişim, Geri Bildirim, Cesaret','Analiz, Tasarım, Uygulama, Bakım','Hız, Kalite, Müşteri, Takım'],
    ans:1,
    exp:'XP 4 prensip etrafında toplanır: Basitlik, İletişim, Geri Bildirim ve Cesaret.'
  },
  {
    topic:'agile',
    cat:'XP',
    catColor:'rgba(16,185,129,.15)',catTxt:'#34d399',
    q:'XP\'nin kaç temel pratiği vardır?',
    opts:['4','8','10','12'],
    ans:3,
    exp:'XP 12 temel pratiğin birlikte uygulanmasını gerektirir: Planlama oyunu, kısa sürümler, müşteri katılımı, refactoring, önce test, ortak kod sahiplenme, basit tasarım, metafor, pair programming, kodlama standardı, sürekli entegrasyon, haftada 40 saat.'
  },
  {
    topic:'agile',
    cat:'XP',
    catColor:'rgba(16,185,129,.15)',catTxt:'#34d399',
    q:'XP\'de yazılımcılar nasıl çalışır?',
    opts:['Her geliştirici bağımsız çalışır','Yazılımcılar çiftler halinde çalışır (pair programming)','Takımlar 5\'erli gruplara ayrılır','Yazılımcılar hiyerarşik rollere göre çalışır'],
    ans:1,
    exp:'XP\'de yazılımcılar çiftler halinde çalışır (pair programming) ve her iş için test de geliştirir. Sistemin müşterisi de geliştirici takımın devamlı bir parçasıdır.'
  },
  {
    topic:'agile',
    cat:'ASD-DSDM',
    catColor:'rgba(245,158,11,.15)',catTxt:'#fbbf24',
    q:'ASD (Adaptive Software Development) kim tarafından önerilmiştir?',
    opts:['Scott Ambler','Kent Beck','Jim Highsmith','Jeff Sutherland'],
    ans:2,
    exp:'ASD (Adaptive Software Development - Adaptif Yazılım Geliştirme) Jim Highsmith tarafından önerilmiştir.'
  },
  {
    topic:'agile',
    cat:'ASD-DSDM',
    catColor:'rgba(245,158,11,.15)',catTxt:'#fbbf24',
    q:'ASD modelinin üç temel döngüsü hangileridir?',
    opts:['Planlama, Geliştirme, Test','Kurgu (Speculation), İşbirliği (Collaboration), Öğrenme (Learning)','Analiz, Tasarım, Uygulama','Başlangıç, Geliştirme, Bitiş'],
    ans:1,
    exp:'ASD modeli üç ana döngüden oluşur: Kurgu (Speculation) - İşbirliği (Collaboration) - Öğrenme (Learning). Bu döngü sürekli tekrarlanır.'
  },
  {
    topic:'agile',
    cat:'ASD-DSDM',
    catColor:'rgba(245,158,11,.15)',catTxt:'#fbbf24',
    q:'DSDM projesi kaç aşamadan oluşur?',
    opts:['5','6','7','9'],
    ans:2,
    exp:'DSDM projesi 7 aşamalı adımdan oluşur: Ön Proje, Fizibilite Çalışması, İş Çalışması, Fonksiyonel Model Yineleme, Tasarım & Yapı Yineleme, Uygulama, Proje Sonrası.'
  },
  {
    topic:'agile',
    cat:'FDD-AUP',
    catColor:'rgba(239,68,68,.15)',catTxt:'#f87171',
    q:'FDD (Feature-Driven Development) kaç ana basamaktan oluşur?',
    opts:['3','4','5','7'],
    ans:2,
    exp:'FDD süreci beş ana basamaktan oluşur: 1) Genel sistem modelinin geliştirilmesi, 2) Özellik listesinin oluşturulması, 3) Özellik güdümlü planlama, 4) Özellik güdümlü tasarım, 5) Özellik güdümlü geliştirme.'
  },
  {
    topic:'agile',
    cat:'FDD-AUP',
    catColor:'rgba(239,68,68,.15)',catTxt:'#f87171',
    q:'FDD kim tarafından ve hangi yılda geliştirilmiştir?',
    opts:['Kent Beck - 1999','Scott Ambler - 2000','Jeff De Luca ve Peter Coad - 1997','Jim Highsmith - 1995'],
    ans:2,
    exp:'FDD (Feature-Driven Development), Jeff De Luca ve Peter Coad tarafından 1997\'de geliştirilmiştir.'
  },
  {
    topic:'agile',
    cat:'FDD-AUP',
    catColor:'rgba(239,68,68,.15)',catTxt:'#f87171',
    q:'AUP (Agile Unified Process) hangi metodolojinin basitleştirilmiş halidir?',
    opts:['Scrum','XP','RUP (Rational Unified Process)','DSDM'],
    ans:2,
    exp:'AUP (Çevik Tümleşik Süreç), Rational Unified Process (RUP)\'un, çevik yaklaşıma göre adapte edilerek basitleştirilmiş halidir. RUP\'dan farklı olarak 7 disiplin içerir.'
  },

  // ===== SCRUM =====
  {
    topic:'scrum',
    cat:'Scrum',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Scrum kim/kimler tarafından geliştirilmiştir?',
    opts:['Kent Beck','Scott Ambler','Jeff Sutherland ve Ken Schwaber','Jim Highsmith'],
    ans:2,
    exp:'Scrum, Jeff Sutherland ve Ken Schwaber tarafından 1990\'ların ortalarında geliştirilmiştir. Proje yönetimi ve planlama ile ilgili yöntemlere odaklıdır.'
  },
  {
    topic:'scrum',
    cat:'Scrum',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Scrum\'da bir sprint (iterasyon) en fazla kaç gün sürer?',
    opts:['7 gün','14 gün','21 gün','30 gün'],
    ans:3,
    exp:'Scrum\'da bir Sprint\'in tanımlanması 30 günden fazla sürmemektedir. Yani bir sprint en fazla 30 gün (yaklaşık 4 hafta) sürer.'
  },
  {
    topic:'scrum',
    cat:'Scrum',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Scrum\'da günlük toplantılar kaç dakika sürer?',
    opts:['5 dakika','15 dakika','30 dakika','1 saat'],
    ans:1,
    exp:'Scrum\'da günlük toplantılar (Daily Scrum / Stand-up) 15 dakikadır. Bu toplantılarda her üye: Dün ne yaptım? Bugün ne yapacağım? Engellerim neler? sorularını cevaplar.'
  },
  {
    topic:'scrum',
    cat:'Scrum',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Scrum ekibi kaç rolden oluşur?',
    opts:['2 rol','3 rol','4 rol','5 rol'],
    ans:1,
    exp:'Scrum ekibi 3 rolden oluşur: Product Owner (Ürün Sahibi), Geliştirme Ekibi ve Scrum Master.'
  },
  {
    topic:'scrum',
    cat:'Scrum',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Product Owner\'ın temel sorumluluğu nedir?',
    opts:['Scrum kurallarını uygulamak','Ürün backlog\'undan ve değerinden sorumlu olmak','Kod yazmak','Test yapmak'],
    ans:1,
    exp:'Product Owner, ürünün değerinden ve geri kaydından (Backlog) sorumlu olan kişidir. Ürün Backlog öğelerinin açık olmasını sağlar.'
  },
  {
    topic:'scrum',
    cat:'Scrum',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Scrum Master\'ın temel görevi nedir?',
    opts:['Ürün geliştirmek','Müşteri ile sözleşme yapmak','Scrum\'dan sorumlu olmak ve ekibin önündeki engelleri kaldırmak','Proje bütçesini yönetmek'],
    ans:2,
    exp:'Scrum Master, Scrum\'dan sorumlu olan kişidir. Scrum kurallarını uygular, ekip için liderlik eder, engelleri ortadan kaldırır ve ekibin verimliliğini artırır.'
  },
  {
    topic:'scrum',
    cat:'Scrum',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Scrum kaç kişilik ekipler için uygundur?',
    opts:['<10 kişi','<20 kişi','20-50 kişi','50+ kişi'],
    ans:1,
    exp:'Scrum, karmaşık ortamlarda adım adım yazılım geliştiren küçük ekipler (<20 kişi) için uygundur.'
  },
  {
    topic:'scrum',
    cat:'Scrum',
    catColor:'rgba(59,130,246,.15)',catTxt:'#60a5fa',
    q:'Aşağıdakilerden hangisi Scrum\'ın ayırt edici özelliği DEĞİLDİR?',
    opts:['Geliştirme işi paketlere bölümlenmiştir','Test ve belgelendirme süreklidir','Toplantılar çok uzun sürer','Müşteriye zaman aralıklı demolar sunulur'],
    ans:2,
    exp:'Scrum\'da toplantılar çok kısadır ve bazen başkan (scrum master) bile içermez. Uzun toplantılar Scrum\'a uygun değildir.'
  },

  // ===== IEEE 12207 =====
  {
    topic:'ieee',
    cat:'IEEE/IEA 12207',
    catColor:'rgba(16,185,129,.15)',catTxt:'#34d399',
    q:'IEEE/IEA 12207 standardının tam adı nedir?',
    opts:['Yazılım Test Standardı','Bilgi Teknolojileri-Yazılım Yaşam Döngüsü Süreçleri Standardı','Yazılım Güvenlik Standardı','Nesneye Yönelik Programlama Standardı'],
    ans:1,
    exp:'IEEE/IEA 12207, Bilgi Teknolojileri - Yazılım Yaşam Döngüsü Süreçleri için bir standarttır.'
  },
  {
    topic:'ieee',
    cat:'IEEE/IEA 12207',
    catColor:'rgba(16,185,129,.15)',catTxt:'#34d399',
    q:'IEEE 12207\'de kaç tür süreç kategorisi bulunur?',
    opts:['2 (Birincil ve Destekleyici)','3 (Birincil, Destekleyici ve Kurumsal)','4','5'],
    ans:1,
    exp:'IEEE 12207\'de 3 tür süreç kategorisi bulunur: Birincil (Primary), Destekleyici (Supporting) ve Kurumsal (Organizational) Yaşam Döngüsü Süreçleri.'
  },
  {
    topic:'ieee',
    cat:'IEEE/IEA 12207',
    catColor:'rgba(16,185,129,.15)',catTxt:'#34d399',
    q:'Aşağıdakilerden hangisi IEEE 12207\'nin birincil (primary) süreçlerinden biridir?',
    opts:['Quality Assurance','Problem Resolution','Acquisition (Kazanma)','Training'],
    ans:2,
    exp:'Birincil süreçler: Acquisition (Kazanma), Supply (Tedarik), Development (Geliştirme), Operation (İşletim) ve Maintenance (Bakım). Quality Assurance destekleyici, Training ise kurumsal süreçtir.'
  },
  {
    topic:'ieee',
    cat:'IEEE/IEA 12207',
    catColor:'rgba(16,185,129,.15)',catTxt:'#34d399',
    q:'IEEE 12207 hakkında aşağıdakilerden hangisi DOĞRUDUR?',
    opts:['Yazılım geliştirme için bir reçetedir','Yönetim ve mühendisliğin yerine geçer','Ürün standardıdır','Yazılım süreç modelleri için ortak bir çerçeve sağlar'],
    ans:3,
    exp:'IEEE 12207, yazılım süreç modelleri için ortak bir çerçeve sağlar. Geliştirme için bir reçete DEĞİLDİR, yönetimin yerine GEÇMEZ ve ürün/ölçme standardı DA DEĞİLDİR.'
  },
  // ===== EKLENEN YENİ VE DETAYLI SORULAR =====
  {
    topic:'models',
    cat:'Yazılım Yaşam Döngüsü',
    catColor:'rgba(245,158,11,.15)',catTxt:'#fbbf24',
    q:'Yazılım yaşam döngüsünün temel adımları (çekirdek süreçler) hangi seçenekte doğru sırayla verilmiştir?',
    opts:['Planlama → Çözümleme(Analiz) → Tasarım → Gerçekleştirim → Bakım','Tasarım → Analiz → Kodlama → Test → Kurulum','Planlama → Kodlama → Test → Bakım','Çözümleme → Planlama → Gerçekleştirim → Bakım'],
    ans:0,
    exp:'Yazılım yaşam döngüsü adım adım şu şekilde ilerler: Planlama, Çözümleme, Tasarım, Gerçekleştirim (Kodlama+Test) ve Bakım.'
  },
  {
    topic:'models',
    cat:'Süreç Modelleri',
    catColor:'rgba(245,158,11,.15)',catTxt:'#fbbf24',
    q:'"Kodla ve Düzelt" (Code and Fix) yaklaşımı hakkında güncel endüstri standardı nedir?',
    opts:['En hızlı ve etkili yazılım geliştirme modelidir','Kurumsal şirketlerin en çok kullandığı yöntemdir','Yalnızca prototipleme için kullanılan resmi bir modeldir','Modern yazılım mühendisliğinde bir süreç modeli değil, hata (anti-pattern) olarak kabul edilir'],
    ans:3,
    exp:'Kodla ve Düzelt bireysel küçük işlerde çalışsa da yazılım mühendisliğinde bir "model" olarak değil, yapılmaması gereken bir hata (anti-pattern) olarak görülür.'
  },
  {
    topic:'models',
    cat:'Süreç Modelleri',
    catColor:'rgba(6,182,212,.15)',catTxt:'#22d3ee',
    q:'İki çeşit evrimsel geliştirme vardır. Bunlar nelerdir?',
    opts:['Statik ve Dinamik geliştirme','Keşifçi geliştirme ve Atılacak Prototipleme','Birleşik ve Çevik geliştirme','Kurumsal ve Bireysel geliştirme'],
    ans:1,
    exp:'Evrimsel geliştirmenin iki türü vardır: Keşifçi geliştirme (müşteri ile çalışıp son sistemi teslim etmek) ve Atılacak prototipleme (tam anlaşılmamış gereksinimleri anlamak için).'
  },
  {
    topic:'models',
    cat:'Süreç Modelleri',
    catColor:'rgba(6,182,212,.15)',catTxt:'#22d3ee',
    q:'Sistemin COTS (Commercial-off-the-shelf - hazır bileşenler) adı verilen hazır bileşenler kullanılarak tümleştirilmesi esasına dayanan model hangisidir?',
    opts:['Evrimsel Geliştirme','Bileşen-Tabanlı Model','Formal Sistem Geliştirme','Barok Modeli'],
    ans:1,
    exp:'Bileşen-Tabanlı (Component-Based) Model, piyasadaki hazır bileşenlerin (COTS) tümleştirilmesi esasına dayanır.'
  },
  {
    topic:'models',
    cat:'Süreç Modelleri',
    catColor:'rgba(6,182,212,.15)',catTxt:'#22d3ee',
    q:'Hangi süreç modelinin, sistemin hangi bölümleri için ve kaç tekrarda uygulanacağına karar veren kişiye ne ad verilir?',
    opts:['Proje Yöneticisi','Yazılım Geliştirici','Scrum Master','Süreç Mimarı'],
    ans:3,
    exp:'Projede hangi modelin ve o model içindeki hangi adımların uygulanacağını seçmekle görevli olan kişiye "süreç mimarı" denir.'
  },
  {
    topic:'agile',
    cat:'Manifesto',
    catColor:'rgba(139,92,246,.15)',catTxt:'#a78bfa',
    q:'Çevik Modellerin temsilcilerinin çıkardıkları Çevik Yazılım Geliştirme Manifestosu neyi amaçlamaktadır?',
    opts:['Sözleşmelerin tüm detayları kapsamamasını','Takımların döküman yazmamasını','Ağır süreçleri ve katı planlamaları esneterek, çalışan yazılıma, müşteri işbirliğine ve değişime hızlı yanıt vermeye odaklanmayı','Projeleri en ucuza mal etmeyi'],
    ans:2,
    exp:'Çevik manifesto; bireyleri ve etkileşimi süreçlere, çalışan yazılımı dökümantasyona, müşteri işbirliğini katı sözleşmelere ve değişime uyumu plana sadık kalmaya tercih etmeyi amaçlar.'
  },
  {
    topic:'models',
    cat:'Formal Sistem',
    catColor:'rgba(16,185,129,.15)',catTxt:'#34d399',
    q:'Formal Sistem Geliştirme hangi tür uygulamalar için uygundur?',
    opts:['Web siteleri tasarımı','Kullanıcı arayüzü (UI) yoğun olan uygulamalar','Mobil oyunlar','Sistem kullanıma konmadan emniyet ve güvenlik gerektiren kritik sistemler'],
    ans:3,
    exp:'Formal Sistem Geliştirme (Z dili, Cleanroom vb.), emniyet ve güvenlik durumlarının %100 matematiksel olarak sağlanması gereken kritik sistemler (sağlık, havacılık) için kullanılır.'
  },
  {
    topic:'models',
    cat:'Süreç Modelleri',
    catColor:'rgba(245,158,11,.15)',catTxt:'#fbbf24',
    q:'Aşağıdakilerden hangisi "Süreç Modelleri"nin önemini en iyi ifade eder?',
    opts:['Programcıların daha az kod yazmasını sağlamak','Donanım maliyetlerini azaltmak','Yazılım ürününü üretmek için izlenmesi gereken mühendislik adımlarını belirleyerek sistemin karmaşıklığını ve kalitesini yönetmek','Belgelendirmeyi tamamen ortadan kaldırmak'],
    ans:2,
    exp:'Süreç modelleri, proje başarısı için yazılım geliştirme yaşam döngüsü boyunca izlenmesi önerilen adımları tanımlar, karışıklıkla baş etmeyi sağlar ve kaliteyi artırır.'
  }
];

let activeQuestions = [...allQuestions];
let answered = {};
let currentFilter = 'all';

function filterQuestions(topic) {
  currentFilter = topic;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  if (topic === 'all') {
    activeQuestions = [...allQuestions];
  } else {
    activeQuestions = allQuestions.filter(q => q.topic === topic);
  }
}

function startQuiz() {
  answered = {};
  document.getElementById('top-controls').style.display = 'none';
  document.getElementById('progress-wrap').style.display = 'block';
  document.getElementById('bottom-controls').style.display = 'flex';
  document.getElementById('scoreboard').style.display = 'none';
  renderQuestions();
  updateProgress();
}

function renderQuestions() {
  const area = document.getElementById('quiz-area');
  area.innerHTML = '';
  activeQuestions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'q-card';
    div.id = `qcard-${i}`;
    div.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:.5rem">
        <span class="q-num">SORU ${i+1} / ${activeQuestions.length}</span>
        <span class="category-badge" style="background:${q.catColor};color:${q.catTxt}">${q.cat}</span>
      </div>
      <div class="q-text">${q.q}</div>
      <div class="options" id="opts-${i}">
        ${q.opts.map((o,j) => `
          <div class="option" id="opt-${i}-${j}" onclick="selectAnswer(${i},${j})">
            <div class="option-letter">${['A','B','C','D'][j]}</div>
            <span>${o}</span>
          </div>
        `).join('')}
      </div>
      <div class="explanation" id="exp-${i}">${q.exp}</div>
    `;
    area.appendChild(div);
  });
}

function selectAnswer(qIdx, optIdx) {
  if (answered[qIdx] !== undefined) return;
  answered[qIdx] = optIdx;
  const q = activeQuestions[qIdx];
  const card = document.getElementById(`qcard-${qIdx}`);
  const expEl = document.getElementById(`exp-${qIdx}`);
  
  for (let j = 0; j < q.opts.length; j++) {
    const optEl = document.getElementById(`opt-${qIdx}-${j}`);
    optEl.classList.add('disabled');
    if (j === q.ans) optEl.classList.add('correct-ans');
    else if (j === optIdx) optEl.classList.add('wrong-ans');
  }
  
  if (optIdx === q.ans) {
    card.classList.add('correct');
    expEl.classList.add('show', 'correct-exp');
    expEl.innerHTML = '✅ <strong>Doğru!</strong> ' + q.exp;
  } else {
    card.classList.add('wrong');
    expEl.classList.add('show', 'wrong-exp');
    expEl.innerHTML = `❌ <strong>Yanlış!</strong> Doğru cevap: <strong>${q.opts[q.ans]}</strong>. ${q.exp}`;
  }
  
  updateProgress();
}

function updateProgress() {
  const total = activeQuestions.length;
  const answeredCount = Object.keys(answered).length;
  const correctCount = Object.keys(answered).filter(i => answered[i] === activeQuestions[i].ans).length;
  const pct = total ? Math.round(answeredCount / total * 100) : 0;
  
  document.getElementById('progress-text').textContent = `Soru ${answeredCount} / ${total}`;
  document.getElementById('progress-score').textContent = `✅ ${correctCount} Doğru`;
  document.getElementById('progress-fill').style.width = pct + '%';
}

function showResults() {
  const total = activeQuestions.length;
  const answeredCount = Object.keys(answered).length;
  const correctCount = Object.keys(answered).filter(i => answered[i] === activeQuestions[i].ans).length;
  const wrongCount = answeredCount - correctCount;
  const unanswered = total - answeredCount;
  const pct = total ? Math.round(correctCount / total * 100) : 0;
  
  document.getElementById('sc-correct').textContent = correctCount;
  document.getElementById('sc-wrong').textContent = wrongCount;
  document.getElementById('sc-unanswered').textContent = unanswered;
  document.getElementById('sc-pct').textContent = pct + '%';
  
  setTimeout(() => {
    document.getElementById('result-fill').style.width = pct + '%';
  }, 100);
  
  let msg = '', color = '';
  if (pct >= 90) { msg = '🏆 Mükemmel! Sınava hazırsın!'; color = '#34d399'; }
  else if (pct >= 75) { msg = '👍 İyi iş! Biraz daha çalış, sınav hazırlığın iyi.'; color = '#60a5fa'; }
  else if (pct >= 60) { msg = '📖 Orta seviye. Zayıf konuları tekrar çalış.'; color = '#fbbf24'; }
  else { msg = '📚 Konuları tekrar çalışman önerilir.'; color = '#f87171'; }
  
  document.getElementById('result-msg').innerHTML = `<span style="color:${color}">${msg}</span>`;
  
  const sb = document.getElementById('scoreboard');
  sb.style.display = 'block';
  sb.scrollIntoView({behavior:'smooth'});
}

function resetQuiz() {
  answered = {};
  document.getElementById('top-controls').style.display = 'flex';
  document.getElementById('progress-wrap').style.display = 'none';
  document.getElementById('bottom-controls').style.display = 'none';
  document.getElementById('scoreboard').style.display = 'none';
  document.getElementById('quiz-area').innerHTML = '';
  window.scrollTo({top:0,behavior:'smooth'});
}
