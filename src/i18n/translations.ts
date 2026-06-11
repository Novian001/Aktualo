export type Locale = "en" | "id";

export const translations = {
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      howItWorks: "How It Works",
      faq: "FAQ",
      login: "Log In",
      getStarted: "Get Started Free",
      brand: "Acctual",
    },
    hero: {
      badge: "100% Free · No Credit Card",
      headline: "Invoicing made\nsimple for small\nbusinesses",
      subheadline:
        "Create, send, and track invoices in minutes. Get paid faster with professional invoices that work — free, forever.",
      cta: "Start Invoicing Free",
      ctaSecondary: "See How It Works",
      trust: "Trusted by 12,000+ small businesses",
      stats: [
        { value: "12K+", label: "Active users" },
        { value: "$2.4M+", label: "Invoices sent" },
        { value: "98%", label: "On-time payment" },
      ],
    },
    features: {
      badge: "Features",
      headline: "Everything you need,\nnothing you don't",
      subheadline:
        "Built specifically for freelancers, consultants, and small business owners who want to get paid on time.",
      list: [
        {
          icon: "FileText",
          title: "Professional Invoices",
          desc: "Create beautiful, branded invoices in seconds. Add your logo, set payment terms, and send instantly.",
        },
        {
          icon: "Zap",
          title: "Instant Delivery",
          desc: "Send invoices via email or shareable link. Clients can view and pay from any device.",
        },
        {
          icon: "BarChart2",
          title: "Payment Tracking",
          desc: "Know exactly who has paid, who hasn't, and what's overdue — at a glance.",
        },
        {
          icon: "Users",
          title: "Client Management",
          desc: "Store client details, view invoice history, and manage relationships in one place.",
        },
        {
          icon: "RefreshCw",
          title: "Recurring Invoices",
          desc: "Set up automatic recurring invoices for retainer clients and never forget to bill again.",
        },
        {
          icon: "Shield",
          title: "Secure & Compliant",
          desc: "Bank-level encryption, GDPR-compliant data handling, and automated audit trails.",
        },
      ],
    },
    howItWorks: {
      badge: "How It Works",
      headline: "Get your first invoice\nout in 3 minutes",
      steps: [
        {
          number: "01",
          title: "Create your account",
          desc: "Sign up free. No credit card required. Your account is ready in under a minute.",
        },
        {
          number: "02",
          title: "Add client & items",
          desc: "Enter client details and line items. Acctual auto-calculates totals, taxes, and discounts.",
        },
        {
          number: "03",
          title: "Send & get paid",
          desc: "Send via email or share a link. Clients pay online. You get notified instantly.",
        },
      ],
    },
    pricing: {
      badge: "Pricing",
      headline: "Free. Seriously.",
      subheadline:
        "No trials. No hidden fees. No limits on invoices. Acctual is free for small businesses, always.",
      plan: {
        name: "Free Forever",
        price: "$0",
        period: "/month",
        cta: "Get Started Free",
        features: [
          "Unlimited invoices",
          "Unlimited clients",
          "PDF export",
          "Payment tracking",
          "Recurring invoices",
          "Email delivery",
          "Multi-currency support",
          "Mobile-friendly",
        ],
      },
      note: "No credit card required. Cancel anytime (though there's nothing to cancel).",
    },
    faq: {
      badge: "FAQ",
      headline: "Common questions",
      items: [
        {
          q: "Is Acctual really free?",
          a: "Yes. Acctual is completely free — no credit card, no trial period, no hidden fees. We make money through optional premium integrations, not by charging for core features.",
        },
        {
          q: "How many invoices can I send?",
          a: "Unlimited. Send as many invoices as your business needs, to as many clients as you have.",
        },
        {
          q: "Can I accept online payments?",
          a: "Yes. Connect your Stripe or PayPal account to accept card payments directly from invoices. Payment processing fees apply (charged by Stripe/PayPal, not us).",
        },
        {
          q: "Is my data secure?",
          a: "Absolutely. We use AES-256 encryption, SOC 2 compliant infrastructure, and never sell your data. Full details in our privacy policy.",
        },
        {
          q: "Can I use my own branding?",
          a: "Yes. Upload your logo, set your brand colors, and customize invoice templates to match your business identity.",
        },
        {
          q: "Does it work on mobile?",
          a: "Acctual is fully responsive and works seamlessly on phones and tablets — iOS and Android.",
        },
      ],
    },
    cta: {
      headline: "Ready to get paid faster?",
      subheadline: "Join 12,000+ businesses using Acctual to invoice smarter.",
      button: "Start Invoicing Free",
      note: "Free forever · No credit card · Setup in 2 minutes",
    },
    footer: {
      tagline: "Free invoicing for small businesses.",
      links: {
        product: {
          label: "Product",
          items: ["Features", "Pricing", "How It Works", "Changelog"],
        },
        company: {
          label: "Company",
          items: ["About", "Blog", "Careers", "Press"],
        },
        legal: {
          label: "Legal",
          items: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
        },
      },
      copyright: "© 2025 Acctual. All rights reserved.",
    },
  },
  id: {
    nav: {
      features: "Fitur",
      pricing: "Harga",
      howItWorks: "Cara Kerja",
      faq: "FAQ",
      login: "Masuk",
      getStarted: "Mulai Gratis",
      brand: "Acctual",
    },
    hero: {
      badge: "100% Gratis · Tanpa Kartu Kredit",
      headline: "Invoicing mudah\nuntuk bisnis\nkecil Anda",
      subheadline:
        "Buat, kirim, dan lacak invoice dalam hitungan menit. Dibayar lebih cepat dengan invoice profesional — gratis selamanya.",
      cta: "Mulai Buat Invoice",
      ctaSecondary: "Lihat Cara Kerjanya",
      trust: "Dipercaya oleh 12.000+ bisnis kecil",
      stats: [
        { value: "12K+", label: "Pengguna aktif" },
        { value: "$2,4M+", label: "Invoice terkirim" },
        { value: "98%", label: "Pembayaran tepat waktu" },
      ],
    },
    features: {
      badge: "Fitur",
      headline: "Semua yang Anda butuhkan,\ntanpa kerumitan",
      subheadline:
        "Dirancang khusus untuk freelancer, konsultan, dan pemilik bisnis kecil yang ingin dibayar tepat waktu.",
      list: [
        {
          icon: "FileText",
          title: "Invoice Profesional",
          desc: "Buat invoice bermerek yang indah dalam hitungan detik. Tambahkan logo, atur syarat pembayaran, dan kirim langsung.",
        },
        {
          icon: "Zap",
          title: "Pengiriman Instan",
          desc: "Kirim invoice via email atau tautan yang bisa dibagikan. Klien dapat melihat dan membayar dari perangkat apapun.",
        },
        {
          icon: "BarChart2",
          title: "Pelacakan Pembayaran",
          desc: "Ketahui persis siapa yang sudah membayar, belum, dan yang sudah jatuh tempo — sekilas pandang.",
        },
        {
          icon: "Users",
          title: "Manajemen Klien",
          desc: "Simpan detail klien, lihat riwayat invoice, dan kelola hubungan dalam satu tempat.",
        },
        {
          icon: "RefreshCw",
          title: "Invoice Berulang",
          desc: "Atur invoice berulang otomatis untuk klien retainer dan tidak pernah lupa menagih lagi.",
        },
        {
          icon: "Shield",
          title: "Aman & Patuh",
          desc: "Enkripsi tingkat bank, penanganan data sesuai GDPR, dan jejak audit otomatis.",
        },
      ],
    },
    howItWorks: {
      badge: "Cara Kerja",
      headline: "Kirim invoice pertama\ndalam 3 menit",
      steps: [
        {
          number: "01",
          title: "Buat akun Anda",
          desc: "Daftar gratis. Tidak perlu kartu kredit. Akun Anda siap dalam kurang dari satu menit.",
        },
        {
          number: "02",
          title: "Tambah klien & item",
          desc: "Masukkan detail klien dan item tagihan. Acctual menghitung total, pajak, dan diskon otomatis.",
        },
        {
          number: "03",
          title: "Kirim & terima pembayaran",
          desc: "Kirim via email atau bagikan tautan. Klien bayar online. Anda mendapat notifikasi seketika.",
        },
      ],
    },
    pricing: {
      badge: "Harga",
      headline: "Gratis. Serius.",
      subheadline:
        "Tidak ada trial. Tidak ada biaya tersembunyi. Tidak ada batasan invoice. Acctual gratis untuk bisnis kecil, selamanya.",
      plan: {
        name: "Gratis Selamanya",
        price: "$0",
        period: "/bulan",
        cta: "Mulai Gratis",
        features: [
          "Invoice tak terbatas",
          "Klien tak terbatas",
          "Ekspor PDF",
          "Pelacakan pembayaran",
          "Invoice berulang",
          "Pengiriman email",
          "Dukungan multi-mata uang",
          "Ramah mobile",
        ],
      },
      note: "Tidak perlu kartu kredit. Batalkan kapan saja (meski tidak ada yang perlu dibatalkan).",
    },
    faq: {
      badge: "FAQ",
      headline: "Pertanyaan umum",
      items: [
        {
          q: "Apakah Acctual benar-benar gratis?",
          a: "Ya. Acctual sepenuhnya gratis — tanpa kartu kredit, tanpa periode trial, tanpa biaya tersembunyi. Kami menghasilkan uang melalui integrasi premium opsional, bukan dengan menagih fitur utama.",
        },
        {
          q: "Berapa banyak invoice yang bisa saya kirim?",
          a: "Tak terbatas. Kirim invoice sebanyak yang dibutuhkan bisnis Anda, kepada sebanyak mungkin klien.",
        },
        {
          q: "Bisakah saya menerima pembayaran online?",
          a: "Ya. Hubungkan akun Stripe atau PayPal Anda untuk menerima pembayaran kartu langsung dari invoice. Biaya pemrosesan pembayaran berlaku (dikenakan oleh Stripe/PayPal, bukan kami).",
        },
        {
          q: "Apakah data saya aman?",
          a: "Tentu. Kami menggunakan enkripsi AES-256, infrastruktur yang patuh SOC 2, dan tidak pernah menjual data Anda. Detail lengkap ada di kebijakan privasi kami.",
        },
        {
          q: "Bisakah saya menggunakan branding sendiri?",
          a: "Ya. Upload logo, atur warna merek, dan sesuaikan template invoice agar sesuai dengan identitas bisnis Anda.",
        },
        {
          q: "Apakah bisa digunakan di mobile?",
          a: "Acctual sepenuhnya responsif dan bekerja mulus di ponsel dan tablet — iOS dan Android.",
        },
      ],
    },
    cta: {
      headline: "Siap dibayar lebih cepat?",
      subheadline: "Bergabung dengan 12.000+ bisnis yang menggunakan Acctual.",
      button: "Mulai Buat Invoice",
      note: "Gratis selamanya · Tanpa kartu kredit · Siap dalam 2 menit",
    },
    footer: {
      tagline: "Invoice gratis untuk bisnis kecil.",
      links: {
        product: {
          label: "Produk",
          items: ["Fitur", "Harga", "Cara Kerja", "Changelog"],
        },
        company: {
          label: "Perusahaan",
          items: ["Tentang Kami", "Blog", "Karier", "Pers"],
        },
        legal: {
          label: "Legal",
          items: ["Kebijakan Privasi", "Syarat Layanan", "Kebijakan Cookie"],
        },
      },
      copyright: "© 2025 Acctual. Semua hak dilindungi.",
    },
  },
};

export type TranslationKeys = typeof translations.en;
