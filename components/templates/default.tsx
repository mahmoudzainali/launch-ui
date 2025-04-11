import { Section } from "@/components/ui/section";

export function Templates({ id }: { id?: string }) {
  return (
    <Section id={id}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {/* <Badge variant="outline" className="border-brand/30">
            Pre-made Templates
          </Badge> */}
          <h2 className="animate-appear relative z-10 text-4xl font-semibold leading-tight opacity-0 delay-150 sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
            <span className="text-white [text-shadow:_0_0_8px_#3b82f6,_0_0_12px_#3b82f6]">
              Templates
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Jumpstart your creative projects with our professionally designed
            templates for various use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[
            "/alrais3.jpg",
            "/alrais4.jpg",
            "/alrais6.jpg",
            "/alrais7.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-muted/30 bg-background hover:shadow-md transition-shadow"
            >
              <img
                src={src}
                alt={`Template ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
