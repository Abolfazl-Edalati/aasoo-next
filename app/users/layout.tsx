export default function UsersLaout({ children, modal }: LayoutProps<"/users">) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
