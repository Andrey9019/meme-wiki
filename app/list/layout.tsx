export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className="justify-center inline-block text-center max-w-7xl">
        {children}
      </div>
    </section>
  );
}
