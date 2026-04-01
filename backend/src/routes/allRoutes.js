const router = require("express").Router();

// Import Routes
const adminRoutes = require("./admin");
const bannerRoutes = require("./banner");
const blogRoutes = require("./blog");
const projectRoutes = require("./project");
const serviceRoutes = require("./service");
const announcementBarRoutes = require("./announcementBar");
const categoryRoutes = require("./category");
const videoRoutes = require("./video");
const faqRoutes = require("./faq");
const termsConditionsRoutes = require("./termsConditions");
const privacyPolicyRoutes = require("./privacyPolicy");
const testimonialRoutes = require("./testimonial");
const contactRoutes = require("./contact");
const careerRoutes = require("./career");
const galleryRoutes = require("./gallery");
const seoSettingRoutes = require("./seoSetting");

// Use Routes
router.use("/admin", adminRoutes);
router.use("/banner", bannerRoutes);
router.use("/blog", blogRoutes);
router.use("/project", projectRoutes);
router.use("/service", serviceRoutes);
router.use("/announcement-bar", announcementBarRoutes);
router.use("/category", categoryRoutes);
router.use("/video", videoRoutes);
router.use("/faq", faqRoutes);
router.use("/terms-conditions", termsConditionsRoutes);
router.use("/privacy-policy", privacyPolicyRoutes);
router.use("/testimonial", testimonialRoutes);
router.use("/contact", contactRoutes);
router.use("/career", careerRoutes);
router.use("/gallery", galleryRoutes);
router.use("/seo-setting", seoSettingRoutes);

module.exports = router;
