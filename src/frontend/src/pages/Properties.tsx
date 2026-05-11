import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice, properties } from "@/data/properties";
import type { Property } from "@/types/property";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bath,
  BedDouble,
  MapPin,
  Maximize2,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

const ALL_TYPES = Array.from(new Set(properties.map((p) => p.type)));

function PropertyCard({
  property,
  index,
}: { property: Property; index: number }) {
  return (
    <Card
      className="group overflow-hidden border-border hover:shadow-xl transition-shadow duration-300 bg-card"
      data-ocid={`properties.property_card.${index + 1}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 text-[10px] font-body font-semibold tracking-widest uppercase px-2.5 py-1 rounded bg-accent text-accent-foreground">
          {property.type}
        </span>
      </div>
      <CardContent className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 leading-snug">
          {property.title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-body mb-3">
          <MapPin size={12} className="text-accent/70" />
          {property.location}
        </div>
        <div className="font-display text-xl font-semibold text-foreground mb-4">
          {formatPrice(property.price)}
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-4 border-t border-border pt-4">
          <span className="flex items-center gap-1.5">
            <BedDouble size={13} className="text-accent/70" />{" "}
            {property.bedrooms} beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={13} className="text-accent/70" /> {property.bathrooms}{" "}
            baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={13} className="text-accent/70" />{" "}
            {property.area.toLocaleString()} sq ft
          </span>
        </div>
        <Link
          to="/properties/$id"
          params={{ id: property.id }}
          className="text-xs font-body font-semibold tracking-wide text-accent hover:text-accent/80 transition-colors duration-200 uppercase flex items-center gap-1.5"
          data-ocid={`properties.detail_link.${index + 1}`}
        >
          View Full Details <ArrowRight size={12} />
        </Link>
      </CardContent>
    </Card>
  );
}

export function Properties() {
  const [activeType, setActiveType] = useState<string>("All");

  const filtered =
    activeType === "All"
      ? properties
      : properties.filter((p) => p.type === activeType);

  return (
    <div className="bg-background">
      {/* Page header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <p className="text-xs tracking-[0.2em] uppercase text-accent font-body font-medium mb-3">
            Our Portfolio
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Available Properties
          </h1>
          <p className="text-muted-foreground font-body max-w-xl">
            Browse our curated selection of residential and commercial
            properties across the United Kingdom, sourced exclusively for our
            clients.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-background border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <SlidersHorizontal
              size={14}
              className="text-muted-foreground shrink-0"
            />
            {["All", ...ALL_TYPES].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={`shrink-0 text-xs font-body font-medium tracking-wide px-4 py-2 rounded-full border transition-colors duration-200 ${
                  activeType === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
                data-ocid={`properties.filter_tab.${type.toLowerCase().replace(/\s+/g, "_")}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24" data-ocid="properties.empty_state">
            <p className="font-display text-2xl text-foreground mb-2">
              No properties found
            </p>
            <p className="text-muted-foreground font-body">
              Try adjusting your filter selection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
