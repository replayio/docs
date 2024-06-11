export function TwoColumns({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start justify-center gap-8 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
      {children}
    </div>
  )
}
