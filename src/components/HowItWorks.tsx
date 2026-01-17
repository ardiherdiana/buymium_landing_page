

const HowItWorks = () => {
    const steps = [
        {
            icon: "fa-list-check",
            title: "1. Pilih Akun",
            desc: "Cek katalog kami dan pilih spesifikasi akun yang sesuai dengan kebutuhan Anda."
        },
        {
            icon: "fa-brands fa-whatsapp",
            title: "2. Chat Admin",
            desc: "Hubungi kami via WhatsApp untuk konfirmasi stok dan detail pembayaran."
        },
        {
            icon: "fa-money-bill-transfer",
            title: "3. Lakukan Pembayaran",
            desc: "Transfer aman via Bank, E-Wallet, atau QRIS. Bisa juga via Shopee."
        },
        {
            icon: "fa-envelope-open-text",
            title: "4. Terima Data",
            desc: "Data login akan dikirimkan secara instan setelah pembayaran terkonfirmasi."
        }
    ];

    return (
        <section className="how-it-works">
            <div className="container">
                <h2 className="section-title">Cara Order</h2>
                <p className="section-subtitle">Proses mudah dan cepat, hanya dalam hitungan menit akun siap digunakan.</p>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div className="step-item" key={index}>
                            <div className="step-icon-box">
                                <i className={`fa-solid ${step.icon}`}></i>
                                <div className="step-number">{index + 1}</div>
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
