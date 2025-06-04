import SignIn from '@/components/sign-in'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_layout/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-2 h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md">  
        <SignIn />
      </div>
    </div>
  )
}