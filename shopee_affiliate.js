// Shopee Affiliate Link Replacement Script
(async function() {
    try {
        // Coba ambil daftar link dari GitHub Pages
        const response = await fetch('https://evun85.github.io/js/links.json');
        const data = await response.json();
        var affiliateLinks = data.links;
        console.log('Daftar link berhasil diambil dari GitHub');
    } catch (error) {
        console.error('Gagal mengambil daftar link, menggunakan fallback:', error);
        // Fallback ke daftar embedded
        var affiliateLinks = [
            "https://shope.ee/1fJv5b3h4J",
            "https://shope.ee/7UcOqXJ4v6",
            "https://shope.ee/9KQ1Yw3z4x",
            "https://shope.ee/5KQ2Zx3y4w",
            "https://shope.ee/3LQ4Aq5r6t"
        ];
    }
    
    // Fungsi untuk mendapatkan link acak
    function getRandomAffiliateLink() {
        const randomIndex = Math.floor(Math.random() * affiliateLinks.length);
        return affiliateLinks[randomIndex];
    }
    
    // Fungsi untuk membuka tab baru dan menunggu hingga ditutup
    function openNewTabAndRedirect(url, originalUrl) {
        // Buka tab baru dengan link affiliate
        const newTab = window.open(url, '_blank');
        
        if (newTab) {
            // Jika tab berhasil dibuka, cek secara berkala apakah tab sudah ditutup
            const checkTabClosed = setInterval(() => {
                if (newTab.closed) {
                    clearInterval(checkTabClosed);
                    
                    // Jika ada originalUrl, redirect ke link asli
                    if (originalUrl) {
                        window.location.href = originalUrl;
                    }
                }
            }, 500);
        } else {
            // Jika popup diblokir, langsung redirect ke link asli
            if (originalUrl) {
                window.location.href = originalUrl;
            }
        }
    }
    
    // Gantikan semua tag <a>
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        const originalHref = link.getAttribute('href');
        
        // Hanya ganti jika href adalah URL valid
        if (originalHref && (originalHref.startsWith('http://') || originalHref.startsWith('https://'))) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const randomLink = getRandomAffiliateLink();
                console.log('Membuka link affiliate:', randomLink);
                openNewTabAndRedirect(randomLink, originalHref);
            });
        }
    });
    
    // Gantikan semua tag <button>
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const randomLink = getRandomAffiliateLink();
            console.log('Membuka link affiliate:', randomLink);
            openNewTabAndRedirect(randomLink, null);
        });
    });
    
    console.log('Shopee Affiliate Links telah diimplementasikan');
})();
