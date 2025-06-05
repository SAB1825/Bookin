import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(dashboard)/_layout/dashboard/products/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <p>
        render all user products and can create products
        
    </p>
  </div>
}
