export default function WorkLayout({
  children,
  projects
}: {
  children: React.ReactNode
  projects: React.ReactNode
}) {
  return (
    <>
      {children}
      {projects}
    </>
  )
}
