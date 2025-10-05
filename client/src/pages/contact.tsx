import Header from "@/components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-3xl mx-auto text-center py-32">
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-12 text-foreground"
            data-testid="text-contact-title"
          >
            Contact Us
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 font-light">
            We're here to help
          </p>
          
          <a
            href="mailto:thermahelps@gmail.com"
            className="inline-block text-3xl md:text-4xl font-medium text-foreground hover:text-primary transition-colors duration-300"
            data-testid="link-email"
          >
            thermahelps@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
