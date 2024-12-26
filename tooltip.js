document.addEventListener("DOMContentLoaded", () => {
    //tooltips

    // Tooltip stil özelliklerini bir dictionary olarak tanımlıyoruz
    const tooltipStyles = {
        position: "absolute",
        backgroundColor: "#333",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        whiteSpace: "nowrap",
        zIndex: "1000",
        display: "none", // Başlangıçta gizli
        pointerEvents: "none", // Tıklamaları engellemek için
        opacity: "0",
        transition: "opacity 0.2s"
    };

    const elementsWithTooltip = document.querySelectorAll("[data-tooltip='true']");

    elementsWithTooltip.forEach((element) => {
        element.addEventListener("mouseover", function (event) {
            showTooltip(event, element);
        });

        element.addEventListener("mousemove", function (event) {
            moveTooltip(event);
        });

        element.addEventListener("mouseout", function () {
            hideTooltip();
        });
    });

    // Tooltip yaratma ve gösterme
    function showTooltip(event, element) {
        const tooltipText = element.getAttribute("data-tooltip-content");
        if (!tooltipText) return;

        let tooltip = document.querySelector(".tooltip");
        if (!tooltip) {
            tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            document.body.appendChild(tooltip);

            // Tooltip'in stillerini uyguluyoruz
            Object.assign(tooltip.style, tooltipStyles);
        }

        tooltip.textContent = tooltipText;
        tooltip.style.display = "block";
        tooltip.style.opacity = "1";
        moveTooltip(event);
    }

    // Tooltip konumunu güncelleme
    function moveTooltip(event) {
        const tooltip = document.querySelector(".tooltip");
        if (tooltip) {
            tooltip.style.left = `${event.pageX + 10}px`; // Mouse'un sağında 10px boşluk bırak
            tooltip.style.top = `${event.pageY + 10}px`; // Mouse'un altında 10px boşluk bırak
        }
    }

    // Tooltip gizleme
    function hideTooltip() {
        const tooltip = document.querySelector(".tooltip");
        if (tooltip) {
            tooltip.style.display = "none";
            tooltip.style.opacity = "0";
        }
    }

});