export default function PhoneFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-[100dvh] overflow-hidden bg-[#1c1410]">
      <section className="relative mx-auto flex h-[100dvh] w-full max-w-[420px] flex-col overflow-hidden shadow-2xl">
        {children}
      </section>
    </main>
  );
}
