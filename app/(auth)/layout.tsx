import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image 
            src="/icons/auth-image.png"
            alt="Auth image"
            width={1300}
            height={1300}
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}