export const personalData = {
  name: "Akhmad Danil",
  tagline: "Aspiring Data Analyst | Business & Strategy | Turning Data Into Decisions",
  typingWords: [
    "Aspiring Data Analyst",
    "Business & Strategy",
    "Turning Data Into Decisions",
    "Information Systems UNNES"
  ],
  summary:
    "Mahasiswa Sistem Informasi Universitas Negeri Semarang yang sedang mendalami data analytics melalui pembelajaran intensif dan praktik langsung — mulai dari SQL, Excel, hingga machine learning (K-Means, SVM, Random Forest). Berbekal pengalaman merumuskan strategi bisnis di berbagai kompetisi dan mengelola bisnis sendiri, saya percaya keputusan terbaik lahir dari data yang dibaca dan diterjemahkan dengan tepat.",
  university: "Universitas Negeri Semarang (UNNES)",
  major: "Sistem Informasi",
  quote: "Keputusan terbaik lahir dari data yang dibaca dan diterjemahkan dengan tepat.",
  email: "akhmaddanil13@gmail.com",
  phone: "082138102393",
  whatsapp: "https://wa.me/6282138102393",
  linkedin: "https://www.linkedin.com/in/akhmad-danil-53430a304/",
  github: "https://github.com/ydbeksnbwk",
};

export const skillsData = {
  dataAnalytics: [
    { name: "SQL (Query, Business Analysis)", level: "Advanced", icon: "database" },
    { name: "Excel (PivotTable, Data Cleaning, Dashboard)", level: "Advanced", icon: "table" },
    { name: "Python (Pandas, Data Preprocessing)", level: "Intermediate", icon: "code" },
    { name: "Machine Learning (K-Means, SVM, Random Forest)", level: "Intermediate", icon: "cpu" },
    { name: "Data Visualization", level: "Advanced", icon: "bar-chart-2" },
    { name: "Kaggle Dataset Exploration", level: "Intermediate", icon: "search" }
  ],
  businessStrategy: [
    { name: "Business Case Analysis", level: "Advanced", icon: "briefcase" },
    { name: "Market Sizing (TAM-SAM-SOM)", level: "Advanced", icon: "pie-chart" },
    { name: "Market Research & Validation", level: "Advanced", icon: "check-circle" },
    { name: "Financial Projection (Break-even, ROI)", level: "Intermediate", icon: "trending-up" },
    { name: "Growth Strategy Planning", level: "Advanced", icon: "target" },
    { name: "Project Management", level: "Advanced", icon: "calendar" }
  ],
  tools: [
    { name: "Excel / Google Sheets", category: "Spreadsheets", icon: "sheet" },
    { name: "Google Looker Studio", category: "BI & Visualization", icon: "bar-chart-2" },
    { name: "MySQL", category: "Database", icon: "database" },
    { name: "Python (Jupyter / Colab)", category: "Programming", icon: "terminal" },
    { name: "Kaggle", category: "Platform", icon: "globe" }
  ]
};

export const experiencesData = [
  {
    id: 1,
    role: "Data Analyst Bootcamp",
    company: "HariSenin Bootcamp (Batch 5)",
    period: "Juli – September 2026",
    badge: "Bootcamp Intensive",
    type: "Education & Case Study",
    points: [
      "Membangun Customer Behavior & Loyalty Dashboard interaktif di Google Looker Studio untuk analisis e-commerce 'SuryaHub' (Revenue Rp 2,11M, 499 pelanggan).",
      "Melakukan analisis demografi, kategori, dan perilaku pelanggan menggunakan Excel PivotTable untuk 'SuryaMart'."
    ]
  },
  {
    id: 2,
    role: "Co-Founder",
    company: "Haerang Digital",
    period: "Sekarang",
    badge: "Agency & Entrepreneurship",
    type: "Leadership & Business Strategy",
    points: [
      "Merumuskan strategi bisnis dan pengambilan keputusan berbasis data pelanggan untuk agensi yang melayani UMKM di Semarang.",
      "Menyusun roadmap bisnis dan project management tim untuk delivery project optimal."
    ]
  },
  {
    id: 3,
    role: "Pegadaian Tring! Business Case Competition",
    company: "Tim Haerang",
    period: "Kompetisi Nasional",
    badge: "Top 10 Finalist",
    type: "National Competition",
    image: "/bcc_competition.jpg",
    points: [
      "Menyusun strategi ekspansi pasar untuk platform Tring! (Pegadaian) berbasis data konsumen.",
      "Melakukan analisis segmentasi pasar dan merumuskan model bisnis inovatif: membership investasi emas untuk Gen Z/first-jobber, model Agen O2O, Trojan Horse, dan Tring! Lite."
    ]
  },
  {
    id: 4,
    role: "Lomba Startup Majuon 2025",
    company: "Perwakilan UNNES",
    period: "Tingkat Nasional (Jakarta)",
    badge: "Lolos Pitching Nasional",
    type: "Startup Incubation",
    image: "/kitaro_majuon.jpg",
    points: [
      "Chief Executive Officer (CEO) untuk startup WasteTech 'Kitaro'.",
      "Memimpin riset pasar, market sizing (TAM-SAM-SOM), dan proyeksi keuangan berbasis data untuk validasi model bisnis subscription-based waste collection."
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    Title: "kmeans.predict(TBC) — Klasterisasi Penyakit TBC",
    Description:
      "Web tool interaktif dan riset Data Mining menggunakan algoritma K-Means (K=3) untuk memprediksi serta mengelompokkan fase keparahan penyakit TBC berdasarkan data klinis dan demografi pasien.",
    Img: "/kmeans_tbc.png",
    Tags: ["Data Mining", "K-Means (K=3)", "Clustering TBC", "Live Web Tool"],
    Link: "https://klompok11.kitaro.store/",
    Github: "https://github.com/ydbeksnbwk",
    TechStack: ["Python", "K-Means", "Data Mining", "Scikit-Learn", "Risk Scoring", "Web Tool"],
    Category: "Data Science & Health",
    Features: [
      "Input data klinis pasien: usia, jenis kelamin, dan symptoms severity",
      "Proses otomatisasi: Input Data -> Encoding -> Risk Scoring -> K-Means Cluster -> Interpretasi",
      "Model K-Means (K=3) persis seperti notebook penelitian akademis",
      "Live deployment interaktif di https://klompok11.kitaro.store/"
    ]
  },
  {
    id: 2,
    Title: "Customer Behavior & Loyalty Dashboard — SuryaHub",
    Description:
      "Dashboard Business Intelligence interaktif di Google Looker Studio untuk memantau metrik penjualan (Rp 2,11M revenue, 499 pelanggan), segmentasi demografi, loyalitas member (51,2%), serta pengaruh channel pemasaran SuryaHub E-commerce.",
    Img: "/suryahub_dashboard.png",
    Tags: ["Looker Studio", "Data Visualization", "E-commerce BI", "Live Dashboard"],
    Link: "https://datastudio.google.com/reporting/982a9811-2582-4192-827d-0b453f2517ed",
    Github: "https://github.com/ydbeksnbwk",
    TechStack: ["Google Looker Studio", "Data Studio", "Business Intelligence", "Data Visualization", "E-commerce Analytics"],
    Category: "Business Intelligence & Analytics",
    Features: [
      "Monitoring 4 KPI Utama: Total Customers (499), Total Revenue (Rp 2,11 Miliar), Avg Purchase (Rp 4,23 Juta), dan Loyalty Member (51,2%)",
      "Visualisasi Demographics & Segmentation: Customer by Age Group, Gender, dan Income Level",
      "Analisis Channel & Social Media Influence serta Purchase Channel Distribution (Mixed, Online, In-Store)",
      "Interactive Dashboard live dapat diakses dan difilter langsung di Google Looker Studio"
    ]
  },
  {
    id: 3,
    Title: "Analisis PivotTable — Studi Kasus \"SuryaMart\"",
    Description:
      "Analisis data retail transaksi pelanggan menggunakan PivotTable Spreadsheet untuk menjawab pertanyaan bisnis: total pembelian per gender & income (Rp 4,26M), kategori terlaris (Jewelry Rp 234jt), dan demografi kota.",
    Img: "/suryamart_excel.png",
    Tags: ["Excel / Sheets", "PivotTable", "Customer Analytics", "Live Spreadsheet"],
    Link: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZsWj0DXxE3g1FywnulxWbZ75wMP2wM5CsEI0DhD76RRejV1R7Cq3DYp0v0lgfCg/pubhtml#gid=2113725272",
    Github: "https://github.com/ydbeksnbwk",
    TechStack: ["Microsoft Excel", "Google Sheets", "PivotTable", "Data Cleaning"],
    Category: "Business Analytics",
    Features: [
      "Analisis total transaksi per gender & income level (Total belanja Rp 4.263.490.140)",
      "Identifikasi kategori produk unggulan: Jewelry & Accessories (Rp 234jt), Sports & Outdoors (Rp 228jt)",
      "Analisis kota teraktif belanja: Bandung (1.260), Makassar (1.195), Jakarta (1.122), Surabaya (1.117)",
      "Dokumen spreadsheet publik interaktif dapat ditinjau langsung secara online"
    ]
  },
  {
    id: 4,
    Title: "Kitaro — WasteTech Startup Business Plan",
    Description:
      "Merancang model bisnis subscription-based waste collection lengkap dengan market sizing, financial projection, dan strategi pertumbuhan berbasis data; lolos pitching nasional Majuon 2025.",
    Img: "/kitaro_majuon.jpg",
    Tags: ["Business Case", "Market Research", "Pitching Nasional"],
    Link: "https://github.com/ydbeksnbwk",
    Github: "https://github.com/ydbeksnbwk",
    TechStack: ["Market Sizing", "TAM-SAM-SOM", "Financial Projection", "Startup Strategy"],
    Category: "Startup & Strategy",
    Features: [
      "Perhitungan Market Sizing (TAM-SAM-SOM) untuk pasar pengelolaan sampah urban",
      "Penyusunan proyeksi finansial: Break-Even Point (BEP), Return on Investment (ROI), dan unit economics",
      "Rancangan model langganan (subscription) B2B & B2C terintegrasi",
      "Berhasil lolos kurasi dan maju ke babak Pitching Nasional Majuon 2025 di Jakarta"
    ]
  },
  {
    id: 5,
    Title: "Strategi Ekspansi Pasar — Pegadaian Tring!",
    Description:
      "Menyusun strategi ekspansi pasar dan model bisnis berbasis data konsumen untuk platform Tring!, membawa tim Haerang masuk Top 10.",
    Img: "/bcc_competition.jpg",
    Tags: ["Business Case", "Market Segmentation", "Top 10 Finalist"],
    Link: "https://github.com/ydbeksnbwk",
    Github: "https://github.com/ydbeksnbwk",
    TechStack: ["Market Segmentation", "Growth Strategy", "Consumer Analytics", "Business Model"],
    Category: "Strategic Growth",
    Features: [
      "Analisis segmentasi perilaku Gen Z dan first-jobbers terhadap produk tabungan & investasi emas",
      "Formulasi strategi 4 langkah: Membership Investasi Emas, Model Agen O2O, Trojan Horse, & Tring! Lite",
      "Pemetaan Customer Journey dan funnel akuisisi pengguna digital",
      "Meraih posisi Top 10 Finalis Nasional dalam Pegadaian Tring! Business Case Competition"
    ]
  }
];

export const certificatesData = [
  {
    id: 1,
    Title: "Belajar Dasar Structured Query Language (SQL)",
    Issuer: "Dicoding Academy",
    Date: "19 September 2024",
    CredentialId: "07Z6028KWZQR",
    Img: "/certificates/cert_dicoding_sql.png",
    VerificationUrl: "https://www.dicoding.com/certificates/07Z6028KWZQR",
    Score: "Lulus Ujian (11 Jam Belajar)"
  },
  {
    id: 2,
    Title: "Belajar Dasar Data Science",
    Issuer: "Dicoding & Google Developers Partner",
    Date: "16 September 2024",
    CredentialId: "53XEO2N6VZRN",
    Img: "/certificates/cert_dicoding_data_science.png",
    VerificationUrl: "https://www.dicoding.com/certificates/53XEO2N6VZRN",
    Score: "Lulus Ujian (11 Jam Belajar)"
  },
  {
    id: 3,
    Title: "Menguasai Iklan Digital untuk Menjadi Digital Marketer",
    Issuer: "Karier.mu by Sekolah.mu (Prakerja)",
    Date: "03 September 2024",
    CredentialId: "#10664600",
    Img: "/certificates/cert_karier_mu_digital_marketing.png",
    Score: "Nilai: 96 (Sangat Baik)"
  },
  {
    id: 4,
    Title: "Menguasai Ms Excel untuk Admin Online Shop",
    Issuer: "Karier.mu by Sekolah.mu (Prakerja)",
    Date: "29 Juni 2024",
    CredentialId: "#10456293",
    Img: "/certificates/cert_karier_mu_excel.png",
    Score: "Nilai: 86 (Sangat Baik)"
  },
  {
    id: 5,
    Title: "Belajar Dasar AI (Artificial Intelligence)",
    Issuer: "Dicoding Academy",
    Date: "11 September 2024",
    CredentialId: "JLX176K05X72",
    Img: "/certificates/sertifikat_course_653_2218798_110924065005.png",
    VerificationUrl: "https://www.dicoding.com/certificates/JLX176K05X72"
  },
  {
    id: 6,
    Title: "Belajar Dasar Manajemen Proyek",
    Issuer: "Dicoding Academy",
    Date: "02 September 2024",
    CredentialId: "81P2NWO1OXOY",
    Img: "/certificates/sertifikat_course_570_2218798_020924211533.png",
    VerificationUrl: "https://www.dicoding.com/certificates/81P2NWO1OXOY"
  },
  {
    id: 7,
    Title: "Web Design dengan WordPress untuk Pemula",
    Issuer: "Laboratorium Komputer Indonesia (LKI)",
    Date: "27 September 2024",
    CredentialId: "UDZATVMJUE4D0H",
    Img: "/certificates/sertifikat Web design dengan Wordpress untuk pemula.jpg",
    Score: "Predikat: Sangat Baik (15 Jam)"
  },
  {
    id: 8,
    Title: "Bootcamp Mini Course UI/UX Design",
    Issuer: "HariSenin.com",
    Date: "September 2024",
    CredentialId: "Harisenin-BooKil",
    Img: "/certificates/Sertifikat Harisenin BooKil UI_UX - AKHMAD DANIL.png"
  },
  {
    id: 9,
    Title: "Belajar Dasar Pemrograman JavaScript",
    Issuer: "Dicoding Academy",
    Date: "29 Desember 2024",
    CredentialId: "6RPNR3WYQX2M",
    Img: "/certificates/sertifikat_course_256_2218798_291224143240_js.png",
    VerificationUrl: "https://www.dicoding.com/certificates/6RPNR3WYQX2M"
  },
  {
    id: 10,
    Title: "Belajar Dasar Pemrograman Web",
    Issuer: "Dicoding Academy",
    Date: "06 Oktober 2024",
    CredentialId: "1OP845GD1ZQK",
    Img: "/certificates/sertifikat_course_123_2218798_061024130041_Pemrograman web dasar.png",
    VerificationUrl: "https://www.dicoding.com/certificates/1OP845GD1ZQK"
  },
  {
    id: 11,
    Title: "Memulai Pemrograman Dengan C",
    Issuer: "Dicoding Academy",
    Date: "13 Desember 2024",
    CredentialId: "81P24Y8QYZOY",
    Img: "/certificates/sertifikat_course_120_2218798_131224215632_PemrogramanC.png",
    VerificationUrl: "https://www.dicoding.com/certificates/81P24Y8QYZOY"
  },
  {
    id: 12,
    Title: "Sertifikat Kompetensi Multimedia KKNI Level II",
    Issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    Date: "17 November 2022",
    CredentialId: "59112 3511 2 0002128 2022",
    Img: "/certificates/sertifikat_LSP.png"
  },
  {
    id: 13,
    Title: "Praktik Kerja Lapangan (PKL) Multimedia",
    Issuer: "Miftah Production & SMK N 1 Kersana",
    Date: "30 April 2022",
    CredentialId: "422.6/205/2022",
    Img: "/certificates/sertifikat_Miftah Production.png"
  },
  {
    id: 14,
    Title: "Peserta Kemah Digital Pemuda Kab. Brebes",
    Issuer: "Dinas Pendidikan Pemuda dan Olahraga Brebes",
    Date: "20 November 2022",
    CredentialId: "B/04476/427/XI/2022",
    Img: "/certificates/Sertifikat_peserta kemah digital.png"
  }
];

