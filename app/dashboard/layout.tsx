export default function DashboarزdLayout({
  children,
  sidebar,
  content,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div>
      <header>Header</header>

      <div>
        {sidebar}
        {content}
      </div>

      {children}
    </div>
  );
}
