class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer class="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <!-- Brand -->
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <img src="images/rotary-logo2.png" alt="Rotary Club Logo"
                            class="h-12 w-auto bg-white rounded px-2 py-1">
                        <div class="flex flex-col leading-none">
                            <!-- <span class="text-white font-bold text-lg tracking-tight">
                                Rotary
                            </span>
                            <span class="text-slate-400 text-[10px] font-medium uppercase tracking-wider">
                                Club of Chennai Legends
                            </span> -->
                        </div>
                    </div>
                    <p class="text-sm text-slate-400 mb-6 leading-relaxed">
                        Rotary Club of Chennai Legends is part of Rotary International
                        District 3234. We are dedicated to Service Above Self.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="text-slate-500 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20"
                                viewBox="0 0 24 24" data-icon="lucide:facebook" data-width="20"
                                class="iconify iconify--lucide">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" class="text-slate-500 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20"
                                viewBox="0 0 24 24" data-icon="lucide:twitter" data-width="20"
                                class="iconify iconify--lucide">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2">
                                </path>
                            </svg>
                        </a>
                        <a href="#" class="text-slate-500 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20"
                                viewBox="0 0 24 24" data-icon="lucide:instagram" data-width="20"
                                class="iconify iconify--lucide">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                                </g>
                            </svg>
                        </a>
                        <a href="#" class="text-slate-500 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20"
                                viewBox="0 0 24 24" data-icon="lucide:linkedin" data-width="20"
                                class="iconify iconify--lucide">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z">
                                    </path>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-white font-semibold mb-6">Quick Links</h4>
                    <ul class="space-y-3 text-sm">
                        <li>
                            <a href="index.html#about" class="hover:text-[#F7A81B] transition-colors">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="meet-the-leaders.html" class="hover:text-[#F7A81B] transition-colors">
                                Leadership Team
                            </a>
                        </li>
                        <li>
                            <a href="index.html#projects" class="hover:text-[#F7A81B] transition-colors">
                                Our Projects
                            </a>
                        </li>


                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h4 class="text-white font-semibold mb-6">Contact</h4>
                    <ul class="space-y-4 text-sm">
                        <li class="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16"
                                viewBox="0 0 24 24" data-icon="lucide:map-pin" data-width="16"
                                class="iconify mt-0.5 text-[#F7A81B] iconify--lucide">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2">
                                    <path
                                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                    </path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </g>
                            </svg>
                            <span class="text-slate-400">
                                19/7 Venus Apartments, Venus Colony, 2nd Street, Chennai 600018.
                            </span>
                        </li>
                        <li class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16"
                                viewBox="0 0 24 24" data-icon="lucide:phone" data-width="16"
                                class="iconify text-[#F7A81B] iconify--lucide">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384">
                                </path>
                            </svg>
                            <span class="text-slate-400">+91 44 1234 5678</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16"
                                viewBox="0 0 24 24" data-icon="lucide:mail" data-width="16"
                                class="iconify text-[#F7A81B] iconify--lucide">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2">
                                    <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                </g>
                            </svg>
                            <span class="text-slate-400">
                                chennailegends@ri3234.org
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- End Polio Now -->
                <div>
                    <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                        <h4 class="text-[#F7A81B] font-bold text-lg mb-2 uppercase tracking-wide">
                            End Polio Now
                        </h4>
                        <p class="text-xs text-slate-400 mb-4 leading-relaxed">
                            We are this close to ending polio. Join the historic fight to
                            eradicate this disease forever.
                        </p>
                        <a href="#"
                            class="text-xs font-semibold text-white border-b border-[#F7A81B] pb-0.5 hover:text-[#F7A81B] transition-colors">
                            Learn about the mission
                        </a>
                    </div>
                </div>
            </div>

            <div
                class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>© 2023 Rotary Club of Chennai Legends. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" class="hover:text-white transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>
    </footer>
    `;
    }
}
customElements.define('app-footer', AppFooter);
