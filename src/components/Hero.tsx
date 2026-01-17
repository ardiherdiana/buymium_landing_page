

const Hero = () => {
    return (
        <section className="hero">
            {/* Decorative Floating Icons */}
            <i className="fa-brands fa-instagram hero-decoration dec-1"></i>
            <i className="fa-solid fa-rocket hero-decoration dec-2"></i>
            <i className="fa-solid fa-shield-halved hero-decoration dec-3"></i>

            <div className="container hero-content">
                <div className="hero-badge animate-fade-in-up">
                    <i className="fa-solid fa-check-circle"></i>
                    <span>#1 Terpercaya di Indonesia</span>
                </div>

                <h1 className="hero-title animate-fade-in-up delay-100">
                    Jual Beli Akun Instagram <br />
                    Followers Real Indonesia
                </h1>

                <p className="hero-subtitle animate-fade-in-up delay-200">
                    Akun polosan hasil optimasi giveaway influencer. 100% manusia asli, bukan bot atau suntikan.
                    Solusi instan dan aman untuk memulai bisnis kamu.
                </p>

                <div className="hero-cta-group animate-fade-in-up delay-300">
                    <a
                        href="https://wa.me/6285692689599"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                        Order via WhatsApp
                    </a>
                    <a
                        href="https://www.shopee.co.id/buymium.store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-shopee"
                    >
                        <i className="fa-solid fa-bag-shopping"></i>
                        Beli di Shopee
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
