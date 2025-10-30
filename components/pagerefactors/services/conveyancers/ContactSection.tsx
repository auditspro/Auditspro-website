import { Motion } from "@/components/ui/motion";
import { ContactForm } from "@/components/ui/contact-form";

export function ContactSection() {
  return (
    <section className="container relative mx-auto px-4 sm:px-6 pb-16">
      <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/40">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm
            title="Get Your Conveyancer Audit Quote"
            subtitle="Ready to ensure your conveyancing trust accounts are ASIC compliant? Get your personalized quote with 24-hour response guarantee."
            variant="contact"
            showTitle={true}
          />
        </Motion>
      </div>
    </section>
  );
}