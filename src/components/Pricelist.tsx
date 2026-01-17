
const Pricelist = () => {
    const packages = [

        { followers: "5.000+", price: "250rb" },
        { followers: "10.000+", price: "550rb" },
        { followers: "20.000", price: "785rb" },
        { followers: "30.000", price: "1jt" },
        { followers: "50.000", price: "2.5jt" },
        { followers: "100.000", price: "4jt" },
    ];

    return (
        <section className="pricelist section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Pilihan Paket Terbaik</h2>
                    <p className="section-subtitle">Sesuaikan dengan kebutuhan pertumbuhan akun Anda</p>
                </div>

                <div className="pricelist-grid">
                    {packages.map((pkg, index) => (
                        <div key={index} className="price-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="price-header">
                                <h3 className="follower-count">{pkg.followers}</h3>
                                <span className="follower-label">Followers Indonesia</span>
                            </div>
                            <div className="price-body">
                                <div className="price-amount">Rp {pkg.price}</div>
                                <ul className="price-features">
                                    <li><i className="fa-solid fa-check-circle"></i> High Quality</li>
                                    <li><i className="fa-solid fa-check-circle"></i> Real Human</li>
                                    <li><i className="fa-solid fa-check-circle"></i> Permanen & Bergaransi</li>
                                    <li><i className="fa-solid fa-check-circle"></i> Privasi Aman</li>
                                </ul>
                            </div>
                            <div className="price-footer">
                                <a
                                    href={`https://wa.me/6285692689599?text=Halo%20kak,%20saya%20mau%20order%20paket%20${pkg.followers}%20Followers%20seharga%20${pkg.price}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full"
                                >
                                    Pesan Sekarang <i className="fa-brands fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricelist;
