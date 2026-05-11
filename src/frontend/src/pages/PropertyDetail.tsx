import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice, properties } from "@/data/properties";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  CheckCircle2,
  Mail,
  MapPin,
  Maximize2,
  Phone,
} from "lucide-react";

export function PropertyDetail() {
  const { id } = useParams({ from: "/properties/$id" });
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div
        className="max-w-7xl mx-auto px-6 py-24 text-center"
        data-ocid="property_detail.not_found"
      >
        <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
          Property Not Found
        </h1>
        <p className="text-muted-foreground font-body mb-8">
          The property you're looking for doesn't exist or has been removed.
        </p>
        <Button
          asChild
          className="font-body"
          data-ocid="property_detail.back_button"
        >
          <Link to="/properties">Back to Properties</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-body"
            data-ocid="property_detail.back_link"
          >
            <ArrowLeft size={14} /> Back to Properties
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="w-full h-[50vh] overflow-hidden relative">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        <span className="absolute bottom-6 left-6 text-[10px] font-body font-semibold tracking-widest uppercase px-3 py-1.5 rounded bg-accent text-accent-foreground">
          {property.type}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h1 className="font-display text-4xl font-semibold text-foreground mb-2">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground font-body mb-6">
              <MapPin size={14} className="text-accent/70" />
              {property.location}
            </div>

            <div className="font-display text-3xl font-semibold text-foreground mb-8">
              {formatPrice(property.price)}
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <BedDouble size={20} className="text-accent mx-auto mb-2" />
                <div className="font-display text-xl font-semibold text-foreground">
                  {property.bedrooms}
                </div>
                <div className="text-xs font-body text-muted-foreground">
                  Bedrooms
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <Bath size={20} className="text-accent mx-auto mb-2" />
                <div className="font-display text-xl font-semibold text-foreground">
                  {property.bathrooms}
                </div>
                <div className="text-xs font-body text-muted-foreground">
                  Bathrooms
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <Maximize2 size={20} className="text-accent mx-auto mb-2" />
                <div className="font-display text-xl font-semibold text-foreground">
                  {property.area.toLocaleString()}
                </div>
                <div className="text-xs font-body text-muted-foreground">
                  Sq Ft
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              About This Property
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              {property.description}
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Key Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm font-body text-muted-foreground"
                >
                  <CheckCircle2
                    size={16}
                    className="text-accent shrink-0 mt-0.5"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div
              className="bg-card border border-border rounded-lg p-6 sticky top-28"
              data-ocid="property_detail.enquiry_card"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Enquire About This Property
              </h3>
              <p className="text-sm font-body text-muted-foreground mb-6">
                Speak with a dedicated MFG consultant who can provide full
                details and arrange viewings.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+441235522000"
                  className="w-full"
                  data-ocid="property_detail.call_button"
                >
                  <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-body">
                    <Phone size={15} /> Call Us Now
                  </Button>
                </a>
                <a
                  href={`mailto:info@manzafamilia.com?subject=Enquiry: ${property.title}`}
                  className="w-full"
                  data-ocid="property_detail.email_button"
                >
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-border font-body"
                  >
                    <Mail size={15} /> Send Enquiry
                  </Button>
                </a>
              </div>
              <Separator className="my-6" />
              <div className="text-xs font-body text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">
                  Manza Familia Group
                </p>
                <p>+44 (0)1235 522 000</p>
                <p>info@manzafamilia.com</p>
                <p>14 Old Street, London, EC1V 9BD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
