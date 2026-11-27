/**
 * RODRIGUES TUR - Vue 3 Main Application
 * Ecosystem: HelpUS Technology
 * Domain: rodriguestour.helpusbr.com
 */

const { createApp, ref, computed, onMounted, onUnmounted } = Vue;

const app = createApp({
  setup() {
    // Language State
    const savedLang = localStorage.getItem('rodriguestur_lang') || 'pt';
    const lang = ref(savedLang);

    const setLanguage = (newLang) => {
      lang.value = newLang;
      localStorage.setItem('rodriguestur_lang', newLang);
      document.documentElement.lang = newLang === 'pt' ? 'pt-BR' : (newLang === 'en' ? 'en-US' : 'es-ES');
    };

    const t = computed(() => {
      return RODRIGUES_DATA.i18n[lang.value] || RODRIGUES_DATA.i18n.pt;
    });

    // Profile & Base Data
    const profile = ref(RODRIGUES_DATA.profile);
    const announcements = ref(RODRIGUES_DATA.announcements);
    const stories = ref(RODRIGUES_DATA.stories);
    const packages = ref(RODRIGUES_DATA.packages);
    const testimonials = ref(RODRIGUES_DATA.testimonials);
    const faqs = ref(RODRIGUES_DATA.faqs);

    // Gallery State & Manifest (Novembro 2026)
    const galleryDays = ref(typeof GALLERY_MANIFEST !== 'undefined' ? GALLERY_MANIFEST : []);
    const activeGalleryDay = ref(null);
    const lightboxPhoto = ref(null);
    const lightboxIndex = ref(0);

    const totalGalleryPhotos = computed(() => {
      return galleryDays.value.reduce((acc, d) => acc + (d.total || 0), 0);
    });

    const openDayGallery = (day) => {
      activeGalleryDay.value = day;
    };

    const closeDayGallery = () => {
      activeGalleryDay.value = null;
    };

    const openLightbox = (day, photoIdx) => {
      activeGalleryDay.value = day;
      lightboxIndex.value = photoIdx;
      lightboxPhoto.value = day.photos[photoIdx];
    };

    const closeLightbox = () => {
      lightboxPhoto.value = null;
    };

    const nextLightboxPhoto = () => {
      if (!activeGalleryDay.value || !activeGalleryDay.value.photos.length) return;
      lightboxIndex.value = (lightboxIndex.value + 1) % activeGalleryDay.value.photos.length;
      lightboxPhoto.value = activeGalleryDay.value.photos[lightboxIndex.value];
    };

    const prevLightboxPhoto = () => {
      if (!activeGalleryDay.value || !activeGalleryDay.value.photos.length) return;
      lightboxIndex.value = (lightboxIndex.value - 1 + activeGalleryDay.value.photos.length) % activeGalleryDay.value.photos.length;
      lightboxPhoto.value = activeGalleryDay.value.photos[lightboxIndex.value];
    };

    const handleKeydown = (e) => {
      if (lightboxPhoto.value) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextLightboxPhoto();
        if (e.key === 'ArrowLeft') prevLightboxPhoto();
      } else if (activeGalleryDay.value) {
        if (e.key === 'Escape') closeDayGallery();
      }
    };

    // Ticker Logic
    const activeAnnouncementIdx = ref(0);
    let tickerInterval = null;

    // Mobile Menu State
    const mobileMenuOpen = ref(false);
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    // Filter & Search
    const searchQuery = ref('');
    const selectedCategory = ref('all');

    const filteredPackages = computed(() => {
      return packages.value.filter(pkg => {
        const matchesCategory = selectedCategory.value === 'all' || pkg.category === selectedCategory.value;
        const query = searchQuery.value.toLowerCase().trim();
        const matchesSearch = !query || 
          pkg.title.toLowerCase().includes(query) ||
          pkg.subtitle.toLowerCase().includes(query) ||
          pkg.categoryLabel.toLowerCase().includes(query) ||
          pkg.highlights.some(h => h.toLowerCase().includes(query));
        return matchesCategory && matchesSearch;
      });
    });

    const setCategory = (cat) => {
      selectedCategory.value = cat;
    };

    // Modal: Full Day-by-Day Itinerary
    const activeItineraryModal = ref(false);
    const selectedTourForModal = ref(null);

    const openItineraryModal = (pkg) => {
      selectedTourForModal.value = pkg;
      activeItineraryModal.value = true;
      document.body.style.overflow = 'hidden';
    };

    const closeItineraryModal = () => {
      activeItineraryModal.value = false;
      selectedTourForModal.value = null;
      document.body.style.overflow = 'auto';
    };

    // Modal: Instagram Story Viewer
    const activeStoryModal = ref(false);
    const currentStoryIndex = ref(0);

    const openStoryModal = (idx) => {
      currentStoryIndex.value = idx;
      activeStoryModal.value = true;
      document.body.style.overflow = 'hidden';
    };

    const closeStoryModal = () => {
      activeStoryModal.value = false;
      document.body.style.overflow = 'auto';
    };

    const nextStory = () => {
      if (currentStoryIndex.value < stories.value.length - 1) {
        currentStoryIndex.value++;
      } else {
        closeStoryModal();
      }
    };

    const prevStory = () => {
      if (currentStoryIndex.value > 0) {
        currentStoryIndex.value--;
      }
    };

    // Simulator State
    const simTourId = ref(packages.value[0]?.id || '');
    const simPassengers = ref(2);
    const simRoomType = ref('double'); // double, triple, single
    const simPaymentMethod = ref('pix'); // pix, card

    const selectedSimTour = computed(() => {
      return packages.value.find(p => p.id === simTourId.value) || packages.value[0];
    });

    const simCalculations = computed(() => {
      if (!selectedSimTour.value) return { total: 0, installments: 0, text: '' };
      
      let baseUnit = simPaymentMethod.value === 'pix' 
        ? selectedSimTour.value.pricePix 
        : selectedSimTour.value.priceInstallments;

      // Adjustment for single room (+25% base)
      if (simRoomType.value === 'single') {
        baseUnit = Math.round(baseUnit * 1.25);
      } else if (simRoomType.value === 'triple') {
        baseUnit = Math.round(baseUnit * 0.95);
      }

      const total = baseUnit * Number(simPassengers.value);
      const installmentValue = Math.round(total / 10);

      return {
        unitPrice: baseUnit,
        total: total,
        installmentValue: installmentValue,
        formattedTotal: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total),
        formattedInstallment: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(installmentValue)
      };
    });

    const getSimWhatsAppUrl = () => {
      const tour = selectedSimTour.value;
      const calc = simCalculations.value;
      const roomLabel = simRoomType.value === 'double' ? 'Quarto Duplo' : (simRoomType.value === 'triple' ? 'Quarto Triplo' : 'Quarto Individual');
      const payLabel = simPaymentMethod.value === 'pix' ? 'À Vista no Pix (com desconto)' : 'Parcelado no Cartão em até 10x';

      const msg = `Olá Elisa da Rodrigues Tur! 👋✈️\n\n` +
        `Gostaria de fazer uma reserva/cotação para o pacote:\n` +
        `📌 *${tour.title}*\n` +
        `👥 *Viajantes:* ${simPassengers.value} pessoa(s)\n` +
        `🛏️ *Acomodação:* ${roomLabel}\n` +
        `💳 *Forma de Pagamento:* ${payLabel}\n` +
        `💰 *Valor Estimado:* ${calc.formattedTotal}\n\n` +
        `Poderia me passar mais informações sobre as vagas e o embarque na Paraíba? Vi o site rodriguestour.helpusbr.com!`;

      return `https://wa.me/${profile.value.phone1Raw}?text=${encodeURIComponent(msg)}`;
    };

    const getDirectTourWhatsAppUrl = (tour) => {
      const msg = `Olá Elisa da Rodrigues Tur! 👋✈️\n\n` +
        `Tenho interesse no pacote *${tour.title}* (${tour.dates}).\n` +
        `Gostaria de saber os detalhes de vagas, embarque e parcelamento!\n\n` +
        `Acessei pelo site rodriguestour.helpusbr.com.`;
      return `https://wa.me/${profile.value.phone1Raw}?text=${encodeURIComponent(msg)}`;
    };

    // Custom Tour Form
    const customForm = ref({
      name: '',
      phone: '',
      destination: '',
      passengers: '',
      preferredDate: '',
      notes: ''
    });

    const sendCustomTourWhatsApp = () => {
      const f = customForm.value;
      if (!f.name || !f.phone) {
        alert('Por favor, informe seu nome e telefone para contato.');
        return;
      }
      const msg = `Olá Elisa da Rodrigues Tur! 🌟\n\n` +
        `Gostaria de solicitar uma *Viagem Sob Medida / Excursão em Grupo*:\n` +
        `👤 *Nome:* ${f.name}\n` +
        `📞 *WhatsApp:* ${f.phone}\n` +
        `📍 *Destino Desejado:* ${f.destination || 'A combinar'}\n` +
        `👥 *Qtd. Passageiros:* ${f.passengers || 'A definir'}\n` +
        `📅 *Mês/Período Preferido:* ${f.preferredDate || 'A definir'}\n` +
        `📝 *Detalhes/Observações:* ${f.notes || 'Nenhuma'}\n\n` +
        `Aguardo contato para alinharmos os detalhes!`;

      window.open(`https://wa.me/${profile.value.phone1Raw}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    // Cookie Consent LGPD
    const showCookieBanner = ref(false);
    const cookieModalOpen = ref(false);

    const checkCookieConsent = () => {
      const consent = localStorage.getItem('helpus_cookie_consent');
      if (!consent) {
        showCookieBanner.value = true;
      }
    };

    const acceptCookies = () => {
      localStorage.setItem('helpus_cookie_consent', 'accepted');
      showCookieBanner.value = false;
      cookieModalOpen.value = false;
    };

    const openCookieModal = () => {
      cookieModalOpen.value = true;
    };

    const closeCookieModal = () => {
      cookieModalOpen.value = false;
    };

    // Format Currency Helper
    const formatBRL = (val) => {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
    };

    // Load Admin Custom Overrides
    const loadCustomData = () => {
      try {
        const raw = localStorage.getItem('rodriguestur_custom_data');
        if (raw) {
          const custom = JSON.parse(raw);
          if (custom.profile) profile.value = { ...RODRIGUES_DATA.profile, ...custom.profile };
          if (custom.announcements && custom.announcements.length) announcements.value = custom.announcements;
          if (custom.packages && custom.packages.length) packages.value = custom.packages;
          if (custom.testimonials && custom.testimonials.length) testimonials.value = custom.testimonials;
          if (custom.faqs && custom.faqs.length) faqs.value = custom.faqs;
        }
      } catch (e) {
        console.warn('[RodriguesTur] Erro ao carregar dados do admin:', e);
      }
    };

    onMounted(() => {
      loadCustomData();
      checkCookieConsent();
      window.addEventListener('keydown', handleKeydown);

      // Start ticker
      tickerInterval = setInterval(() => {
        activeAnnouncementIdx.value = (activeAnnouncementIdx.value + 1) % announcements.value.length;
      }, 5000);
    });

    onUnmounted(() => {
      if (tickerInterval) clearInterval(tickerInterval);
      window.removeEventListener('keydown', handleKeydown);
    });

    return {
      lang,
      setLanguage,
      t,
      profile,
      announcements,
      activeAnnouncementIdx,
      stories,
      packages,
      filteredPackages,
      searchQuery,
      selectedCategory,
      setCategory,
      testimonials,
      faqs,
      mobileMenuOpen,
      toggleMobileMenu,
      // Gallery (Novembro 2026)
      galleryDays,
      activeGalleryDay,
      lightboxPhoto,
      lightboxIndex,
      totalGalleryPhotos,
      openDayGallery,
      closeDayGallery,
      openLightbox,
      closeLightbox,
      nextLightboxPhoto,
      prevLightboxPhoto,
      // Itinerary Modal
      activeItineraryModal,
      selectedTourForModal,
      openItineraryModal,
      closeItineraryModal,
      // Stories Modal
      activeStoryModal,
      currentStoryIndex,
      openStoryModal,
      closeStoryModal,
      nextStory,
      prevStory,
      // Simulator
      simTourId,
      simPassengers,
      simRoomType,
      simPaymentMethod,
      selectedSimTour,
      simCalculations,
      getSimWhatsAppUrl,
      getDirectTourWhatsAppUrl,
      // Custom Tour
      customForm,
      sendCustomTourWhatsApp,
      // Cookies
      showCookieBanner,
      cookieModalOpen,
      acceptCookies,
      openCookieModal,
      closeCookieModal,
      formatBRL
    };
  }
});

app.mount('#app');
