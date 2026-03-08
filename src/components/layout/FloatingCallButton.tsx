import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:905-873-4907"
      className="fixed bottom-6 right-6 z-50 lg:hidden bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-elevated hover:scale-105 transition-transform"
      aria-label="Call to book"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;
