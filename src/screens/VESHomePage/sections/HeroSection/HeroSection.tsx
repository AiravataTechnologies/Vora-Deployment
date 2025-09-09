import { Settings, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const featureItems = [
    {
      icon: <Settings className="w-6 h-6 text-[#FEDD00]" />,
      text: "Turnkey Solutions",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#FEDD00]" />,
      text: "Compliance Ready Execution",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#FEDD00]" />,
      text: "Emergency Support",
    },
  ];

  // Function to handle Contact Us button click
  const handleContactUsClick = () => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // Scroll to contact section on home page
      const contactSection = document.getElementById('contact-section') ||
        document.querySelector('[data-section="contact"]') ||
        document.querySelector('.contact-section');

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback: redirect to contact page if section not found
        window.location.href = '/contact';
      }
    } else {
      // Redirect to contact page if not on home page
      window.location.href = '/contact';
    }
  };

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Light Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Content */}
      <div className="relative w-full h-full">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col w-full max-w-[743px] items-start gap-16 absolute top-[206px] right-[68px]">
          <div className="flex flex-col items-start gap-[42px] w-full">
            <div className="flex flex-col items-start gap-[30px] w-full">
              <h1 className="font-['Inter',Helvetica] font-semibold text-white text-[64px] tracking-[-1.92px] leading-[76.8px] transform translate-x-[50px] opacity-0 animate-[slideInRight_1.2s_ease-out_0.3s_forwards] drop-shadow-lg">
                Where Integrity, Innovation and Legacy, <br />
                Power Future-Ready Solutions.
              </h1>
            </div>

            <Button
              onClick={handleContactUsClick}
              variant="outline"
              className="inline-flex items-center gap-1 pl-2 pr-4 py-2 rounded-[32px] border border-solid border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors transform translate-x-[30px] opacity-0 animate-[slideInRight_1s_ease-out_0.8s_forwards] drop-shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <span className="font-['Inter',Helvetica] font-medium text-base tracking-[-0.32px] leading-6">
                Contact Us
              </span>
              <div className="w-6 h-6 bg-[#FEDD00] rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-black" />
              </div>
            </Button>
          </div>

          <div className="flex w-full max-w-[585px] items-start gap-12">
            {featureItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 transform translate-x-[20px] opacity-0 drop-shadow-md"
                style={{
                  animation: `slideInRight 0.8s ease-out ${1.2 + index * 0.2}s forwards`
                }}
              >
                {item.icon}
                <span className="font-['Inter',Helvetica] font-normal text-white text-base leading-6">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col items-center justify-center h-full px-6 sm:px-8 text-center">
          <div className="flex flex-col items-center gap-8 sm:gap-12 max-w-2xl">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <h1 className="font-['Inter',Helvetica] font-semibold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-1px] sm:tracking-[-1.5px] leading-[36px] sm:leading-[48px] md:leading-[60px] transform translate-y-[30px] opacity-0 animate-[fadeInUp_1.2s_ease-out_0.3s_forwards] drop-shadow-lg">
                Where Integrity, Innovation and Legacy, Power Future-Ready Solutions.
              </h1>

              <Button
                onClick={handleContactUsClick}
                variant="outline"
                className="inline-flex items-center gap-1 pl-2 pr-4 py-2 sm:py-3 rounded-[32px] border border-solid border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg transform translate-y-[20px] opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards] drop-shadow-lg backdrop-blur-sm cursor-pointer"
              >
                <span className="font-['Inter',Helvetica] font-medium text-sm sm:text-base tracking-[-0.32px] leading-6">
                  Contact Us
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FEDD00] rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-45">
                  <ArrowRight className="w-3 h-3 text-black" />
                </div>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full justify-center">
              {featureItems.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-default transform translate-y-[15px] opacity-0 drop-shadow-md"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${1.2 + index * 0.15}s forwards`
                  }}
                >
                  <div className="transition-transform duration-300 hover:rotate-12">
                    {item.icon}
                  </div>
                  <span className="font-['Inter',Helvetica] font-normal text-white text-sm sm:text-base leading-6 transition-colors duration-300 hover:text-[#FEDD00]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};