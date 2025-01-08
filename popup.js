
        window.onload = function() {
            var urls = [
                "https://sejatimadani.icu.gov.my/",
                "https://www.hasil.gov.my/",
                "https://www.digital-id.my/"
            ];
            var randomIndex = Math.floor(Math.random() * urls.length);
            var randomUrl = urls[randomIndex];
            window.open(randomUrl, "_blank", "width=800,height=600");
        };
