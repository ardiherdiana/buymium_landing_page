

const Features = () => {
    const features = [
        {
            icon: "fa-users",
            title: "Followers Asli",
            desc: "Hasil optimasi giveaway, bukan akun bot. Tingkatkan kredibilitas brand Anda dengan audiens nyata yang aktif."
        },
        {
            icon: "fa-rocket",
            title: "Siap Pakai",
            desc: "Akun polosan/kosong, bebas dari postingan lama. Cocok untuk memulai branding baru tanpa jejak masa lalu."
        },
        {
            icon: "fa-shield-heart",
            title: "Akses Mudah & Aman",
            desc: "Verifikasi email resmi, stok akun bisa dicek langsung di web tanpa perlu login. Transaksi aman dan terpercaya."
        }
    ];

    return (
        <section className="features">
            <div className="container">
                <h2 className="section-title animate-fade-in-up">
                    Kenapa Memilih Buymium?
                </h2>
                <p className="section-subtitle animate-fade-in-up delay-100">
                    Kami menyediakan akun berkualitas tinggi yang siap boosting bisnis digital Anda.
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            className="feature-card animate-fade-in-up"
                            key={index}
                            style={{ animationDelay: `${(index + 2) * 100}ms` }}
                        >
                            <div className="feature-icon-wrapper">
                                <i className={`fa-solid ${feature.icon} feature-icon`}></i>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
