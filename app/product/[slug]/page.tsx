import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/data';
import Card from '@/components/ui/Card';
import ProductDetails from '@/components/product/ProductDetails';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
  const products = await import('@/data/products').then((m) => m.products);
  return products.map((p) => ({ slug: p.slug }));
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product not found' };
  return {
    title: `${product.name} – Kinetix`,
    description: product.description,
    openGraph: {
      title: `${product.name} – Kinetix`,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
    return null;
  }

  return (
    <section className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image gallery */}
        <div className="flex flex-col space-y-4">
          {product.images.map((src, idx) => (
            <Card key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <Image src={src} alt={product.name} width={800} height={600} className="object-cover w-full h-auto" />
            </Card>
          ))}
        </div>
        {/* Details */}
        <ProductDetails product={product} />
      </div>
    </section>
  );
}
