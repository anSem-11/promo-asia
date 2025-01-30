class PromoAsiaController {
  swiperPaginationService = new SwiperPaginationService();
  promoAsiaSelector = '.app-asia-slider .swiper-container';
  promoAsiaSlider = document.querySelector(this.promoAsiaSelector);
  promoAsiaPaginationSelector = '.swiper-pagination';
  promoAsiaCarousel = null;
  termsAndConditionsSelector = 'termsAndConditionsLink';
  termsAndConditionsElement = document.getElementById(this.termsAndConditionsSelector);
  availableLanguages = ['id', 'ja', 'ms', 'th', 'vi'];

  init() {
    const { currentLanguage } = RestrictionService.getRestrictionStatePromise();

    this.setTermsAndConditionsLink(currentLanguage);

    if (!this.promoAsiaSlider) return;

    this.promoAsiaCarousel = new Swiper(this.promoAsiaSelector, {
      direction: 'horizontal',
      slidesPerView: DeviceDetectService.isDesktop() ? 3 : 1,
      keyboard: true,
      mousewheel: false,
      loop: true,
      pagination: false,
      autoplay: false,
      centeredSlides: true,
      initialSlide: DeviceDetectService.isDesktop() ? 1 : 0,
    });
  }

  setTermsAndConditionsLink(currentLanguage) {
    if (!this.termsAndConditionsElement) return;

    if (currentLanguage === 'zh' || currentLanguage === 'tw') {
      this.termsAndConditionsElement.href = 'https://direct-landings.azureedge.net/assets/docs/promo-asia/terms-and-conditions-december-2023.pdf';
    } else if (currentLanguage === 'pt') {
      this.termsAndConditionsElement.href = 'https://direct-landings.azureedge.net/assets/docs/promo-asia/pt-terms-and-conditions-december-2023.pdf';
    } else if (this.availableLanguages.includes(currentLanguage)) {
      this.termsAndConditionsElement.href = `https://direct-landings.azureedge.net/assets/docs/promo-asia/terms-and-conditions-december-2023.pdf`;
    } else {
      this.termsAndConditionsElement.href = 'https://direct-landings.azureedge.net/assets/docs/promo-asia/terms-and-conditions-december-2023.pdf';
    }
  }

}