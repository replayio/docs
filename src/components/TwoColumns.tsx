export function TwoColumns({ 
  children }: { 
    children: React.ReactNode }) {
  return (
    <div className="grid gap-8 justify-center items-start md:grid-cols-2 grid-cols-1">
      { children }
    </div>
  )
}
