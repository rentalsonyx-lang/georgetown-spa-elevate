import { Phone } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-spa-sage py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-body tracking-wide text-primary-foreground">
        <span className="hidden sm:inline opacity-80">✦ Women-Owned Business</span>
        <span className="hidden sm:inline opacity-50">|</span>
        <span className="opacity-90">By appointment only</span>
        <span className="opacity-50">•</span>
        <a href="tel:905-873-4907" className="inline-flex items-center gap-1 font-medium hover:opacity-80 transition-opacity text-primary-foreground">
          <Phone className="w-3 h-3" />
          905-873-4907
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
