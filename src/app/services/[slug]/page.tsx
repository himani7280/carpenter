import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { carpenterServices } from "@/data";
import { ServiceDetailsPage } from "@/components/services/details-page";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return carpenterServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = carpenterServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | WoodHaus`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = carpenterServices.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetailsPage service={service} />;
}
