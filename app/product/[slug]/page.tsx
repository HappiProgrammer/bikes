import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
  const products = await import('@/data/products').then((m) => m.products);
  return products.map((p) => ({ slug: p.slug }));
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
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

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
    return null;
  }

  const { addItem } = useCart();

  const handleAddToCart = () => {
    const defaultVariant = product.variants[0];
    addItem(product, defaultVariant, 1);
  };

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
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-primary-volt">{product.name}</h1>
          <p className="text-lg text-gray-300">{product.description}</p>
          <div className="text-2xl font-semibold text-primary-volt">
            Starting at ${product.variants[0].priceCents / 100}
          </div>
          <Button onClick={handleAddToCart} className="w-max">
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
}
