# Tooltip JavaScript Projesi

Bu proje, HTML ve CSS ile entegre bir şekilde çalışarak kullanıcıya kolay bir şekilde tooltip (araç ipucu) eklemenize olanak tanır. Tooltip, bir elementin üzerine gelindiğinde bilgi veya açıklama göstermek için kullanılan bir kullanıcı arayüzü bileşenidir.

---

## Özellikler

- Dinamik olarak herhangi bir HTML öğesine tooltip ekleyebilirsiniz.
- Tooltip'in içeriğini ve stilini kolayca özelleştirebilirsiniz.
- Hafif ve performans dostu.
- Saf JavaScript ile geliştirilmiştir, ek bir kütüphane gerekmez.

---

## Kullanım

1. **Proje Dosyalarını İndirin:**
   Proje dosyalarını indirin veya aşağıdaki komutla klonlayın:
   ```bash
   git clone https://github.com/serdarcayan/custom-tooltip-javascript.git
   ```

2. **HTML Dosyasına Dahil Edin:**
   Tooltip bileşenini kullanmak için aşağıdaki dosyaları HTML sayfanıza dahil edin:

   ```html
   <link rel="stylesheet" href="tooltip.css">
   <script src="tooltip.js" defer></script>
   ```

3. **HTML Elementine Tooltip Ekleyin:**
   Tooltip eklemek istediğiniz öğeye bir `data-tooltip` özelliği "true" olarak değiştirin ve `data-tooltip-content` özelliğine içeriğinizi ekleyin:

   ```html
   <button data-tooltip="true"  data-tooltip-content="This is a tooltip!">Hover me</button>
   ```

4. **Özelleştirme:**
   Tooltip'in varsayılan stilini değiştirmek isterseniz `tooltipStyles` düzenleyebilirsiniz.

   ```javascript
   const tooltipStyles = {
        position: "absolute",
        backgroundColor: "#333",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        whiteSpace: "nowrap",
        zIndex: "1000",
        display: "none", 
        pointerEvents: "none", 
        opacity: "0",
        transition: "opacity 0.2s"
    };
   ```

---

## Geliştirme

1. **Proje Dizini:**
   Projeyi geliştirmek için aşağıdaki gibi bir dosya yapısına sahip olacaksınız:

   ```
   tooltip-projesi/
   ├── index.html
   └── tooltip.js
   ```

---

## Katkıda Bulunma

Bu projeyi geliştirmek isterseniz, katkılarınızı memnuniyetle kabul ederiz. Katkıda bulunmak için şu adımları takip edebilirsiniz:

1. Projeyi forklayın.
2. Yeni bir dal oluşturun:
   ```bash
   git checkout -b yeni-ozellik
   ```
3. Değişikliklerinizi yapın ve commit edin:
   ```bash
   git commit -m "Yeni özellik eklendi"
   ```
4. Dalınızı GitHub'a gönderin:
   ```bash
   git push origin yeni-ozellik
   ```
5. Bir **Pull Request** oluşturun.

---

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasını inceleyebilirsiniz.

---

## İletişim

Eğer herhangi bir sorunuz varsa veya bir sorun bildirmeniz gerekiyorsa, lütfen aşağıdaki iletişim bilgilerini kullanarak bize ulaşın:

- **E-posta:** serdarcayan.sc@gmail.com
- **GitHub Issues:** [Proje Issues Sayfası](https://github.com/serdarcayan/custom-tooltip-javascript/issues)
