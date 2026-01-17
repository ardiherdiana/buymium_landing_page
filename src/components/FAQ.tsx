

const FAQ = () => {
    const faqs = [
        {
            q: "Apakah followersnya permanen?",
            a: "Ya, followers yang kami sediakan adalah akun aktif real manusia (bukan bot). Namun, penurunan 5-10% itu wajar karena unfollow manual dari pemilik akun, tapi bukan drop drastis karena sistem."
        },
        {
            q: "Apakah ada garansi jika akun bermasalah?",
            a: "Tentu! Kami memberikan garansi login 1x24 jam. Jika gagal login saat pertama kali diterima, kami ganti unit baru. Pastikan ikuti panduan keamanan kami."
        },
        {
            q: "Apakah akun ini aman untuk jualan?",
            a: "Sangat aman. Akun kami adalah akun tua (aged) yang sudah terverifikasi email, sehingga lebih tahan banting (badak) untuk spam posting atau follow masif."
        },
        {
            q: "Bisakah ganti username & email?",
            a: "Bisa banget! Setelah akun diterima, Anda memegang hak akses penuh (Full Access). Anda bebas mengganti username, password, email, maupun nomor HP."
        },
        {
            q: "Berapa lama proses pengirimannya?",
            a: "Instan! Jika order via Website/Shopee otomatis kirim. Jika via WhatsApp, admin akan memproses dalam 5-10 menit selama jam kerja."
        },
        {
            q: "Metode pembayaran apa saja yang tersedia?",
            a: "Kami menerima Transfer Bank (BCA, Mandiri, BRI), E-Wallet (Dana, OVO, Gopay, ShopeePay), dan QRIS."
        }
    ];

    return (
        <section className="faq">
            <div className="container">
                <h2 className="section-title">Pertanyaan Umum</h2>
                <p className="section-subtitle">Hal yang sering ditanyakan oleh customer kami.</p>

                <div className="faq-grid">
                    {faqs.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-question">
                                <i className="fa-solid fa-circle-question"></i>
                                <h3>{item.q}</h3>
                            </div>
                            <p className="faq-answer">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
