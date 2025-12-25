const projects = {
    'polio': {
        title: "End Polio Now: Mega Drive",
        category: "Fighting Disease",
        location: "North Chennai",
        date: "Oct 24, 2024",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        summary: "For over 35 years, Rotary has led the battle against polio. This year, the Rotary Club of Chennai Legends organized a massive immunization drive across 15 locations, ensuring that over 10,000 children under the age of five received their vital drops.",
        stats: [
            { val: "10k+", label: "Beneficiaries" },
            { val: "15", label: "Locations" },
            { val: "150", label: "Volunteers" },
            { val: "$25k", label: "Funds Raised" }
        ],
        content: `
      <h3 class="text-lg font-bold text-slate-900">What We Do</h3>
      <p>Polio is a paralyzing and potentially fatal disease that still threatens children in some parts of the world. The poliovirus invades the nervous system and can cause total paralysis in hours.</p>
      <p>Our club mobilized a task force of Rotarians, Rotaractors, and medical professionals. We set up booths at transit points, railway stations, and bus terminals. We also conducted door-to-door campaigns in high-risk slum areas to ensure no child was left behind.</p>
      <h3 class="text-lg font-bold text-slate-900 mt-8">Impact & Future Goals</h3>
      <p>While India has been polio-free for a decade, the risk of importation remains. Sustained immunity is key. This project not only immunized children but also raised awareness among 50,000+ citizens about the importance of vaccines.</p>
    `,
        chair: "Rtn. S. Kumar",
        status: "Completed",
        statusColor: "bg-green-100 text-green-700"
    },
    'literacy': {
        title: "Digital Literacy Lab",
        category: "Education",
        location: "Govt HSS, Egmore",
        date: "Sep 15, 2024",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        summary: "Bridging the digital divide by equipping government schools with modern computer labs and providing volunteer-led coding workshops to empower the next generation.",
        stats: [
            { val: "2000+", label: "Students" },
            { val: "5", label: "Schools" },
            { val: "50", label: "Computers" },
            { val: "$15k", label: "Invested" }
        ],
        content: `
      <h3 class="text-lg font-bold text-slate-900">What We Do</h3>
      <p>Access to technology is no longer a luxury but a necessity. Many students in government schools lack basic digital skills due to inadequate infrastructure. Our Digital Literacy Lab project aims to change that.</p>
      <p>We renovated unused classrooms into state-of-the-art computer labs, installing high-speed internet and modern desktops. Every weekend, our members volunteer to teach basics of coding, Office tools, and safe internet usage.</p>
      <h3 class="text-lg font-bold text-slate-900 mt-8">Impact & Future Goals</h3>
      <p>The program has already seen a 40% increase in student attendance. Our goal is to expand to 10 more schools by 2026, ensuring every child has the tools to succeed in a digital world.</p>
    `,
        chair: "Rtn. Anita R.",
        status: "Ongoing",
        statusColor: "bg-blue-100 text-blue-700"
    },
    'forestry': {
        title: "Urban Forestry: Miyawaki Method",
        category: "Environment",
        location: "Adyar River Bank",
        date: "Aug 01, 2024",
        image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
        summary: "Creating dense urban lungs in 3 acres of unused land in the city center to improve air quality, reduce heat islands, and restore local biodiversity.",
        stats: [
            { val: "3", label: "Acres" },
            { val: "1500", label: "Saplings" },
            { val: "95%", label: "Survival Rate" },
            { val: "5 yrs", label: "Maintenance" }
        ],
        content: `
      <h3 class="text-lg font-bold text-slate-900">What We Do</h3>
      <p>Rapid urbanization has stripped Chennai of its green cover. Using the Japanese Miyawaki method, we are creating dense, native forests that grow 10 times faster and are 30 times denser than conventional plantations.</p>
      <p>We partnered with the City Corporation to reclaim a dump yard near the river bank. After soil remediation, we planted over 30 native species including Neem, Pungai, and Silk Cotton trees.</p>
      <h3 class="text-lg font-bold text-slate-900 mt-8">Impact & Future Goals</h3>
      <p>The mini-forest has already attracted diverse bird species and lowered the ambient temperature in the immediate vicinity. We plan to replicate this model in 5 more zones across the city.</p>
    `,
        chair: "Rtn. Green G.",
        status: "In Progress",
        statusColor: "bg-yellow-100 text-yellow-700"
    },
    'annapoorna': {
        title: "Project Annapoorna",
        category: "Community",
        location: "City Wide",
        date: "Jul 20, 2024",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        summary: "A daily food distribution program serving nutritious, hot meals to the homeless, elderly, and destitute across the city, ensuring no one goes to sleep hungry.",
        stats: [
            { val: "500", label: "Daily Meals" },
            { val: "3", label: "Kitchens" },
            { val: "365", label: "Days/Year" },
            { val: "$50k", label: "Annual Cost" }
        ],
        content: `
      <h3 class="text-lg font-bold text-slate-900">What We Do</h3>
      <p>Hunger is a persistent issue on our streets. Project Annapoorna operates centralized kitchens that prepare hygienic, nutritious vegetarian meals every morning.</p>
      <p>Our fleet of vans distributes these meals to designated spots near hospitals, shelters, and under bridges. We also provide special high-protein meals for expectant mothers and children in slums.</p>
      <h3 class="text-lg font-bold text-slate-900 mt-8">Impact & Future Goals</h3>
      <p>We have served over 150,000 meals this year alone. Our vision is to set up 'Community Fridges' where restaurants and individuals can donate excess food safely.</p>
    `,
        chair: "Rtn. Meal M.",
        status: "Active",
        statusColor: "bg-green-100 text-green-700"
    },
    'sakthi': {
        title: "Women Empowerment: Project Sakthi",
        category: "Economy",
        location: "Vyasarpadi",
        date: "Jun 10, 2024",
        image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        summary: "Empowering women from marginalized communities through vocational training in tailoring, handicrafts, and micro-finance support to create sustainable livelihoods.",
        stats: [
            { val: "200", label: "Women Trailed" },
            { val: "50", label: "Micro-loans" },
            { val: "5", label: "Skill Sets" },
            { val: "$20k", label: "Disbursed" }
        ],
        content: `
      <h3 class="text-lg font-bold text-slate-900">What We Do</h3>
      <p>Financial independence is key to social empowerment. Project Sakthi identifies women in low-income households and provides them with free 3-month certification courses.</p>
      <p>Upon graduation, we facilitate micro-loans to help them buy sewing machines or raw materials to start their own home-based businesses. We also help market their products through Rotary fairs.</p>
      <h3 class="text-lg font-bold text-slate-900 mt-8">Impact & Future Goals</h3>
      <p>Over 80% of our graduates are now earning a steady income, supporting their families' education and healthcare. We aim to launch a digital marketing module next year.</p>
    `,
        chair: "Rtn. Sakthi S.",
        status: "Ongoing",
        statusColor: "bg-purple-100 text-purple-700"
    },
    'sight': {
        title: "Gift of Sight: Cataract Surgeries",
        category: "Health",
        location: "Sankara Nethralaya",
        date: "May 05, 2024",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        summary: "Providing free, high-quality cataract surgeries for elderly citizens from impoverished backgrounds, restoring their vision and dignity.",
        stats: [
            { val: "500+", label: "Surgeries" },
            { val: "10", label: "Screening Camps" },
            { val: "100%", label: "Free Cost" },
            { val: "$30k", label: "Project Value" }
        ],
        content: `
      <h3 class="text-lg font-bold text-slate-900">What We Do</h3>
      <p>Cataract is a leading cause of preventable blindness. Many elderly poor cannot afford the simple surgery needed to restore sight. We conduct weekly screening camps in rural areas.</p>
      <p>Selected patients are transported to our partner hospital, Sankara Nethralaya, for surgery, post-op care, and medication—all completely free of cost. We also provide them with corrective glasses.</p>
      <h3 class="text-lg font-bold text-slate-900 mt-8">Impact & Future Goals</h3>
      <p>Restoring sight often means restoring a person's ability to work and live independently. We plan to add a mobile eye-care van to reach even more remote villages.</p>
    `,
        chair: "Dr. Vision V.",
        status: "Completed",
        statusColor: "bg-green-100 text-green-700"
    }
};

function showDetailView(id) {
    const p = projects[id];
    if (!p) return;

    // Populate Data
    document.getElementById('detail-title').innerText = p.title;
    document.getElementById('detail-category').innerText = p.category;
    document.getElementById('detail-location').innerText = p.location;
    document.getElementById('detail-banner-img').src = p.image;
    document.getElementById('detail-summary').innerText = p.summary;
    document.getElementById('detail-content').innerHTML = p.content;

    document.getElementById('detail-stat-1-val').innerText = p.stats[0].val;
    document.getElementById('detail-stat-1-label').innerText = p.stats[0].label;
    document.getElementById('detail-stat-2-val').innerText = p.stats[1].val;
    document.getElementById('detail-stat-2-label').innerText = p.stats[1].label;
    document.getElementById('detail-stat-3-val').innerText = p.stats[2].val;
    document.getElementById('detail-stat-3-label').innerText = p.stats[2].label;
    document.getElementById('detail-stat-4-val').innerText = p.stats[3].val;
    document.getElementById('detail-stat-4-label').innerText = p.stats[3].label;

    document.getElementById('detail-date').innerText = p.date;
    document.getElementById('detail-chair').innerText = p.chair;
    const statusEl = document.getElementById('detail-status');
    statusEl.innerText = p.status;
    statusEl.className = `px-2 py-0.5 rounded-full text-xs font-bold ${p.statusColor}`;

    // Show View
    document.getElementById('projects-list-view').classList.add('hidden');
    document.getElementById('project-detail-view').classList.remove('hidden');
    window.scrollTo(0, 0);

    // Refresh Lightbox if needed (fslightbox specific)
    if (window.refreshFsLightbox) { window.refreshFsLightbox(); }
}

function showListView() {
    document.getElementById('project-detail-view').classList.add('hidden');
    document.getElementById('projects-list-view').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function filterProjects(c, b) {
    document.querySelectorAll('.project-card').forEach(e => {
        if (c === 'all' || e.dataset.category === c) {
            e.classList.remove('hidden')
        } else {
            e.classList.add('hidden')
        }
    });
    const z = document.querySelectorAll('.filter-btn');
    z.forEach(e => {
        e.className = 'filter-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-600 border border-slate-200 hover:border-[#005DAA] hover:text-[#005DAA] transition-colors group flex items-center gap-1.5 cursor-pointer';
        const i = e.querySelector('.iconify');
        if (i) i.classList.add('text-slate-400')
    });
    if (b) {
        b.className = 'filter-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-[#005DAA] text-white border border-[#005DAA] shadow-sm transition-colors group flex items-center gap-1.5 cursor-pointer';
        const i = b.querySelector('.iconify');
        if (i) i.classList.remove('text-slate-400')
    }
}

function sortProjects(type, element) {
    if (element) {
        document.getElementById('current-sort').textContent = element.textContent;
    }
    const container = document.querySelector('.columns-1');
    const cards = Array.from(document.querySelectorAll('.project-card'));
    cards.sort((a, b) => {
        if (type === 'recent') {
            return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
        } else if (type === 'oldest') {
            return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
        } else if (type === 'az') {
            return a.getAttribute('data-title').localeCompare(b.getAttribute('data-title'));
        }
    });
    cards.forEach(card => container.appendChild(card));
}
