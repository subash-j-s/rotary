class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header
        class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300">
        <!-- Social Media Top Bar -->
        <div class="bg-[#005DAA] text-white py-2">
            <div class="max-w-7xl mx-auto px-6 flex justify-end gap-4">
                <a href="#" class="hover:text-[#F7A81B] transition-colors" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                </a>
                <a href="#" class="hover:text-[#F7A81B] transition-colors" aria-label="Twitter">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                </a>
                <a href="#" class="hover:text-[#F7A81B] transition-colors" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>
                <a href="#" class="hover:text-[#F7A81B] transition-colors" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M10 15l5-3-5-3v6z"></path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between border-b border-slate-200/60 bg-white/95 backdrop-blur-md">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-3 group">
                <img src="images/rotary-logo2.png" alt="Rotary Club Logo"
                    class="h-12 w-auto group-hover:scale-105 transition-transform">
                <div class="flex flex-col leading-none">
                    <!-- <span class="text-[#005DAA] font-bold text-xl tracking-tight">
                        Rotary
                    </span>
                    <span class="text-slate-900 text-[11px] font-semibold tracking-wider uppercase">
                        Club of Chennai Legends
                    </span> -->
                </div>
            </a>

            <!-- Desktop Menu -->
            <nav class="hidden lg:flex items-center gap-8">
                <a href="index.html" class="hover:text-[#005DAA] transition-colors text-sm font-medium text-slate-700">Home</a>

                <!-- About Us -->
                <div class="relative group h-full flex items-center">
                    <a href=""
                        class="text-sm font-medium text-slate-700 group-hover:text-[#005DAA] transition-colors flex items-center gap-1 py-6">
                        About Us
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="14" height="14"
                            viewBox="0 0 24 24" data-icon="lucide:chevron-down" data-width="14">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="m6 9l6 6l6-6"></path>
                        </svg>
                    </a>
                    <div
                        class="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                        <div class="bg-white border border-slate-100 shadow-xl rounded-xl w-64 py-2 flex flex-col">
                            <a href="president-message.html"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50 transition-colors">
                                The President’s Message
                            </a>
                            <a href="who-are-we.html"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50 transition-colors">
                                Who Are We?
                            </a>
                            <a href="meet-the-leaders.html" class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50 transition-colors">Meet the Leaders</a>
                            <a href="gallery.html" class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50 transition-colors">Gallery</a>
                            <div class="relative group/nested w-full">
                                <button
                                    class="w-full px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50 transition-colors flex items-center justify-between">
                                    Organization
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="14"
                                        height="14" viewBox="0 0 24 24" data-icon="lucide:chevron-right" data-width="14"
                                        class="iconify iconify--lucide">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"></path>
                                    </svg>
                                </button>
                                <div
                                    class="absolute top-0 left-full pl-2 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 transform origin-top-left">
                                    <div
                                        class="bg-white border border-slate-100 shadow-xl rounded-xl w-64 py-2 flex flex-col">
                                        <a href="https://www.rotary.org/en"
                                            class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                            Rotary International
                                        </a>
                                        <a href="who-are-we.html"
                                            class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                            Rotary Foundation
                                        </a>
                                        <a href="#"
                                            class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                            District 3234
                                        </a>
                                        <a href="#"
                                            class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                            Rotary Club of Chennai Legends
                                        </a>
                                        <a href="#"
                                            class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                            Partner Clubs
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50 transition-colors">
                                Supporter – Help Us
                            </a>
                        </div>
                    </div>
                </div>

                

                <!-- Our Causes -->
                <div class="relative group h-full flex items-center">
                    <a href="our-cause.html"
                        class="text-sm font-medium text-slate-700 group-hover:text-[#005DAA] transition-colors flex items-center gap-1 py-6">
                        Our Causes
                    </a>
                </div>

                <!-- News & Events -->
                <div class="relative group h-full flex items-center">
                    <a href="index.html#events"
                        class="text-sm font-medium text-slate-700 group-hover:text-[#005DAA] transition-colors flex items-center gap-1 py-6">
                        News &amp; Events
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="14" height="14"
                            viewBox="0 0 24 24" data-icon="lucide:chevron-down" data-width="14">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="m6 9l6 6l6-6"></path>
                        </svg>
                    </a>
                    <div
                        class="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                        <div class="bg-white border border-slate-100 shadow-xl rounded-xl w-64 py-2 flex flex-col">
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                News
                            </a>
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                Diary
                            </a>
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                Upcoming Events
                            </a>
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                Past Events
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Projects 
                <div class="relative group h-full flex items-center">
                    <a href="index.html#projects"
                        class="text-sm font-medium text-slate-700 group-hover:text-[#005DAA] transition-colors flex items-center gap-1 py-6">
                        Projects
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="14" height="14"
                            viewBox="0 0 24 24" data-icon="lucide:chevron-down" data-width="14">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="m6 9l6 6l6-6"></path>
                        </svg>
                    </a>
                    <div
                        class="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                        <div class="bg-white border border-slate-100 shadow-xl rounded-xl w-64 py-2 flex flex-col">
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                Hope in the Lead
                            </a>
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                Impact Startup Award
                            </a>
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                Fine Craftsmanship Award
                            </a>
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50 leading-tight">
                                Audience Award at the Long-Thibaud-Crespin Competition
                            </a>
                        </div>
                    </div>
                </div>-->

                <!-- Membership -->
                <div class="relative group h-full flex items-center">
                    <a href="#"
                        class="text-sm font-medium text-slate-700 group-hover:text-[#005DAA] transition-colors flex items-center gap-1 py-6">
                        Membership
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="14" height="14"
                            viewBox="0 0 24 24" data-icon="lucide:chevron-down" data-width="14">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="m6 9l6 6l6-6"></path>
                        </svg>
                    </a>
                    <div
                        class="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                        <div class="bg-white border border-slate-100 shadow-xl rounded-xl w-64 py-2 flex flex-col">
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                How to Join
                            </a>
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                Benefits
                            </a>
                            <a href="#"
                                class="px-5 py-2.5 text-sm text-slate-600 hover:text-[#005DAA] hover:bg-slate-50">
                                Sponsorship Opportunities
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Contact -->
                <a href="contact-us.html" class="text-sm font-medium text-slate-700 hover:text-[#005DAA] transition-colors">
                    Contact
                </a>
            </nav>

            <!-- CTAs -->
            <div class="flex items-center gap-3">
                <a href="#"
                    class="hidden sm:flex items-center justify-center px-5 py-2 text-sm font-medium text-[#005DAA] bg-white border border-[#005DAA]/20 hover:bg-blue-50/50 rounded-lg transition-all">
                    Join Rotary
                </a>
                <a href="#"
                    class="hidden sm:flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-[#005DAA] hover:bg-[#F7A81B] rounded-lg shadow-sm hover:shadow-md transition-all">
                    Donate
                </a>
                <!-- Mobile Menu Toggle -->
                <button id="mobile-menu-toggle" class="lg:hidden p-2 text-slate-600 hover:text-[#005DAA]">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24"
                        viewBox="0 0 24 24" data-icon="lucide:menu" data-width="24" class="iconify iconify--lucide">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M4 5h16M4 12h16M4 19h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu"
            class="hidden lg:hidden bg-white border-t border-slate-100 absolute top-full left-0 right-0 shadow-xl max-h-[85vh] overflow-y-auto z-40">
            <nav class="flex flex-col p-6 space-y-4">
                <a href="index.html" class="text-slate-700 font-medium hover:text-[#005DAA] py-2">Home</a>

                <!-- About Us Dropdown -->
                <details class="group">
                    <summary
                        class="flex items-center justify-between text-slate-700 font-medium hover:text-[#005DAA] py-2 cursor-pointer list-none">
                        About Us
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </summary>
                    <div class="flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-slate-100">
                        <a href="president-message.html" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">The President's Message</a>
                        <a href="who-are-we.html" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">Who are We?</a>
                        <a href="meet-the-leaders.html" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">Meet the Leaders</a>
                        <a href="gallery.html" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">Gallery</a>
                        <!-- Nested Organization Dropdown -->
                        <details class="group/nested mt-1">
                            <summary
                                class="flex items-center justify-between text-sm text-slate-600 hover:text-[#005DAA] py-1 cursor-pointer list-none">
                                Organization
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-3 h-3 transition-transform group-open/nested:rotate-90" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </summary>
                            <div class="flex flex-col pl-4 mt-1 space-y-2 border-l-2 border-slate-100">
                                <a href="https://www.rotary.org/en" class="text-sm text-slate-500 hover:text-[#005DAA] py-1">Rotary International</a>
                                <a href="who-are-we.html" class="text-sm text-slate-500 hover:text-[#005DAA] py-1">Rotary Foundation</a>
                                <a href="#" class="text-sm text-slate-500 hover:text-[#005DAA] py-1">District 3234</a>
                                <a href="#" class="text-sm text-slate-500 hover:text-[#005DAA] py-1">Rotary Club of Chennai Legends</a>
                                <a href="#" class="text-sm text-slate-500 hover:text-[#005DAA] py-1">Partner Clubs</a>
                                
                            </div>
                        </details>
                        <a href="#" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">Supporter – Help Us</a>
                    </div>
                </details>
                
                <!-- Our Causes -->
                <a href="our-cause.html" class="text-slate-700 font-medium hover:text-[#005DAA] py-2">
                    Our Causes
                </a>

                <!-- News & Events Dropdown -->
                <details class="group">
                    <summary
                        class="flex items-center justify-between text-slate-700 font-medium hover:text-[#005DAA] py-2 cursor-pointer list-none">
                        News & Events
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </summary>
                    <div class="flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-slate-100">
                        <a href="#" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">News</a>
                        <a href="#" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">Diary</a>
                        <a href="#" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">Upcoming Events</a>
                        <a href="#" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">Past Events</a>
                    </div>
                </details>

                <!-- Membership Dropdown -->
                <details class="group">
                    <summary
                        class="flex items-center justify-between text-slate-700 font-medium hover:text-[#005DAA] py-2 cursor-pointer list-none">
                        Membership
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </summary>
                    <div class="flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-slate-100">
                        <a href="#" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">How to Join</a>
                        <a href="#" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">Benefits</a>
                        <a href="#" class="text-sm text-slate-600 hover:text-[#005DAA] py-1">Sponsorship
                            Opportunities</a>
                    </div>
                </details>

                <a href="contact-us.html" class="text-slate-700 font-medium hover:text-[#005DAA] py-2">Contact</a>

                <div class="pt-4 border-t border-slate-100 flex flex-col gap-3 sm:hidden">
                    <a href="#"
                        class="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#005DAA] bg-blue-50 hover:bg-blue-100 rounded-lg transition-all">
                        Join Rotary
                    </a>
                    <a href="#"
                        class="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#005DAA] hover:bg-[#F7A81B] rounded-lg transition-all">
                        Donate
                    </a>
                </div>
            </nav>
        </div>
    </header>
    `;
        this.setupMobileMenu();
    }

    setupMobileMenu() {
        const mobileMenuBtn = this.querySelector('#mobile-menu-toggle');
        const mobileMenu = this.querySelector('#mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }
    }
}
customElements.define('app-header', AppHeader);
